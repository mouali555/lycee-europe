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
    mobileNav.style.display = open ? "none" : "block";
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
