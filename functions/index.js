// functions/index.js (Node 20 / Functions v2 / Secret Manager) ✅ GROQ
const admin = require("firebase-admin");
admin.initializeApp();

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const GROQ_API_KEY = defineSecret("GROQ_API_KEY");

// ✅ IMPORTANT : mets une URL ABSOLUE pour être sûr que ça marche partout
// Si ton image est dans ton site: https://lycee-europe.com/photoia.png
const AI_AVATAR = "https://lycee-europe.com/photoia.png";

exports.aiReply = onRequest(
  {
    region: "us-central1",
    secrets: [GROQ_API_KEY],
    cors: true,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") return res.status(405).send("Method not allowed");

      const key = GROQ_API_KEY.value();
      if (!key) return res.status(500).send("Missing GROQ_API_KEY secret");

      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();

      if (!prompt || !spaceId || !roomId) {
        return res.status(400).send("Bad request");
      }

      // ✅ GROQ OpenAI-compatible
      const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "Tu es une IA utile et sympa dans un chat privé. Réponds court, clair et naturel. Pas de doxx, pas d'illégal.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      if (!r.ok) {
        const t = await r.text().catch(() => "");
        return res.status(500).send("GROQ error: " + t);
      }

      const data = await r.json();
      const answer = data?.choices?.[0]?.message?.content?.trim() || "…";

<<<<<<< HEAD
      // ✅ Message IA dans Firestore
      await admin
        .firestore()
        .collection("spaces").doc(spaceId)
        .collection("rooms").doc(roomId)
=======
      await admin
        .firestore()
        .collection("spaces")
        .doc(spaceId)
        .collection("rooms")
        .doc(roomId)
>>>>>>> dc08ff2 (zed)
        .collection("messages")
        .add({
          uid: "AI_BOT",
          displayName: "IA",
<<<<<<< HEAD
          photoURL: AI_AVATAR, // ✅ avatar IA
=======
          photoURL: null,
>>>>>>> dc08ff2 (zed)
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