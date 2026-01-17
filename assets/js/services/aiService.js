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

    const text = await res.text().catch(() => "");
    let json;
    try {
      json = text ? JSON.parse(text) : {};
    } catch {
      json = {};
    }

    if (!res.ok || json?.ok === false) {
      const code = json?.code || `HTTP_${res.status}`;
      const msg = json?.message || text || "AI call failed";
      const err = new Error(msg.slice(0, 240));
      err.code = code;
      throw err;
    }

    return json || { ok: true };
  } catch (e) {
    if (e.name === "AbortError") {
      const err = new Error("AI_TIMEOUT");
      err.code = "AI_TIMEOUT";
      throw err;
    }
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}
