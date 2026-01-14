const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.aiReply = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    // ⚠️ POUR TEST LOCAL UNIQUEMENT
    // ❌ NE PAS PUSH SUR GITHUB AVEC UNE VRAIE CLÉ
    const OPENAI_KEY = "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";

    if (!OPENAI_KEY || OPENAI_KEY === "COLLER_ICI") {
      return res.status(500).send("OPENAI_KEY missing");
    }

    const { prompt, spaceId, roomId } = req.body || {};
    if (!prompt || !spaceId || !roomId) {
      return res.status(400).send("Bad request");
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Tu es une IA sympa dans un chat privé. Réponds court, clair, sans contenu dangereux."
          },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(500).send("OpenAI error: " + t);
    }

    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content || "…";

    await admin
      .firestore()
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
