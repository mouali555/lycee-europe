// js/core/storage.js
// LocalStorage avec prefix + sécurité (pas de crash si storage bloqué).

import { safeJSONParse } from "./utils.js";

const PREFIX = "le_";

export function lsGet(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw == null) return fallback;
    return safeJSONParse(raw, fallback);
  } catch {
    return fallback;
  }
}

export function lsSet(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export function lsDel(key) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
