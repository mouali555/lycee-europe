// js/console/main.js — console XPCHAT + upload image
import { CONFIG } from "../core/config.js";
import { nowStamp } from "../core/utils.js";
import { loginGoogle, logout, watchAuth } from "../services/authService.js";
import {
  ensureUserDoc,
  getProfile,
  grantKey,
  removeKey,
} from "../services/userService.js";
import {
  checkMembership,
  joinWithInvite,
  subscribeRoomMessages,
  sendRoomMessage,
} from "../services/chatService.js";
import { callAI } from "../services/aiService.js";
import { uploadChatImage } from "../services/uploadService.js";
import { deleteRoomMessage } from "../services/deleteService.js";
import { toggleRoomMessageReaction } from "../services/reactionService.js";
// messageList.js exports a named class (export class MessageList)
// Importing it as default breaks module loading and prevents the chat from rendering.
import { MessageList } from "../ui/messageList.js";
import { HUD } from "../ui/hud.js";

// Debug overlay (enable with ?debug=1)
import { initDebugOverlay } from "../debug/overlay.js";

// init as early as possible
initDebugOverlay();

// ===== DOM =====
const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");

// Header mobile menu (console page also uses the site header)
const headerMenuBtn = document.querySelector("[data-menu-btn]");
const headerMobileNav = document.querySelector("[data-mobile-nav]");

// Preferences toggles
const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

const inviteCode = document.getElementById("inviteCode");
const joinBtn = document.getElementById("joinBtn");

const spaceName = document.getElementById("spaceName");
const roomName = document.getElementById("roomName");

const messagesEl = document.getElementById("messages");
const newMsgBtn = document.getElementById("newMsgBtn");
const offlineBanner = document.getElementById("offlineBanner");

// Sidebar mobile toggle
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");
const iaBtn = document.getElementById("iaBtn");
const charCount = document.getElementById("charCount");

// image
const imgBtn = document.getElementById("imgBtn");
const imgInput = document.getElementById("imgInput");

// Profile modal
const profileModal = document.getElementById("profileModal");
const closeProfile = document.getElementById("closeProfile");
const profileName = document.getElementById("profileName");
const profileRank = document.getElementById("profileRank");
const profileKeys = document.getElementById("profileKeys");

// HUD
const hud = new HUD({
  status: document.getElementById("hudStatus"),
  level: document.getElementById("hudLevel"),
  streak: document.getElementById("hudStreak"),
  xpFill: document.getElementById("hudXpFill"),
  xpText: document.getElementById("hudXpText"),
  missionText: document.getElementById("hudMissionText"),
  missionClaim: document.getElementById("hudMissionClaim"),
  missionMeta: document.getElementById("hudMissionMeta"),
  vaultState: document.getElementById("hudVaultState"),
});

// ===== UI helpers =====
function setTerminal(text) {
  if (terminalStatus) terminalStatus.textContent = text;
}

function dbgInfo(msg, extra) {
  try {
    window.__XPDBG__?.log?.(msg, extra);
  } catch {}
}

function dbgErr(err, ctx) {
  try {
    window.__XPDBG__?.err?.(err, ctx);
  } catch {}
}

function updateConnectivityUI() {
  const online = navigator.onLine !== false;
  if (offlineBanner)
    offlineBanner.setAttribute("aria-hidden", online ? "true" : "false");
  hud.setOnlineState(online);
}

function updateCharCount() {
  if (!charCount) return;
  const n = (msgInput?.value || "").length;
  charCount.textContent = `${n}/${CONFIG.MAX_MESSAGE_LEN}`;
}

function openProfile() {
  if (!profileModal) return;
  profileModal.setAttribute("aria-hidden", "false");
}

function closeProfileModal() {
  if (!profileModal) return;
  profileModal.setAttribute("aria-hidden", "true");
}

// ===== Sidebar (mobile) =====
function setSidebarOpen(open) {
  document.body.classList.toggle("sidebar-open", !!open);
  if (sidebarOverlay)
    sidebarOverlay.setAttribute("aria-hidden", open ? "false" : "true");
}

sidebarToggle?.addEventListener("click", () => {
  setSidebarOpen(!document.body.classList.contains("sidebar-open"));
});

sidebarOverlay?.addEventListener("click", () => setSidebarOpen(false));

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setSidebarOpen(false);
});

// ===== Header mobile menu (Contact/About links) =====
if (headerMenuBtn && headerMobileNav) {
  headerMenuBtn.addEventListener("click", () => {
    const open = headerMobileNav.getAttribute("data-open") === "true";
    headerMobileNav.setAttribute("data-open", open ? "false" : "true");
    headerMenuBtn.setAttribute("aria-expanded", String(!open));
  });
}

// ===== State =====
let currentUser = null;
let isMember = false;
let unsub = null;
let userKeys = [];
let userRank = "BRONZE";
let lastSentAt = 0;

// ===== Message list UI =====
const msgList = new MessageList({
  root: messagesEl,
  newMsgBtn,
  onReact: async ({ id, emoji }) => {
    if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
    if (!isMember) return msgList.addSystem("ACCESS_DENIED: invite required");
    if (!id || !emoji) return;
    try {
      await toggleRoomMessageReaction({
        spaceId: CONFIG.SPACE_ID,
        roomId: CONFIG.ROOM_ID,
        messageId: id,
        uid: currentUser.uid,
        emoji,
      });
      playTone(660, 0.04);
    } catch (e) {
      console.error(e);
      dbgErr(e, "REACTION_FAILED");
      msgList.addSystem(
        `REACTION_FAILED: ${e?.code || e?.message || "unknown"}`
      );
    }
  },
  onDelete: async ({ id }) => {
    if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
    if (!id) return;
    const ok = confirm("Supprimer ce message ? (irréversible)");
    if (!ok) return;
    try {
      await deleteRoomMessage({
        spaceId: CONFIG.SPACE_ID,
        roomId: CONFIG.ROOM_ID,
        messageId: id,
      });
    } catch (e) {
      console.error(e);
      dbgErr(e, "DELETE_FAILED");
      msgList.addSystem(
        `DELETE_FAILED: ${e?.code || e?.message || "unknown"}`
      );
    }
  },
});

// ===================================================================
// ✅ FIX SCROLL GLOBAL : arriver en bas + rester en bas (même mobile)
// ===================================================================

let userScrolledUp = false;
let bootStickUntil = 0;

function getScroller() {
  // Si la liste est scrollable => elle
  if (messagesEl && messagesEl.scrollHeight > messagesEl.clientHeight + 8) {
    return messagesEl;
  }
  // Sinon => scroll page (cas où le body scroll)
  return document.scrollingElement || document.documentElement;
}

function isNearBottomPx(px = 160) {
  const s = getScroller();
  const dist = s.scrollHeight - (s.scrollTop + s.clientHeight);
  return dist < px;
}

function forceStick(ms = 1400) {
  bootStickUntil = Date.now() + ms;
  userScrolledUp = false;
}

function shouldStickNow() {
  if (Date.now() < bootStickUntil) return true; // boot window Firestore
  return !userScrolledUp; // tant que l'user n'a pas scroll up
}

function scrollToBottomNow() {
  const s = getScroller();
  s.scrollTop = s.scrollHeight;
}

function scrollBottomNextFrame() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToBottomNow();
    });
  });
}

function handleAnyScroll() {
  // si l'user est loin du bas => il "a scroll up"
  userScrolledUp = !isNearBottomPx(180);
}

messagesEl?.addEventListener("scroll", handleAnyScroll, { passive: true });
window.addEventListener("scroll", handleAnyScroll, { passive: true });

// ===== Preferences (theme / sound) =====
const PREF_THEME = "le_theme";
const PREF_SOUND = "xpchat_sound";

function getPref(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : v;
  } catch {
    return fallback;
  }
}

function setPref(key, val) {
  try {
    localStorage.setItem(key, String(val));
  } catch {}
}

function applyTheme(theme) {
  const t = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  const willGoTo = t === "light" ? "dark" : "light";
  if (themeToggle) themeToggle.textContent = willGoTo === "light" ? "☀️" : "🌙";
  setPref(PREF_THEME, t);
}

let soundEnabled = getPref(PREF_SOUND, "1") === "1";

function applySoundUI() {
  if (soundToggle) soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
  setPref(PREF_SOUND, soundEnabled ? "1" : "0");
}

function playTone(freq = 520, dur = 0.06) {
  if (!soundEnabled) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.value = 0.02;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close().catch(() => {});
    }, Math.max(20, dur * 1000));
  } catch {}
}

// Init preferences
applyTheme(getPref(PREF_THEME, document.documentElement.dataset.theme || "dark"));
applySoundUI();

themeToggle?.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme === "light";
  applyTheme(isLight ? "dark" : "light");
  playTone(isLight ? 480 : 640, 0.05);
});

soundToggle?.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  applySoundUI();
  if (soundEnabled) playTone(720, 0.05);
});

// ===== Profile / Keys =====
async function refreshProfile() {
  if (!currentUser) return;
  const p = await getProfile(currentUser.uid);
  userKeys = p.keys || [];
  userRank = p.rank || "BRONZE";

  if (profileName) profileName.textContent = currentUser.name;
  if (profileRank) profileRank.textContent = userRank;
  if (profileKeys)
    profileKeys.textContent = userKeys.length
      ? userKeys.join(" • ")
      : "Aucune clé";
}

async function grantKeyToMe(tier = "BRONZE") {
  const code = await grantKey(currentUser.uid, tier);
  await refreshProfile();
  msgList.addSystem(`[KEYMASTER] Nouvelle clé ajoutée : ${code}`);
}

async function consumeKey(codeRaw) {
  const code = String(codeRaw || "").trim().toUpperCase();
  if (!code) return msgList.addSystem("USAGE: /use ");
  if (!userKeys.includes(code)) return msgList.addSystem("[KEYMASTER] Clé introuvable.");
  await removeKey(currentUser.uid, code);
  await refreshProfile();
  msgList.addSystem(`[KEYMASTER] Clé utilisée : ${code} ✅`);
}

// ===================================================================
// ✅ LISTENER MESSAGES (FIX : auto-scroll + pas bloqué en haut)
// ===================================================================
function startListener() {
  if (unsub) {
    unsub();
    unsub = null;
  }

  msgList.clear();
  msgList.addSystem("CONNECTED");

  // 🔥 pendant le batch initial Firestore, on force l'auto-scroll
  forceStick(2200);

  unsub = subscribeRoomMessages(CONFIG.SPACE_ID, CONFIG.ROOM_ID, (ev) => {
    const type = ev?.type || "added";

    if (type === "removed") {
      msgList.removeMessage(ev.id);
      return;
    }

    const payload = {
      id: ev.id,
      uid: ev.uid,
      displayName: ev.displayName || "USER",
      text: ev.text || "",
      photoURL: ev.photoURL || null,
      imageURL: ev.imageURL || null,
      reactions: ev.reactions || {},
      meUid: currentUser?.uid || null,
    };

    const newIndex = typeof ev?.newIndex === "number" ? ev.newIndex : null;

    const isAI =
      ev?.uid === "AI_BOT" ||
      String(ev?.displayName || "").toUpperCase() === "IA";

    if (isAI) msgList.hideTyping();

    // ✅ Stick si boot window OU si l'utilisateur n'a pas scroll up
    const stick = shouldStickNow();

    if (type === "modified") {
      msgList.upsertMessage(payload, newIndex);
      if (stick) scrollBottomNextFrame();
      return;
    }

    msgList.upsertMessage(payload, newIndex);

    // ✅ Si c’est ton message → on force le stick + scroll bas (sinon tu restes en haut)
    if (type === "added" && currentUser?.uid && ev?.uid === currentUser.uid) {
      forceStick(1200);
    }

    // SFX: receive message (not mine)
    if (
      type === "added" &&
      ev?.uid &&
      currentUser?.uid &&
      ev.uid !== currentUser.uid
    ) {
      playTone(isAI ? 680 : 560, 0.045);
    }

    if (stick) scrollBottomNextFrame();
  });

  // sécurité : tout de suite en bas
  scrollBottomNextFrame();
}

// ===== Join via invite =====
async function joinFlow() {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  const code = inviteCode?.value || "";
  try {
    const r = await joinWithInvite(CONFIG.SPACE_ID, code, currentUser);
    isMember = true;
    msgList.addSystem(r.already ? "ALREADY_MEMBER" : "INVITE_OK");
    if (!r.already) {
      try {
        await grantKeyToMe("BRONZE");
      } catch {}
    }
    setTerminal("authenticated");
    startListener();
  } catch (e) {
    dbgErr(e, "INVITE_FAILED");
    msgList.addSystem(`INVITE_FAILED: ${e?.message || "unknown"}`);
  }
}

// ===== Send text / commands / IA =====
async function sendMessage() {
  const raw = (msgInput?.value || "").trim();
  if (!raw) return;
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");

  const now = Date.now();
  if (now - lastSentAt < CONFIG.SEND_COOLDOWN_MS)
    return msgList.addSystem("SLOWMODE 2.5s");
  lastSentAt = now;

  const lower = raw.toLowerCase();

  // Slash commands
  if (lower === "/help") {
    msgInput.value = "";
    updateCharCount();
    msgList.addSystem("COMMANDS: /help • /keys • /use • @ia ");
    return;
  }

  if (lower === "/keys") {
    msgInput.value = "";
    updateCharCount();
    await refreshProfile();
    msgList.addSystem(
      `[KEYMASTER] Inventaire: ${
        userKeys.length ? userKeys.join(", ") : "vide"
      }`
    );
    return;
  }

  if (lower.startsWith("/use ")) {
    msgInput.value = "";
    updateCharCount();
    await consumeKey(raw.slice(5));
    return;
  }

  // IA
  if (lower.startsWith("@ia ") || lower.startsWith("@ai ")) {
    if (!isMember) return msgList.addSystem("ACCESS_DENIED: invite required");
    const prompt = raw.slice(4).trim();
    if (!prompt) return msgList.addSystem("AI_USAGE: @ia ton message");

    try {
      await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
        uid: currentUser.uid,
        displayName: currentUser.name,
        photoURL: currentUser.photoURL || null,
        text: `@IA: ${prompt}`.slice(0, CONFIG.MAX_MESSAGE_LEN),
      });

      // ✅ FIX : on force le chat à rester en bas après envoi
      forceStick(1400);
      scrollBottomNextFrame();

      hud.onSentMessage();
      playTone(740, 0.05);
    } catch (e) {
      console.error(e);
      dbgErr(e, "SEND_AI_FAILED");
      msgList.addSystem(`SEND_FAILED: ${e?.code || e?.message || "unknown"}`);
      return;
    }

    msgInput.value = "";
    updateCharCount();
    hud.onUsedAI();
    msgList.showTyping("IA");

    try {
      await callAI({
        spaceId: CONFIG.SPACE_ID,
        roomId: CONFIG.ROOM_ID,
        user: currentUser,
        prompt,
      });
      msgList.hideTyping();
      msgList.addSystem("AI_OK");
    } catch (e) {
      console.error(e);
      dbgErr(e, "AI_CALL_FAILED");
      msgList.hideTyping();
      msgList.addSystem(`AI_FAILED: ${e?.message || "unknown"}`);
    }

    return;
  }

  // Message normal
  if (!isMember) return msgList.addSystem("ACCESS_DENIED: invite required");

  try {
    await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text: raw.slice(0, CONFIG.MAX_MESSAGE_LEN),
    });

    // ✅ FIX : on force le chat à rester en bas après envoi
    forceStick(1400);
    scrollBottomNextFrame();

    msgInput.value = "";
    updateCharCount();
    hud.onSentMessage();
    hud.addXP(1);
    playTone(740, 0.05);
  } catch (e) {
    console.error(e);
    dbgErr(e, "SEND_TEXT_FAILED");
    msgList.addSystem(`SEND_FAILED: ${e?.code || e?.message || "unknown"}`);
  }
}

// ===== Init UI =====
if (spaceName) spaceName.textContent = CONFIG.SPACE_LABEL;
if (roomName) roomName.textContent = CONFIG.ROOM_LABEL;

setInterval(() => {
  if (clockEl) clockEl.textContent = nowStamp();
}, 250);

updateConnectivityUI();
hud.render();
updateCharCount();

window.addEventListener("online", updateConnectivityUI);
window.addEventListener("offline", updateConnectivityUI);

// Auth buttons
btnLogin?.addEventListener("click", async () => {
  try {
    await loginGoogle();
  } catch (e) {
    console.error(e);
    dbgErr(e, "AUTH_FAILED");
    msgList.addSystem("AUTH_FAILED: " + (e?.code || e?.message || "unknown"));
  }
});

btnLogout?.addEventListener("click", async () => {
  try {
    await logout();
  } catch {
    msgList.addSystem("LOGOUT_FAILED");
  }
});

// Send text
sendBtn?.addEventListener("click", sendMessage);
msgInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
msgInput?.addEventListener("input", updateCharCount);

// IA helper
iaBtn?.addEventListener("click", () => {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  const t = msgInput.value || "";
  if (!t.toLowerCase().startsWith("@ia")) {
    msgInput.value = "@ia " + t;
    updateCharCount();
  }
  msgInput.focus();
});

// ===== Upload image =====
imgBtn?.addEventListener("click", () => {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  imgInput?.click();
});

imgInput?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (!currentUser) {
    msgList.addSystem("AUTH_REQUIRED.");
    imgInput.value = "";
    return;
  }

  if (!isMember) {
    msgList.addSystem("ACCESS_DENIED: invite required");
    imgInput.value = "";
    return;
  }

  msgList.addSystem("UPLOAD_IMAGE...");

  try {
    const url = await uploadChatImage({
      spaceId: CONFIG.SPACE_ID,
      roomId: CONFIG.ROOM_ID,
      uid: currentUser.uid,
      file,
    });

    await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text: "",
      imageURL: url,
    });

    // ✅ FIX : on force le chat à rester en bas après envoi image
    forceStick(1600);
    scrollBottomNextFrame();

    hud.onSentMessage();
    hud.addXP(1);
    playTone(780, 0.05);
    msgList.addSystem("IMAGE_OK");
  } catch (err) {
    console.error(err);
    dbgErr(err, "UPLOAD_IMAGE_FAILED");
    msgList.addSystem(`IMAGE_FAILED: ${err?.code || err?.message || "unknown"}`);
  } finally {
    imgInput.value = "";
  }
});

// Misc
newMsgBtn?.addEventListener("click", () => {
  forceStick(1400);
  scrollBottomNextFrame();
});

joinBtn?.addEventListener("click", joinFlow);

// Profile modal
userTag?.addEventListener("click", async () => {
  if (!currentUser) return;
  await refreshProfile();
  openProfile();
});

closeProfile?.addEventListener("click", closeProfileModal);
profileModal?.addEventListener("click", (e) => {
  if (e.target === profileModal) closeProfileModal();
});

// HUD claim
document.getElementById("hudMissionClaim")?.addEventListener("click", () => {
  if (hud.claimMission()) msgList.addSystem("MISSION_OK: +XP ✅");
  else msgList.addSystem("MISSION_LOCKED");
});

// ===== Auth watcher =====
setTerminal("type: login");
msgList.addSystem("BOOT_OK");
msgList.addSystem("TIP: @ia • /help");

watchAuth(async (user) => {
  if (user) {
    currentUser = {
      uid: user.uid,
      name: (user.displayName || "USER").toUpperCase(),
      photoURL: user.photoURL || null,
    };

    userTag.textContent = currentUser.name;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";

    msgList.addSystem("AUTH_OK: " + currentUser.name);
    msgList.addSystem("CHECKING_ACCESS...");

    try {
      await ensureUserDoc(currentUser);
      await refreshProfile();
    } catch (e) {
      console.error("Profile init failed:", e);
      dbgErr(e, "PROFILE_INIT_FAILED");
      msgList.addSystem(
        `PROFILE_INIT_FAILED: ${e?.message || "unknown"} (tu peux quand même tenter l'invite)`
      );
    }

    hud.dailyCheckin();
    hud.render();

    try {
      isMember = await checkMembership(CONFIG.SPACE_ID, currentUser.uid);
      if (!isMember) {
        // Auto-unlock if a valid invite was used previously on this device.
        const lastInvite = (() => {
          try {
            return localStorage.getItem("le_last_invite");
          } catch {
            return null;
          }
        })();

        if (lastInvite) {
          try {
            msgList.addSystem("AUTO_INVITE: trying saved code...");
            await joinWithInvite(CONFIG.SPACE_ID, lastInvite, currentUser);
            isMember = await checkMembership(CONFIG.SPACE_ID, currentUser.uid);
          } catch (e) {
            // Ignore: user can still enter an invite manually.
            dbgErr(e, "AUTO_INVITE_FAILED");
          }
        }

        if (isMember) {
          msgList.addSystem("ACCESS_OK");
          setTerminal("authenticated");
          startListener();
          return;
        }

        msgList.clear();
        msgList.addSystem("ACCESS_DENIED: invite required");
        setTerminal("join required");
        return;
      }

      msgList.addSystem("ACCESS_OK");
      setTerminal("authenticated");
      startListener();
    } catch (e) {
      console.error(e);
      dbgErr(e, "MEMBERSHIP_CHECK_FAILED");
      isMember = false;
      msgList.clear();
      msgList.addSystem("ACCESS_DENIED");
      setTerminal("join required");
    }
  } else {
    currentUser = null;
    isMember = false;
    userKeys = [];
    userRank = "BRONZE";

    userTag.textContent = "OFFLINE";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";

    if (unsub) {
      unsub();
      unsub = null;
    }

    msgList.clear();
    msgList.addSystem("DISCONNECTED");
    setTerminal("offline");
  }
});
