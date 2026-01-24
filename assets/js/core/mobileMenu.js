// js/core/mobileMenu.js
// Gestion robuste du menu mobile (accessibilité + UX)
// - aria-expanded / aria-hidden
// - fermeture sur navigation, clic dehors, ESC
// - lock scroll body
// - focus sur le 1er lien et retour focus au bouton

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function setBodyLock(locked) {
  document.documentElement.classList.toggle("noScroll", locked);
  document.body.classList.toggle("noScroll", locked);
}

export function initMobileMenu({
  menuBtnSel = "[data-menu-btn]",
  navSel = "[data-mobile-nav]",
  openAttr = "data-open",
} = {}) {
  const menuBtn = qs(menuBtnSel);
  const mobileNav = qs(navSel);
  if (!menuBtn || !mobileNav) return null;

  // Ensure a11y attributes exist
  if (!mobileNav.hasAttribute("aria-hidden")) {
    mobileNav.setAttribute("aria-hidden", "true");
  }
  if (!menuBtn.hasAttribute("aria-expanded")) {
    menuBtn.setAttribute("aria-expanded", "false");
  }

  let lastFocus = null;

  const setOpen = (open) => {
    mobileNav.setAttribute(openAttr, open ? "true" : "false");
    mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    setBodyLock(open);

    if (open) {
      lastFocus = document.activeElement;
      // focus 1er lien
      const first = qsa("a, button, input, [tabindex]", mobileNav).find(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
      );
      first?.focus?.({ preventScroll: true });
    } else {
      // restore focus
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus({ preventScroll: true });
      } else {
        menuBtn.focus?.({ preventScroll: true });
      }
    }
  };

  const isOpen = () => mobileNav.getAttribute(openAttr) === "true";

  const toggle = () => setOpen(!isOpen());
  const close = () => setOpen(false);

  // Button click
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggle();
  });

  // Close on link click
  mobileNav.addEventListener("click", (e) => {
    const a = e.target?.closest?.("a");
    if (a) close();
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const inside = mobileNav.contains(e.target) || menuBtn.contains(e.target);
    if (!inside) close();
  });

  // ESC close
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!isOpen()) return;
    e.preventDefault();
    close();
  });

  // Close on resize/orientationchange
  window.addEventListener("resize", () => {
    if (isOpen()) close();
  });

  return { isOpen, close, open: () => setOpen(true), toggle };
}
