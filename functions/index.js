// functions/index.js (Node 20 / Functions v2 / Secret Manager)

const admin = require("firebase-admin");
admin.initializeApp();

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

// Simple rate limit (en mémoire, par instance)
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
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }
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
  } catch (e) {
    console.error("extractResponseText_error", e);
    return "…";
  }
}

function sendError(res, status, code, message) {
  return res.status(status).json({ ok: false, code, message });
}


exports.unlockAccess = onRequest(
  {
    region: "us-central1",
    cors: true,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return sendError(res, 405, "METHOD_NOT_ALLOWED", "Use POST");
      }

      const token = extractBearerToken(req);
      if (!token) return sendError(res, 401, "AUTH_REQUIRED", "Missing bearer token");

      let decoded;
      try {
        decoded = await admin.auth().verifyIdToken(token);
      } catch (e) {
        console.warn("verifyIdToken_failed", e);
        return sendError(res, 401, "AUTH_INVALID", "Invalid Firebase ID token");
      }

      const uid = decoded.uid;
      if (!rateLimit(uid)) {
        return sendError(res, 429, "RATE_LIMIT", "Too many requests, please slow down");
      }

      const body = req.body || {};
      const spaceId = String(body.spaceId || "").trim();
      const code = String(body.code || "").trim().toUpperCase();

      if (!spaceId) return sendError(res, 400, "SPACE_REQUIRED", "Missing spaceId");
      if (!code) return sendError(res, 400, "CODE_REQUIRED", "Missing code");

      // ✅ Code check (server-side)
      // Keep response contract simple for the frontend:
      // { ok:false, message:"CODE_INVALID" }
      if (code !== "ADMINCIEL") {
        return res.status(403).json({ ok: false, message: "CODE_INVALID" });
      }

      const db = admin.firestore();
      const memberRef = db.doc(`spaces/${spaceId}/members/${uid}`);
      const memberSnap = await memberRef.get();
      if (memberSnap.exists) {
        return res.json({ ok: true, already: true });
      }

      // Create membership (server-side). Client cannot do this.
      const displayName = decoded.name || decoded.email || "User";
      const photoURL = decoded.picture || null;

      await memberRef.set({
        role: "member",
        displayName,
        photoURL,
        joinedAt: admin.firestore.FieldValue.serverTimestamp(),
        unlockedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // Optional: store a server-managed flag for auditing (not used for auth)
      const userRef = db.doc(`users/${uid}`);
      await userRef.set(
        {
          flags: { adminciel: true },
          unlockedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      return res.json({ ok: true, already: false });
    } catch (e) {
      console.error("unlockAccess_failed", e);
      return res.status(500).json({ ok: false, message: "SERVER_ERROR" });
    }
  }
);

exports.aiReply = onRequest(
  {
    region: "us-central1",
    secrets: [OPENAI_API_KEY],
    cors: true,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return sendError(res, 405, "METHOD_NOT_ALLOWED", "Only POST is allowed");
      }

      const key = OPENAI_API_KEY.value();
      if (!key) {
        return sendError(res, 500, "MISSING_SECRET", "Missing OPENAI_API_KEY secret");
      }

      const token = extractBearerToken(req);
      if (!token) {
        return sendError(res, 401, "AUTH_MISSING", "Missing Authorization Bearer token");
      }

      let decoded;
      try {
        decoded = await admin.auth().verifyIdToken(token);
      } catch (e) {
        console.warn("verifyIdToken_failed", e);
        return sendError(res, 401, "AUTH_INVALID", "Invalid Firebase ID token");
      }

      const uid = decoded.uid;
      if (!rateLimit(uid)) {
        return sendError(res, 429, "RATE_LIMIT", "Too many AI calls, please slow down");
      }

      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();

      if (!prompt || !spaceId || !roomId) {
        return sendError(res, 400, "BAD_REQUEST", "prompt, spaceId and roomId are required");
      }

      // Check membership
      const memRef = admin
        .firestore()
        .collection("spaces")
        .doc(spaceId)
        .collection("members")
        .doc(uid);
      const memSnap = await memRef.get();
      if (!memSnap.exists) {
        return sendError(res, 403, "ACCESS_DENIED", "User is not a member of this space");
      }

      // Call OpenAI Responses API
      let openaiRes;
      try {
        openaiRes = await fetch("https://api.openai.com/v1/responses", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            input: [
              {
                role: "system",
                content:
                  "Tu es @ia dans un chat privé. Réponds court, clair, utile. Pas de doxx, pas de contenu illégal ou dangereux.",
              },
              { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_output_tokens: 220,
            store: false,
          }),
        });
      } catch (e) {
        console.error("openai_fetch_failed", e);
        return sendError(res, 502, "OPENAI_NETWORK", "Unable to reach OpenAI");
      }

      if (!openaiRes.ok) {
        const t = await openaiRes.text().catch(() => "");
        console.error("openai_error", openaiRes.status, t);
        return sendError(
          res,
          502,
          "OPENAI_ERROR",
          `OpenAI error (${openaiRes.status})`
        );
      }

      const data = await openaiRes.json().catch(() => ({}));
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
          role: "assistant",
          model: "gpt-4o-mini",
          text: String(answer).slice(0, 800),
          // Timestamp immédiat (tri chat) + serverTimestamp (référence)
          createdAt: admin.firestore.Timestamp.now(),
          createdAtServer: admin.firestore.FieldValue.serverTimestamp(),
        });

      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error("aiReply_unhandled", e);
      return sendError(res, 500, "SERVER_ERROR", "Unexpected server error");
    }
  }
);

// ===== Delete message (texte + image) =====
// POST { spaceId, roomId, messageId }
// - Auth via Firebase ID token (Bearer)
// - Autorise la suppression si:
//   • uid === message.uid
//   • OU membre role: admin/moderator

function storagePathFromDownloadURL(url) {
  try {
    const s = String(url || "");
    // Firebase Storage download URL contient "/o/<encodedPath>?..."
    const idx = s.indexOf("/o/");
    if (idx < 0) return null;
    const rest = s.slice(idx + 3);
    const q = rest.indexOf("?");
    const encoded = q >= 0 ? rest.slice(0, q) : rest;
    return decodeURIComponent(encoded);
  } catch {
    return null;
  }
}

exports.deleteMessage = onRequest(
  {
    region: "us-central1",
    cors: true,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return sendError(res, 405, "METHOD_NOT_ALLOWED", "Only POST is allowed");
      }

      const token = extractBearerToken(req);
      if (!token) {
        return sendError(res, 401, "AUTH_MISSING", "Missing Authorization Bearer token");
      }

      let decoded;
      try {
        decoded = await admin.auth().verifyIdToken(token);
      } catch (e) {
        console.warn("verifyIdToken_failed", e);
        return sendError(res, 401, "AUTH_INVALID", "Invalid Firebase ID token");
      }

      const uid = decoded.uid;
      const body = req.body || {};
      const spaceId = String(body.spaceId || "").trim();
      const roomId = String(body.roomId || "").trim();
      const messageId = String(body.messageId || "").trim();

      if (!spaceId || !roomId || !messageId) {
        return sendError(res, 400, "BAD_REQUEST", "spaceId, roomId and messageId are required");
      }

      // membership
      const memRef = admin
        .firestore()
        .collection("spaces")
        .doc(spaceId)
        .collection("members")
        .doc(uid);

      const memSnap = await memRef.get();
      if (!memSnap.exists) {
        return sendError(res, 403, "ACCESS_DENIED", "User is not a member of this space");
      }

      const memRole = String(memSnap.data()?.role || "member").toLowerCase();
      const isMod = memRole === "admin" || memRole === "moderator";

      const msgRef = admin
        .firestore()
        .collection("spaces")
        .doc(spaceId)
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .doc(messageId);

      const msgSnap = await msgRef.get();
      if (!msgSnap.exists) {
        return sendError(res, 404, "NOT_FOUND", "Message not found");
      }

      const msg = msgSnap.data() || {};
      const ownerUid = String(msg.uid || "");
      if (!isMod && ownerUid !== uid) {
        return sendError(res, 403, "FORBIDDEN", "You can only delete your own messages");
      }

      // delete firestore message
      await msgRef.delete();

      // delete image from storage if present
      const imageURL = msg.imageURL;
      if (imageURL) {
        const path = storagePathFromDownloadURL(imageURL);
        if (path) {
          try {
            await admin.storage().bucket().file(path).delete();
          } catch (e) {
            // Not fatal: file might already be gone
            console.warn("delete_storage_failed", e?.message || e);
          }
        }
      }

      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error("deleteMessage_unhandled", e);
      return sendError(res, 500, "SERVER_ERROR", "Unexpected server error");
    }
  }
);
