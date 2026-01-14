const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.aiReply = functions
  .runWith({ secrets: ["OPENAI_API_KEY"] })
  .https.onRequest(async (req, res) => {
    try {
      if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
      }

      const key = process.env.OPENAI_API_KEY;
      if (!key) {
        return res.status(500).send("OPENAI_API_KEY missing");
      }

      const { prompt, spaceId, roomId } = req.body || {};
      if (!prompt || !spaceId || !roomId) {
        return res.status(400).send("Bad request");
      }

      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Tu es une IA sympa et utile dans un chat privé. Réponds court, clair et sans contenu dangereux."
            },
            { role: "user", content: String(prompt).slice(0, 1200) }
          ],
          temperature: 0.7
        })
      });

      if (!r.ok) {
        const t = await r.text().catch(() => "");
        return res.status(500).send("OpenAI error: " + t);
      }

      const data = await r.json();
      const answer = data?.choices?.[0]?.message?.content || "…";

      await admin.firestore()
        .collection("spaces").doc(spaceId)
        .collection("rooms").doc(roomId)
        .collection("messages")
        .add({
          uid: "AI_BOT",
          displayName: "IA",
          photoURL: null,
          text: String(answer).slice(0, 800),
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

      res.status(200).send("ok");
    } catch (e) {
      console.error(e);
      res.status(500).send("Server error");
    }
  });
