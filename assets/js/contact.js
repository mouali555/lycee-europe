// js/contact.js — Contact form (validation + submit)
import { CONFIG } from "./core/config.js";

const form = document.getElementById("contactForm");
const btn = document.getElementById("contactSubmit");
const statusEl = document.getElementById("contactStatus");

const nameEl = document.getElementById("cName");
const emailEl = document.getElementById("cEmail");
const subjectEl = document.getElementById("cSubject");
const messageEl = document.getElementById("cMessage");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errSubject = document.getElementById("errSubject");
const errMessage = document.getElementById("errMessage");

let inFlight = false;

function setStatus(text) {
  if (statusEl) statusEl.textContent = text || "";
}

function setErr(el, msg) {
  if (!el) return;
  el.textContent = msg || "";
}

function clearErrors() {
  setErr(errName, "");
  setErr(errEmail, "");
  setErr(errSubject, "");
  setErr(errMessage, "");
}

function isEmailValid(v) {
  const s = String(v || "").trim();
  // assez strict sans être fragile
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s);
}

function focusFirstInvalid(fields) {
  for (const f of fields) {
    if (!f?.ok) {
      try {
        f?.el?.focus?.();
      } catch {}
      break;
    }
  }
}

function validate() {
  clearErrors();
  const name = String(nameEl?.value || "").trim();
  const email = String(emailEl?.value || "").trim();
  const subject = String(subjectEl?.value || "").trim();
  const message = String(messageEl?.value || "").trim();

  const checks = [];

  // ✅ S021
  if (name.length < 2) {
    setErr(errName, "Indique ton nom (2 caractères minimum)."
    );
    checks.push({ el: nameEl, ok: false });
  } else checks.push({ el: nameEl, ok: true });

  // ✅ S022
  if (!isEmailValid(email)) {
    setErr(errEmail, "Email invalide. Exemple : prenom.nom@domaine.fr");
    checks.push({ el: emailEl, ok: false });
  } else checks.push({ el: emailEl, ok: true });

  if (subject.length < 3) {
    setErr(errSubject, "Sujet trop court (3 caractères minimum)."
    );
    checks.push({ el: subjectEl, ok: false });
  } else checks.push({ el: subjectEl, ok: true });

  if (message.length < 10) {
    setErr(errMessage, "Message trop court (10 caractères minimum)."
    );
    checks.push({ el: messageEl, ok: false });
  } else checks.push({ el: messageEl, ok: true });

  const ok = checks.every((c) => c.ok);
  if (!ok) focusFirstInvalid(checks);
  return ok;
}

async function submitContact(payload) {
  const res = await fetch(CONFIG.CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.code || data?.message || `HTTP_${res.status}`;
    throw new Error(msg);
  }
  return data;
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  setStatus("");

  if (inFlight) return;

  if (navigator.onLine === false) {
    setStatus("Hors ligne : envoi impossible. Réessaie quand tu as du réseau.");
    return;
  }

  if (!validate()) return;

  inFlight = true;
  try {
    if (btn) {
      btn.disabled = true;
      btn.setAttribute("aria-busy", "true");
    }
    setStatus("Envoi en cours…");

    const payload = {
      name: String(nameEl.value || "").trim(),
      email: String(emailEl.value || "").trim(),
      subject: String(subjectEl.value || "").trim(),
      message: String(messageEl.value || "").trim(),
      meta: {
        url: location.href,
        ua: navigator.userAgent,
        ts: Date.now(),
      },
    };

    await submitContact(payload);

    // ✅ S023
    setStatus("✅ Message envoyé. Merci !");
    form.reset();
    clearErrors();
  } catch (err) {
    // ✅ S024
    const m = String(err?.message || "SERVER_ERROR");
    if (/RATE_LIMIT/i.test(m)) {
      setStatus("Trop de tentatives. Réessaie dans une minute.");
    } else {
      setStatus("Erreur serveur. Réessaie dans quelques instants.");
    }
  } finally {
    inFlight = false;
    try {
      if (btn) {
        btn.disabled = false;
        btn.removeAttribute("aria-busy");
      }
    } catch {}
  }
});

form?.addEventListener("reset", () => {
  clearErrors();
  setStatus("");
});
