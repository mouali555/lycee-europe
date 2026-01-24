/**
 * js/services/accessService.js
 * Déverrouillage d'accès (code ADMINCIEL) via Cloud Function.
 * Source of truth = serveur.
 */
import { CONFIG } from "../core/config.js";
import { auth } from "./firebase.js";
import { getIdToken } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

export async function unlockAccess({ spaceId, code }) {
  const user = auth.currentUser;
  if (!user) throw new Error("AUTH_REQUIRED");

  const normalized = String(code || "").trim().toUpperCase();
  if (!normalized) throw new Error("CODE_REQUIRED");

  const token = await getIdToken(user, /* forceRefresh */ true);

  const res = await fetch(CONFIG.UNLOCK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ spaceId, code: normalized }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.code || "UNLOCK_FAILED");
  }
  return data;
}
