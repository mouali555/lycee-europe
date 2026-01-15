// functions/index.js (Node 20 / Functions v2 / Secret Manager)
const admin = require("firebase-admin");
admin.initializeApp();

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

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

      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();

      if (!prompt || !spaceId || !roomId) return res.status(400).send("Bad request");

      // Appel OpenAI
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Tu es une IA utile et sympa dans un chat privé. Réponds court, clair. Pas de doxx, pas de contenu illégal/dangereux.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      if (!r.ok) {
        const t = await r.text().catch(() => "");
        return res.status(500).send("OpenAI error: " + t);
      }

      const data = await r.json();
      const answer = data?.choices?.[0]?.message?.content?.trim() || "…";

      await admin.firestore()
.collection("spaces").doc(spaceId)
.collection("rooms").doc(roomId)
.collection("messages")
.add({
uid: "AI_BOT",
displayName: "IA",
photoURL: "/photoia.png", // ✅ IMPORTANT : avatar IA
text: String(answer).slice(0, 800),
createdAt: admin.firestore.FieldValue.serverTimestamp()
});

      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server error");
    }
  }
);