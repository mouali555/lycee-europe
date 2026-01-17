// js/services/deleteService.js
// Suppression d'un message (texte / image) via Cloud Function (admin côté serveur)

import { CONFIG } from "../core/config.js";
import { getIdTokenSafe } from "./authService.js";

export async function deleteRoomMessage({ spaceId, roomId, messageId }) {
  if (!CONFIG.DELETE_ENDPOINT) throw new Error("DELETE_DISABLED");
  if (!spaceId || !roomId || !messageId) throw new Error("BAD_REQUEST");

  const token = await getIdTokenSafe();
  if (!token) throw new Error("AUTH_REQUIRED");

  const res = await fetch(CONFIG.DELETE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ spaceId, roomId, messageId }),
  });

  const text = await res.text().catch(() => "");
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = {};
  }

  if (!res.ok || json?.ok === false) {
    const code = json?.code || `HTTP_${res.status}`;
    const msg = json?.message || text || "Delete failed";
    const err = new Error(msg.slice(0, 240));
    err.code = code;
    throw err;
  }

  return json || { ok: true };
}
