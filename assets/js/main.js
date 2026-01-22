/*
  Global front-end helpers (no dependencies)
  - Theme toggle (dark/light)
  - Mobile menu toggle
  - Scroll reveal animations (IntersectionObserver)

  Notes:
  - The initial theme is applied as early as possible via an inline <script> in the <head>
    to avoid a flash of wrong theme.
*/

function qs(sel, root = document) {
  return root.querySelector(sel);
}
function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

// ================================
// Theme toggle (site-wide)
// ================================
const THEME_KEY = "le_theme";
const htmlRoot = document.documentElement;

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch {}
}

function systemTheme() {
  try {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function currentTheme() {
  return htmlRoot.dataset.theme || safeGet(THEME_KEY) || systemTheme();
}

function applyTheme(nextTheme) {
  const t = nextTheme === "light" ? "light" : "dark";
  htmlRoot.dataset.theme = t;
  safeSet(THEME_KEY, t);
  refreshThemeButtons();
}

function refreshThemeButtons() {
  const t = currentTheme();
  const btns = qsa("[data-theme-toggle]");
  for (const b of btns) {
    // Icon shows the NEXT theme (what you will switch to)
    const willGoTo = t === "light" ? "dark" : "light";
    b.textContent = willGoTo === "light" ? "☀️" : "🌙";
    b.setAttribute("aria-label", willGoTo === "light" ? "Passer en mode clair" : "Passer en mode sombre");
    b.setAttribute("title", willGoTo === "light" ? "Mode clair" : "Mode sombre");
  }
}

// Bind toggles if present
const themeBtns = qsa("[data-theme-toggle]");
if (themeBtns.length) {
  refreshThemeButtons();
  for (const b of themeBtns) {
    b.addEventListener("click", () => {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  // Follow system preference only if user didn't explicitly choose a theme
  const userChoice = safeGet(THEME_KEY);
  if (!userChoice && window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => applyTheme(mq.matches ? "light" : "dark");
    try {
      mq.addEventListener("change", onChange);
    } catch {
      // Safari fallback
      mq.addListener(onChange);
    }
  }
}

// ================================
// Mobile menu (marketing pages)
// ================================
const menuBtn = qs("[data-menu-btn]");
const mobileNav = qs("[data-mobile-nav]");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.getAttribute("data-open") === "true";
    mobileNav.setAttribute("data-open", open ? "false" : "true");
    menuBtn.setAttribute("aria-expanded", String(!open));
  });
}

// ================================
// Reveal on scroll
// ================================
const revealEls = qsa("[data-reveal]");

if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-inview");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  for (const el of revealEls) {
    el.classList.add("reveal");
    io.observe(el);
  }
}

// ================================
// Resilience: Service Worker (offline shell)
// ================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js", { scope: "./" })
      .catch(() => {
        // Silent: SW is a progressive enhancement
      });
  });
}

// ================================
// Resilience: safe external link behavior
// ================================
// Ensure target="_blank" links have rel="noopener noreferrer"
for (const a of qsa('a[target="_blank"]')) {
  const rel = (a.getAttribute("rel") || "").toLowerCase();
  if (!rel.includes("noopener")) a.setAttribute("rel", (rel + " noopener").trim());
  if (!rel.includes("noreferrer")) a.setAttribute("rel", (a.getAttribute("rel") + " noreferrer").trim());
}

// ================================
// Easter egg (hidden page)
// ================================
// Type the secret code anywhere to open the hidden page.
// Note: this is *not* real security (client-side only).
(() => {
  const SECRET_PATH = "./atelier-7g9k2p.html";
  const SECRET_KEY = "joao-remi-arthur-johann-dylan";
  const CODE = "goofy"; // what you type to trigger the redirect

  // Don't hijack typing inside inputs/textareas/contenteditable.
  const isTypingField = (el) => {
    if (!el) return false;
    const tag = (el.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || el.isContentEditable;
  };

  let buffer = "";
  const maxLen = Math.max(24, CODE.length + 6);

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.defaultPrevented) return;
      if (isTypingField(document.activeElement)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const k = e.key;
      if (k.length !== 1) return; // ignore Shift, Enter, etc.

      buffer = (buffer + k.toLowerCase()).slice(-maxLen);
      if (buffer.endsWith(CODE)) {
        // Open the hidden page pre-filled with the key.
        window.location.href = `${SECRET_PATH}?k=${encodeURIComponent(SECRET_KEY)}`;
      }
    },
    { passive: true }
  );
})();
