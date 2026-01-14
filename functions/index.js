// functions/index.js (COMMONJS) — IA + écriture Firestore + CORS + secrets
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

exports.aiReply = onRequest(
  {
    region: "us-central1",
    cors: true,
    secrets: ["OPENAI_API_KEY"], // ✅ IMPORTANT pour que process.env.OPENAI_API_KEY existe
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
      }

      const body = req.body || {};
      const prompt = String(body.prompt || body.message || "").trim();

      // on accepte soit spaceId/roomId, soit par défaut europe/general
      const spaceId = String(body.spaceId || "europe").trim();
      const roomId = String(body.roomId || "general").trim();

      if (!prompt) {
        return res.status(400).json({ error: "Missing prompt/message" });
      }

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
      }

      // ✅ Node 20 => fetch intégré, pas besoin de node-fetch
      const r = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: [
            {
              role: "system",
              content:
                "Tu es une IA utile et sympa dans un chat privé entre élèves. Réponds court, clair, pas de contenu dangereux, pas de doxx.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      const data = await r.json().catch(() => null);

      if (!r.ok) {
        return res.status(500).json({
          error: "OpenAI error",
          status: r.status,
          details: data,
        });
      }

      // récup texte de sortie
      const answer =
        data?.output_text ||
        data?.output?.[0]?.content?.[0]?.text ||
        "…";

      const safe = String(answer).slice(0, 800);

      // ✅ écrit dans Firestore => visible dans ton chat (listener)
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
          text: safe,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

      return res.json({ ok: true, posted: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server crash", details: String(e) });
    }
  }
);