// js/core/utils.js

export function pad(n) {
  return String(n).padStart(2, "0");
}

export function nowStamp() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// Escape HTML (pour éviter XSS dans le chat)
export function esc(s) {
  return String(s).replace(/[&<>"']/g, (m) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    })[m]
  );
}

export function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function safeJSONParse(str, fallback) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}
