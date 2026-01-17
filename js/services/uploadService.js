// js/services/uploadService.js

import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { app } from "./firebase.js"; // adapte si ton fichier firebase s'appelle différemment

const storage = getStorage(app);

// Upload d'une image pour un message de chat
export async function uploadChatImage({ spaceId, roomId, uid, file }) {
  if (!file) throw new Error("NO_FILE");
  if (!file.type.startsWith("image/")) throw new Error("NOT_IMAGE");
  if (file.size > 2 * 1024 * 1024) throw new Error("IMAGE_TOO_LARGE"); // 2 Mo

  const ts = Date.now();
  const ext = file.name.split(".").pop() || "jpg";
  const path = `chat/${spaceId}/${roomId}/${uid}/${ts}.${ext}`;

  const fileRef = ref(storage, path);
  const snap = await uploadBytes(fileRef, file, {
    contentType: file.type,
  });

  const url = await getDownloadURL(snap.ref);
  return url;
}
