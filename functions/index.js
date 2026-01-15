// functions/index.js (Node 20 / Functions v2 / Secret Manager)
// v2: Auth Firebase + check membership serveur + OpenAI Responses API

const admin = require("firebase-admin");
admin.initializeApp();

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

// Simple rate limit (par instance)
const RL = new Map();
function rateLimit(uid, max = 12, windowMs = 60_000) {
  const now = Date.now();
  const arr = RL.get(uid) || [];
  const keep = arr.filter((t) => now - t < windowMs);
  keep.push(now);
  RL.set(uid, keep);
  return keep.length <= max;
}

function extractBearerToken(req) {
  const h = String(req.headers.authorization || "");
  if (!h.toLowerCase().startsWith("bearer ")) return null;
  return h.slice(7).trim();
}

function extractResponseText(data) {
  if (!data) return "…";
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text.trim();

  // Raw Responses API shape: output -> items -> message -> content[]
  try {
    const out = Array.isArray(data.output) ? data.output : [];
    const texts = [];
    for (const item of out) {
      if (item?.type !== "message") continue;
      const content = Array.isArray(item?.content) ? item.content : [];
      for (const c of content) {
        if (c?.type === "output_text" && typeof c?.text === "string") texts.push(c.text);
        if (c?.type === "text" && typeof c?.text === "string") texts.push(c.text);
      }
    }
    const joined = texts.join("\n").trim();
    return joined || "…";
  } catch {
    return "…";
  }
}

exports.aiReply = onRequest(
  {
    region: "us-central1",
    secrets: [OPENAI_API_KEY],
    cors: true,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") return res.status(405).send("Method not allowed");

      const key = OPENAI_API_KEY.value();
      if (!key) return res.status(500).send("Missing OPENAI_API_KEY secret");

      // ✅ Auth Firebase obligatoire (token envoyé par le client)
      const token = extractBearerToken(req);
      if (!token) return res.status(401).send("Missing Authorization Bearer token");

      let decoded;
      try {
        decoded = await admin.auth().verifyIdToken(token);
      } catch {
        return res.status(401).send("Invalid token");
      }

      const uid = decoded.uid;
      if (!rateLimit(uid)) return res.status(429).send("Rate limit");

      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();

      if (!prompt || !spaceId || !roomId) return res.status(400).send("Bad request");

      // ✅ Check membership côté serveur (pas juste côté client)
      const memRef = admin.firestore().collection("spaces").doc(spaceId).collection("members").doc(uid);
      const memSnap = await memRef.get();
      if (!memSnap.exists) return res.status(403).send("Access denied");

      // ✅ OpenAI Responses API (remplace chat/completions)
      const r = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          // Messages style (compatible)
          input: [
            {
              role: "system",
              content:
                "Tu es @ia dans un chat privé. Réponds court, clair, utile. Pas de doxx, pas de contenu illégal/dangereux.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_output_tokens: 220,
          store: false,
          // safety_identifier: uid (optionnel, si tu veux)
        }),
      });

      if (!r.ok) {
        const t = await r.text().catch(() => "");
        return res.status(500).send("OpenAI error: " + t);
      }

      const data = await r.json();
      const answer = extractResponseText(data);

      await admin
        .firestore()
        .collection("spaces")
        .doc(spaceId)
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .add({
          uid: "AI_BOT",
          displayName: "IA",
          photoURL: null,
          text: String(answer).slice(0, 800),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server error");
    }
  }
);