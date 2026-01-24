// assets/js/atelier.js
// Page "Atelier" : accès privé (Firebase Auth + membership Firestore)
// + mini-chat dans un salon dédié.

import { CONFIG } from "./core/config.js";
import { loginGoogle, logout, watchAuth } from "./services/authService.js";
import { unlockAccess } from "./services/accessService.js";
import { checkMembership, subscribeRoomMessages, sendRoomMessage } from "./services/chatService.js";

// Même espace que la console.
const SPACE_ID = (CONFIG && CONFIG.SPACE_ID) ? CONFIG.SPACE_ID : "europe";
// Salon dédié pour cette page.
const ROOM_ID = "atelier";

// ===== DOM =====
// IMPORTANT:
// Cette page peut être chargée très tôt (script module dans <head>),
// et certains navigateurs / modes peuvent exécuter avant que tout le DOM
// soit disponible. Pour éviter "tout est null" => rien ne marche,
// on référence le DOM uniquement au moment du boot.
let locked = null;
let gate = null;
let unlocked = null;

let btnLogin = null;
let btnLogout = null;
let userTag = null;

let inviteCode = null;
let joinBtn = null;
let gateMsg = null;

let miniChatList = null;
let miniChatInput = null;
let miniChatSend = null;

let currentUser = null;
let isMember = false;
let unsub = null;

function show(el) {
  if (!el) return;
  el.hidden = false;
}

function hide(el) {
  if (!el) return;
  el.hidden = true;
}

function setText(el, t) {
  if (!el) return;
  el.textContent = t;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stopMiniChat() {
  if (unsub) {
    try { unsub(); } catch {}
    unsub = null;
  }
  if (miniChatList) {
    miniChatList.innerHTML = '<p class="tiny" style="margin:0; opacity:0.7;">(verrouillé)</p>';
  }
}

function renderAccess() {
  // Pas connecté : écran gate (login)
  if (!currentUser) {
    hide(unlocked);
    show(gate);
    hide(locked);
    if (btnLogin) btnLogin.style.display = "";
    if (btnLogout) btnLogout.style.display = "none";
    setText(userTag, "OFFLINE");
    setText(gateMsg, "—");
    stopMiniChat();
    return;
  }

  // Connecté mais pas membre : gate + invite
  if (!isMember) {
    hide(unlocked);
    show(gate);
    hide(locked);
    if (btnLogin) btnLogin.style.display = "none";
    if (btnLogout) btnLogout.style.display = "";
    setText(
      userTag,
      currentUser.displayName ? `Connecté: ${currentUser.displayName}` : "Connecté"
    );
    setText(gateMsg, "Pas encore membre. Colle un code d’invite puis clique Rejoindre.");
    stopMiniChat();
    return;
  }

  // OK : page unlock
  show(unlocked);
  hide(gate);
  hide(locked);
  if (btnLogin) btnLogin.style.display = "none";
  if (btnLogout) btnLogout.style.display = "";
  setText(
    userTag,
    currentUser.displayName ? `Connecté: ${currentUser.displayName}` : "Connecté"
  );

  startMiniChat();
}

async function refreshMembership() {
  if (!currentUser) {
    isMember = false;
    return;
  }
  try {
    isMember = await checkMembership(SPACE_ID, currentUser.uid);
  } catch {
    isMember = false;
  }
}

async function onAuthChanged(user) {
  currentUser = user || null;
  await refreshMembership();

  // Auto-unlock if this device already used a valid invite.
  if (currentUser && !isMember) {
    const lastInvite = (() => {
      try {
        return localStorage.getItem("le_last_invite");
      } catch {
        return null;
      }
    })();

    if (lastInvite) {
      try {
        await unlockAccess(SPACE_ID, lastInvite, {
          uid: currentUser.uid,
          name: currentUser.displayName || "USER",
        });
        await refreshMembership();
      } catch {
        // Ignore: user can still enter an invite manually.
      }
    }
  }
  renderAccess();
}

// ===== Gate actions =====
function bindGateActions() {
  btnLogin?.addEventListener("click", async () => {
    try {
      setText(gateMsg, "Connexion…");
      await loginGoogle();
    } catch (e) {
      console.error(e);
      setText(gateMsg, "Impossible de se connecter (popup bloquée ?). Réessaie.");
    }
  });

  btnLogout?.addEventListener("click", async () => {
    try {
      await logout();
    } catch {}
  });

  joinBtn?.addEventListener("click", async () => {
    const code = String(inviteCode?.value || "").trim();
    if (!currentUser) {
      setText(gateMsg, "Connecte-toi d’abord.");
      return;
    }
    if (!code) {
      setText(gateMsg, "Colle un code d’invite.");
      return;
    }

    try {
      setText(gateMsg, "Vérification du code…");
      await unlockAccess(SPACE_ID, code, {
        uid: currentUser.uid,
        name: currentUser.displayName || "USER",
      });
      await refreshMembership();
      if (isMember) {
        setText(gateMsg, "✅ Accès accordé.");
        renderAccess();
      } else {
        setText(gateMsg, "Code accepté, mais accès non activé. Recharge la page.");
      }
    } catch (e) {
      console.error(e);
      setText(gateMsg, "Code invalide (ou expiré)." );
    }
  });
}

// ===== Mini chat =====
const MAX_RENDERED = 120;
let rendered = [];

function renderMiniChat() {
  if (!miniChatList) return;

  const html = rendered
    .slice(-MAX_RENDERED)
    .map((m) => {
      const who = escapeHtml(m.displayName || m.uid || "user");
      const text = escapeHtml(m.text || "");
      const time = m.createdAt?.seconds
        ? new Date(m.createdAt.seconds * 1000).toLocaleString()
        : "";
      const meta = time ? `<span style="opacity:.65"> • ${escapeHtml(time)}</span>` : "";
      return `<div style="padding:8px 6px; border-bottom:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:12px; opacity:.75;"><b>${who}</b>${meta}</div>
        <div style="white-space:pre-wrap; line-height:1.35;">${text}</div>
      </div>`;
    })
    .join("");

  miniChatList.innerHTML =
    html || '<p class="tiny" style="margin:0; opacity:0.7;">Aucun message.</p>';

  try {
    miniChatList.scrollTop = miniChatList.scrollHeight;
  } catch {}
}

function startMiniChat() {
  if (!currentUser || !isMember) return;
  if (unsub) return;

  if (miniChatList) {
    miniChatList.innerHTML = '<p class="tiny" style="margin:0; opacity:0.7;">Chargement…</p>';
  }

  unsub = subscribeRoomMessages(SPACE_ID, ROOM_ID, (evt) => {
    if (evt.type === "removed") return;

    const msg = {
      id: evt.id,
      uid: evt.uid,
      displayName: evt.displayName || null,
      text: String(evt.text || "").slice(0, 800),
      createdAt: evt.createdAt || null,
    };

    const idx = rendered.findIndex((x) => x.id === msg.id);
    if (idx >= 0) rendered[idx] = msg;
    else rendered.push(msg);

    if (rendered.length > MAX_RENDERED * 2) rendered = rendered.slice(-MAX_RENDERED);

    renderMiniChat();
  });
}

async function sendMiniMessage() {
  if (!currentUser || !isMember) return;
  const text = String(miniChatInput?.value || "").trim();
  if (!text) return;

  if (miniChatInput) miniChatInput.value = "";

  try {
    await sendRoomMessage(SPACE_ID, ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.displayName || "USER",
      role: "user",
      text: text.slice(0, CONFIG.MAX_MESSAGE_LEN || 800),
    });
  } catch (e) {
    console.error(e);
    if (miniChatInput) miniChatInput.value = text;
    alert("Impossible d'envoyer le message (hors ligne ?)." );
  }
}

function bindMiniChatActions() {
  miniChatSend?.addEventListener("click", sendMiniMessage);
  miniChatInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMiniMessage();
  });
}

function boot() {
  // Query DOM (safe)
  locked = document.getElementById("locked");
  gate = document.getElementById("gate");
  unlocked = document.getElementById("unlocked");

  btnLogin = document.getElementById("btn-login");
  btnLogout = document.getElementById("btn-logout");
  userTag = document.getElementById("userTag");

  inviteCode = document.getElementById("inviteCode");
  joinBtn = document.getElementById("joinBtn");
  gateMsg = document.getElementById("gateMsg");

  miniChatList = document.getElementById("miniChatList");
  miniChatInput = document.getElementById("miniChatInput");
  miniChatSend = document.getElementById("miniChatSend");

  bindGateActions();
  bindMiniChatActions();

  // Boot UI state
  hide(locked);
  show(gate);
  hide(unlocked);

  watchAuth(onAuthChanged);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
