// js/services/aiService.js

import { CONFIG } from "../core/config.js";
import { getIdTokenSafe } from "./authService.js";

export async function callAI({ spaceId, roomId, user, prompt }) {
  if (!CONFIG.AI_ENDPOINT) throw new Error("AI_DISABLED");
  const token = await getIdTokenSafe();
  if (!token) throw new Error("AUTH_REQUIRED");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONFIG.AI_TIMEOUT_MS);

  try {
    const res = await fetch(CONFIG.AI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        spaceId,
        roomId,
        uid: user.uid,
        displayName: user.name,
        photoURL: user.photoURL || null,
        prompt,
      }),
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`HTTP_${res.status} ${t}`.slice(0, 240));
    }
    return await res.json().catch(() => ({ ok: true }));
  } finally {
    clearTimeout(timeout);
  }
}
