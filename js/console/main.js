// js/console/main.js — v2 (refacto propre)

import { CONFIG } from "../core/config.js";
import { nowStamp } from "../core/utils.js";
import { loginGoogle, logout, watchAuth } from "../services/authService.js";
import { ensureUserDoc, getProfile, grantKey, removeKey } from "../services/userService.js";
import { checkMembership, joinWithInvite, subscribeRoomMessages, sendRoomMessage } from "../services/chatService.js";
import { callAI } from "../services/aiService.js";
import { MessageList } from "../ui/messageList.js";
import { HUD } from "../ui/hud.js";

// ===== DOM =====
const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");

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

const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");
const iaBtn = document.getElementById("iaBtn");
const charCount = document.getElementById("charCount");

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

function updateConnectivityUI() {
  const online = navigator.onLine !== false;
  if (offlineBanner) offlineBanner.setAttribute("aria-hidden", online ? "true" : "false");
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

// ===== State =====
const msgList = new MessageList({ root: messagesEl, newMsgBtn });

let currentUser = null;
let isMember = false;
let unsub = null;
let userKeys = [];
let userRank = "BRONZE";

let lastSentAt = 0;

async function refreshProfile() {
  if (!currentUser) return;
  const p = await getProfile(currentUser.uid);
  userKeys = p.keys || [];
  userRank = p.rank || "BRONZE";
  if (profileName) profileName.textContent = currentUser.name;
  if (profileRank) profileRank.textContent = userRank;
  if (profileKeys) profileKeys.textContent = userKeys.length ? userKeys.join(" • ") : "Aucune clé";
}

async function grantKeyToMe(tier = "BRONZE") {
  const code = await grantKey(currentUser.uid, tier);
  await refreshProfile();
  msgList.addSystem(`[KEYMASTER] Nouvelle clé ajoutée : ${code}`);
}

async function consumeKey(codeRaw) {
  const code = String(codeRaw || "").trim().toUpperCase();
  if (!code) return msgList.addSystem("USAGE: /use <clé>");
  if (!userKeys.includes(code)) return msgList.addSystem("[KEYMASTER] Clé introuvable.");
  await removeKey(currentUser.uid, code);
  await refreshProfile();
  msgList.addSystem(`[KEYMASTER] Clé utilisée : ${code} ✅`);
}

function startListener() {
  if (unsub) {
    unsub();
    unsub = null;
  }
  msgList.clear();
  msgList.addSystem("CONNECTED");

  unsub = subscribeRoomMessages(CONFIG.SPACE_ID, CONFIG.ROOM_ID, (m) => {
    msgList.appendMessage({
      id: m.id,
      uid: m.uid,
      displayName: m.displayName || "USER",
      text: m.text || "",
      photoURL: m.photoURL || null,
      meUid: currentUser?.uid,
    });
  });
}

async function joinFlow() {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  const code = inviteCode?.value || "";
  try {
    const r = await joinWithInvite(CONFIG.SPACE_ID, code, currentUser);
    isMember = true;
    msgList.addSystem(r.already ? "ALREADY_MEMBER" : "INVITE_OK");
    // Starter key si nouveau
    if (!r.already) {
      try {
        await grantKeyToMe("BRONZE");
      } catch {}
    }
    setTerminal("authenticated");
    startListener();
  } catch (e) {
    msgList.addSystem(`INVITE_FAILED: ${e?.message || "unknown"}`);
  }
}

async function sendMessage() {
  const raw = (msgInput?.value || "").trim();
  if (!raw) return;
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");

  const now = Date.now();
  if (now - lastSentAt < CONFIG.SEND_COOLDOWN_MS) return msgList.addSystem("SLOWMODE 2.5s");
  lastSentAt = now;

  const lower = raw.toLowerCase();

  // Slash commands
  if (lower === "/help") {
    msgInput.value = "";
    updateCharCount();
    msgList.addSystem(
      "COMMANDS: /help • /keys • /use <key> • /drop • /claim <key> • @ia <prompt>"
    );
    return;
  }

  if (lower === "/keys") {
    msgInput.value = "";
    updateCharCount();
    await refreshProfile();
    msgList.addSystem(`[KEYMASTER] Inventaire: ${userKeys.length ? userKeys.join(", ") : "vide"}`);
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

    // 1) log question en message Firestore
    try {
      await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
        uid: currentUser.uid,
        displayName: currentUser.name,
        photoURL: currentUser.photoURL || null,
        text: `@IA: ${prompt}`.slice(0, CONFIG.MAX_MESSAGE_LEN),
      });
      hud.onSentMessage();
    } catch (e) {
      console.error(e);
      msgList.addSystem(`SEND_FAILED: ${e?.code || e?.message || "unknown"}`);
      return;
    }

    msgInput.value = "";
    updateCharCount();
    hud.onUsedAI();
    msgList.addSystem("AI_THINKING...");

    try {
      await callAI({
        spaceId: CONFIG.SPACE_ID,
        roomId: CONFIG.ROOM_ID,
        user: currentUser,
        prompt,
      });
      msgList.addSystem("AI_OK");
    } catch (e) {
      console.error(e);
      msgList.addSystem(`AI_FAILED: ${e?.message || "unknown"}`);
    }
    return;
  }

  if (!isMember) return msgList.addSystem("ACCESS_DENIED: invite required");

  try {
    await sendRoomMessage(CONFIG.SPACE_ID, CONFIG.ROOM_ID, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text: raw.slice(0, CONFIG.MAX_MESSAGE_LEN),
    });
    msgInput.value = "";
    updateCharCount();
    hud.onSentMessage();
    // petit XP
    hud.addXP(1);
  } catch (e) {
    console.error(e);
    msgList.addSystem(`SEND_FAILED: ${e?.code || e?.message || "unknown"}`);
  }
}

// ===== Init UI =====
if (spaceName) spaceName.textContent = CONFIG.SPACE_LABEL;
if (roomName) roomName.textContent = "# " + CONFIG.ROOM_LABEL;

setInterval(() => {
  if (clockEl) clockEl.textContent = nowStamp();
}, 250);

updateConnectivityUI();
hud.render();
updateCharCount();

window.addEventListener("online", updateConnectivityUI);
window.addEventListener("offline", updateConnectivityUI);

// Buttons
btnLogin?.addEventListener("click", async () => {
  try {
    await loginGoogle();
  } catch (e) {
    console.error(e);
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

sendBtn?.addEventListener("click", sendMessage);
msgInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
msgInput?.addEventListener("input", updateCharCount);

iaBtn?.addEventListener("click", () => {
  if (!currentUser) return msgList.addSystem("AUTH_REQUIRED.");
  const t = msgInput.value || "";
  if (!t.toLowerCase().startsWith("@ia")) {
    msgInput.value = "@ia " + t;
    updateCharCount();
  }
  msgInput.focus();
});

newMsgBtn?.addEventListener("click", () => msgList.scrollToBottom());
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
msgList.addSystem("TIP: @ia <message> • /help");

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

    await ensureUserDoc(currentUser);
    await refreshProfile();

    hud.dailyCheckin();
    hud.render();

    try {
      isMember = await checkMembership(CONFIG.SPACE_ID, currentUser.uid);
      if (!isMember) {
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
