// js/services/uploadService.js
// Upload d'images pour le chat (Firebase Storage)

import { app } from "./firebase.js"; // adapte le chemin si besoin

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

const storage = getStorage(app);

/**
 * Upload une image du chat et retourne l'URL publique
 */
export async function uploadChatImage({ spaceId, roomId, uid, file }) {
  if (!file) throw new Error("NO_FILE");
  if (navigator.onLine === false) throw new Error("OFFLINE");
  if (!file.type.startsWith("image/")) throw new Error("NOT_IMAGE");
  // Tolérance raisonnable pour mobile (évite les crashs + uploads interminables)
  if (file.size > 8 * 1024 * 1024) throw new Error("IMAGE_TOO_LARGE"); // 8 Mo max

  const ts = Date.now();
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const safeSpace = String(spaceId || "space").replace(/[^a-zA-Z0-9_-]/g, "_");
  const safeRoom = String(roomId || "room").replace(/[^a-zA-Z0-9_-]/g, "_");
  const safeUid = String(uid || "user").replace(/[^a-zA-Z0-9_-]/g, "_");

  const path = `chat/${safeSpace}/${safeRoom}/${safeUid}/${ts}.${ext}`;

  const fileRef = ref(storage, path);
  const snap = await uploadBytes(fileRef, file, {
    contentType: file.type,
  });

  const url = await getDownloadURL(snap.ref);
  return url;
}
