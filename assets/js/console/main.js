// js/console/main.js — console XPCHAT + upload image
import { CONFIG } from "../core/config.js";
import { initMobileMenu } from "../core/mobileMenu.js";
import { nowStamp } from "../core/utils.js";
import { loginGoogle, logout, watchAuth } from "../services/authService.js";
import { unlockAccess } from "../services/accessService.js";
import {
  ensureUserDoc,
  getProfile,
  grantKey,
  removeKey,
} from "../services/userService.js";
import {
  checkMembership,
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

// Menu mobile global (header)
initMobileMenu();

// Preferences toggles
const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

const inviteCode = document.getElementById("inviteCode");
const joinBtn = document.getElementById("joinBtn");
let joinInFlight = false;

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

// ===== Viewport helper (iOS/Android keyboard) =====
function updateAppVh() {
  try {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty("--app-vh", h + "px");
  } catch {}
}
updateAppVh();
window.visualViewport?.addEventListener?.("resize", updateAppVh);
window.addEventListener("resize", updateAppVh);

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

  // Retour online : relancer listener si besoin
  if (online && currentUser && isMember && !unsub) {
    try {
      startListener();
    } catch {}
  }
}

function updateCharCount() {
  const max = CONFIG.MAX_MESSAGE_LEN || 800;
  const v = String(msgInput?.value || "");
  if (v.length > max && msgInput) {
    msgInput.value = v.slice(0, max);
  }
  const len = (msgInput?.value || "").length;
  if (charCount) {
    charCount.textContent = `${len}/${max}`;
    charCount.setAttribute(
      "aria-label",
      `Compteur de caractères: ${len} sur ${max}`
    );
  }
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

// ===== State =====
// Sync logout across tabs
const __authBC =
  "BroadcastChannel" in window ? new BroadcastChannel("le-auth") : null;
function broadcastLogout() {
  try {
    __authBC?.postMessage({ type: "logout" });
  } catch {}
  try {
    localStorage.setItem("le_logout_ts", String(Date.now()));
  } catch {}
}
__authBC?.addEventListener?.("message", (ev) => {
  if (ev?.data?.type === "logout") {
    try {
      logout();
    } catch {}
  }
});
window.addEventListener("storage", (e) => {
  if (e.key === "le_logout_ts") {
    try {
      logout();
    } catch {}
  }
});

let currentUser = null;
let isMember = false;
let unsub = null;
let userKeys = [];
let userRank = "BRONZE";
let lastSentAt = 0;
let sendInFlight = false;

// ===== Message list UI =====
const msgList = new MessageList({
  root: messagesEl,
  newMsgBtn,
  onReact: async ({ id, emoji }) => {
    if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
    if (!isMember) return msgList.addSystem("ACCESS_DENIED: code required");
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
  if (themeToggle)
    themeToggle.textContent = willGoTo === "light" ? "☀️" : "🌙";
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
    profileKeys.textContent = userKeys.length ? userKeys.join(" • ") : "Aucune clé";
}

async function grantKeyToMe(tier = "BRONZE") {
  const code = await grantKey(currentUser.uid, tier);
  await refreshProfile();
  msgList.addSystem(`[KEYMASTER] Nouvelle clé ajoutée : ${code}`);
}

async function consumeKey(codeRaw) {
  const code = String(codeRaw || "").trim().toUpperCase();
  if (!code) return msgList.addSystem("USAGE: /use ");
  if (!userKeys.includes(code))
    return msgList.addSystem("[KEYMASTER] Clé introuvable.");
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

    // ✅ Si c’est ton message → on force le stick + scroll bas
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
  if (joinInFlight) return;
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  const uidStart = currentUser.uid;

  const code = String(inviteCode?.value || "").trim();
  if (!code) return msgList.addSystem("CODE_REQUIRED");

  joinInFlight = true;
  joinBtn?.setAttribute("aria-busy", "true");
  if (joinBtn) joinBtn.disabled = true;

  try {
    const r = await unlockAccess({ spaceId: CONFIG.SPACE_ID, code });

    // race: user logout pendant la requête
    if (!currentUser || currentUser.uid !== uidStart) return;

    isMember = true;

    try {
      localStorage.setItem("le_last_code", String(code).toUpperCase());
    } catch {}

    msgList.addSystem(r?.already ? "ALREADY_UNLOCKED" : "UNLOCK_OK");

    if (spaceName) spaceName.textContent = CONFIG.SPACE_LABEL;
    if (roomName) roomName.textContent = CONFIG.ROOM_LABEL;

    setTerminal("authenticated");
    startListener();
  } catch (e) {
    dbgErr(e, "UNLOCK_FAILED");
    const msg = e?.code || e?.message || "UNLOCK_FAILED";
    msgList.addSystem(`ACCESS_DENIED: ${msg}`);

    if (
      String(msg).includes("AUTH_INVALID") ||
      String(msg).includes("HTTP_401") ||
      String(msg).includes("HTTP_403")
    ) {
      try {
        await logout();
      } catch {}
    }
  } finally {
    joinInFlight = false;
    joinBtn?.removeAttribute("aria-busy");
    if (joinBtn) joinBtn.disabled = false;
  }
}

// ===== Send text / commands / IA =====
async function sendMessage() {
  if (sendInFlight) return;
  const raw = (msgInput?.value || "").trim();
  if (!raw) return;
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");

  if (navigator.onLine === false)
    return msgList.addSystem("OFFLINE: impossible d'envoyer");

  const now = Date.now();
  if (now - lastSentAt < CONFIG.SEND_COOLDOWN_MS)
    return msgList.addSystem("SLOWMODE 2.5s");

  if (!isMember) return msgList.addSystem("ACCESS_DENIED: code required");

  const uidStart = currentUser.uid;

  sendInFlight = true;
  lastSentAt = now;
  if (sendBtn) sendBtn.disabled = true;
  sendBtn?.setAttribute("aria-busy", "true");

  try {
    const lower = raw.toLowerCase();

    // Slash commands
    if (lower === "/help") {
      msgInput.value = "";
      updateCharCount();
      msgList.addSystem("HELP: @ia • /help • /clear");
      return;
    }
    if (lower === "/clear") {
      msgInput.value = "";
      updateCharCount();
      msgList.clear();
      msgList.addSystem("CLEARED");
      return;
    }

    // IA call
    if (lower.startsWith("@ia")) {
      const prompt = raw.replace(/^@ia\s*/i, "").trim();
      if (!prompt) return msgList.addSystem("IA: prompt vide");

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

    // Normal message
    await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL,
      text: raw.slice(0, CONFIG.MAX_MESSAGE_LEN || 800),
    });

    if (!currentUser || currentUser.uid !== uidStart) return;

    forceStick(1400);
    scrollBottomNextFrame();

    msgInput.value = "";
    updateCharCount();
    hud.onSentMessage();
    hud.addXP(1);
    playTone(740, 0.05);

    try {
      localStorage.removeItem("le_draft");
    } catch {}
  } catch (e) {
    console.error(e);
    dbgErr(e, "SEND_TEXT_FAILED");
    const msg = e?.code || e?.message || "unknown";
    msgList.addSystem(`SEND_FAILED: ${msg}`);

    if (
      String(msg).includes("permission") ||
      String(msg).includes("401") ||
      String(msg).includes("403")
    ) {
      try {
        await logout();
      } catch {}
    }
  } finally {
    sendInFlight = false;
    sendBtn?.removeAttribute("aria-busy");
    if (sendBtn) sendBtn.disabled = false;
  }
}

// ===== Init UI =====
if (spaceName) spaceName.textContent = "—";
if (roomName) roomName.textContent = "—";

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
    broadcastLogout();
    await logout();
  } catch {
    msgList.addSystem("LOGOUT_FAILED");
  }
});

// Send text
sendBtn?.addEventListener("click", () => sendMessage());
msgInput?.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (e.isComposing) return;
  if (e.shiftKey) return;
  e.preventDefault();
  sendMessage();
});
msgInput?.addEventListener("input", updateCharCount);

// IA helper
iaBtn?.addEventListener("click", () => {
  if (!msgInput) return;
  const prefix = "@ia ";
  const cur = String(msgInput.value || "");
  if (!cur.toLowerCase().startsWith(prefix.trim())) {
    msgInput.value = prefix + cur.replace(/^@ia\s+/i, "");
  }
  msgInput.focus();
  updateCharCount();
});

// ===== Upload image =====
imgBtn?.addEventListener("click", () => {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  imgInput?.click();
});

imgInput?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];

  // Cancel stable
  if (!file) return;

  if (!currentUser) {
    msgList.addSystem("AUTH_REQUIRED.");
    imgInput.value = "";
    return;
  }

  if (!isMember) {
    msgList.addSystem("ACCESS_DENIED: code required");
    imgInput.value = "";
    return;
  }

  if (navigator.onLine === false) {
    msgList.addSystem("OFFLINE: upload impossible");
    imgInput.value = "";
    return;
  }

  if (!String(file.type || "").startsWith("image/")) {
    msgList.addSystem("UPLOAD_REJECTED: non-image");
    imgInput.value = "";
    return;
  }

  const MAX = 8 * 1024 * 1024;
  if (file.size > MAX) {
    msgList.addSystem("UPLOAD_TOO_BIG (max 8MB)");
    imgInput.value = "";
    return;
  }

  const uidStart = currentUser.uid;

  try {
    imgBtn && (imgBtn.disabled = true);
    imgBtn?.setAttribute("aria-busy", "true");

    const url = await uploadChatImage({
      spaceId: CONFIG.SPACE_ID,
      roomId: CONFIG.ROOM_ID,
      uid: currentUser.uid,
      file,
    });

    if (!currentUser || currentUser.uid !== uidStart) return;

    await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL,
      text: "",
      imageURL: url,
    });

    forceStick(1400);
    scrollBottomNextFrame();

    hud.onSentMessage();
    hud.addXP(1);
    playTone(780, 0.05);
    msgList.addSystem("IMAGE_OK");
  } catch (err) {
    console.error(err);
    dbgErr(err, "UPLOAD_IMAGE_FAILED");
    const msg = err?.code || err?.message || "unknown";
    msgList.addSystem(`IMAGE_FAILED: ${msg}`);
  } finally {
    imgBtn?.removeAttribute("aria-busy");
    if (imgBtn) imgBtn.disabled = false;
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
        `PROFILE_INIT_FAILED: ${
          e?.message || "unknown"
        } (tu peux quand même tenter l'invite)`
      );
    }

    hud.dailyCheckin();
    hud.render();

    try {
      isMember = await checkMembership(CONFIG.SPACE_ID, currentUser.uid);
      if (!isMember) {
        // Auto-unlock if a valid invite was used previously on this device.
        const lastCode = (() => {
          try {
            return localStorage.getItem("le_last_code");
          } catch {
            return null;
          }
        })();

        if (lastCode) {
          try {
            msgList.addSystem("AUTO_CODE: trying saved code...");
            await unlockAccess({ spaceId: CONFIG.SPACE_ID, code: lastCode });
            isMember = await checkMembership(CONFIG.SPACE_ID, currentUser.uid);
          } catch (e) {
            // Ignore: user can still enter an invite manually.
            dbgErr(e, "AUTO_INVITE_FAILED");
          }
        }

        if (isMember) {
          msgList.addSystem("ACCESS_OK");
          if (spaceName) spaceName.textContent = CONFIG.SPACE_LABEL;
          if (roomName) roomName.textContent = CONFIG.ROOM_LABEL;
          setTerminal("authenticated");
          startListener();
          return;
        }

        msgList.clear();
        msgList.addSystem("ACCESS_DENIED: code required");
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
