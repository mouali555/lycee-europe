/**
 * functions/index.js — AI BOT (OpenAI) + Firestore write
 * ✅ clé via Firebase Secret: OPENAI_API_KEY
 * ✅ Node 20 compatible
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.aiReply = functions
  .runWith({ secrets: ["OPENAI_API_KEY"] })
  .https.onRequest(async (req, res) => {
    try {
      // CORS simple (si tu appelles depuis le navigateur)
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      if (req.method === "OPTIONS") return res.status(204).send("");

      if (req.method !== "POST") return res.status(405).send("Method not allowed");

      const key = process.env.OPENAI_API_KEY;
      if (!key) return res.status(500).send("OPENAI_API_KEY missing");

      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();

      if (!prompt || !spaceId || !roomId) return res.status(400).send("Bad request");

      // Appel OpenAI (chat completions)
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Tu es une IA utile et sympa dans un chat privé. Réponds court et clair. Pas de doxx, pas de contenu dangereux, pas de haine. Si on te demande un truc illégal ou dangereux, refuse."
            },
            { role: "user", content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 180
        })
      });

      if (!r.ok) {
        const t = await r.text().catch(() => "");
        console.error("OpenAI error:", r.status, t);
        return res.status(500).send("OpenAI error");
      }

      const data = await r.json();
      const answer = String(data?.choices?.[0]?.message?.content || "…").trim();

      await admin.firestore()
        .collection("spaces").doc(spaceId)
        .collection("rooms").doc(roomId)
        .collection("messages")
        .add({
          uid: "AI_BOT",
          displayName: "IA",
          photoURL: null,
          text: answer.slice(0, 800),
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server error");
    }
  });
