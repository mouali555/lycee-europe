// js/app.js — Chat + Avatars + Invites + IA via Cloud Run (HTTP)
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
  collection, query, orderBy, limit, onSnapshot, addDoc,
  updateDoc, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// DOM
const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

const inviteCode = document.getElementById("inviteCode");
const joinBtn = document.getElementById("joinBtn");

const spacesList = document.getElementById("spacesList");
const roomsList = document.getElementById("roomsList");
const spaceName = document.getElementById("spaceName");
const roomName = document.getElementById("roomName");

const messagesEl = document.getElementById("messages");
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");

// UX extras (XP Midnight)
const offlineBanner = document.getElementById("offlineBanner");
const newMsgBtn = document.getElementById("newMsgBtn");
const iaBtn = document.getElementById("iaBtn");
const charCount = document.getElementById("charCount");

// HUD (mini-game léger)
const hudStatus = document.getElementById("hudStatus");
const hudLevel = document.getElementById("hudLevel");
const hudStreak = document.getElementById("hudStreak");
const hudXpFill = document.getElementById("hudXpFill");
const hudXpText = document.getElementById("hudXpText");
const hudMissionText = document.getElementById("hudMissionText");
const hudMissionClaim = document.getElementById("hudMissionClaim");
const hudMissionMeta = document.getElementById("hudMissionMeta");
const hudVaultState = document.getElementById("hudVaultState");

// Optional (console extras)
const missionBtn = document.getElementById("missionBtn");
const profileModal = document.getElementById("profileModal");
const closeProfile = document.getElementById("closeProfile");
const profileName = document.getElementById("profileName");
const profileRank = document.getElementById("profileRank");
const profileKeys = document.getElementById("profileKeys");

// Guard DOM
function must(el, name){
  if (!el) throw new Error(`MISSING_DOM_ID: #${name}`);
  return el;
}
must(btnLogin, "btn-login");
must(btnLogout, "btn-logout");
must(userTag, "userTag");
must(messagesEl, "messages");
must(msgInput, "msg");
must(sendBtn, "send");

// Utils
function pad(n){ return String(n).padStart(2, "0"); }
function nowStamp(){
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function setTerminal(text){
  if (terminalStatus) terminalStatus.textContent = text;
}
function esc(s){
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}
function clearMessages(){ messagesEl.innerHTML = ""; }
function addSystem(text){
  const div = document.createElement("div");
  div.className = "msg sys";
  div.innerHTML = `<span class="system">[SYSTEM]</span> ${esc(text)}`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Connectivity banner
function updateConnectivityUI(){
  const online = navigator.onLine !== false;
  if (offlineBanner) offlineBanner.setAttribute("aria-hidden", online ? "true" : "false");
  if (hudStatus) hudStatus.textContent = online ? "ONLINE" : "OFFLINE";
}

// Character counter
function updateCharCount(){
  if (!charCount) return;
  const n = (msgInput.value || "").length;
  charCount.textContent = `${n}/800`;
}

// State
let currentUser = null;
let unsub = null;
let isMember = false;
let userKeys = [];
let userRank = "BRONZE";

// Space/room fixed
const SPACE_ID = "europe";
const SPACE_LABEL = "EUROPE_SPACE";
const ROOM_ID = "general";
const ROOM_LABEL = "general";

// ===== Mini-game (léger, local) =====
const LS_PREFIX = "le_xp_midnight_";
const XP_PER_LEVEL = 25;

function lsGet(key, fallback){
  try{
    const v = localStorage.getItem(LS_PREFIX + key);
    return v == null ? fallback : JSON.parse(v);
  }catch{ return fallback; }
}
function lsSet(key, value){
  try{ localStorage.setItem(LS_PREFIX + key, JSON.stringify(value)); }catch{}
}

let xp = lsGet("xp", 0);
let streak = lsGet("streak", 0);
let lastCheckin = lsGet("lastCheckin", "");
let missionClaimed = lsGet("missionClaimed", "");
let msgToday = lsGet("msgToday", { date: "", count: 0 });
let aiUsed = lsGet("aiUsed", "");

function todayStr(){
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function getLevel(){
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

function addXP(amount){
  xp = Math.max(0, xp + (amount || 0));
  lsSet("xp", xp);
  renderHUD();
}

function dailyCheckin(){
  const t = todayStr();
  if (lastCheckin === t) return;

  // streak update
  const prev = lastCheckin;
  lastCheckin = t;
  lsSet("lastCheckin", lastCheckin);

  if (!prev) {
    streak = 1;
  } else {
    const prevDate = new Date(prev + "T00:00:00");
    const curDate = new Date(t + "T00:00:00");
    const diffDays = Math.round((curDate - prevDate) / (1000*60*60*24));
    streak = diffDays === 1 ? (streak + 1) : 1;
  }
  lsSet("streak", streak);

  // daily drop: small XP
  addXP(3);
}

function getMissionOfDay(){
  // simple rotating missions
  const missions = [
    { id: "m1", text: "Écris 2 messages aujourd’hui", goal: 2, rewardXp: 10 },
    { id: "m2", text: "Utilise @ia une fois", goal: 1, rewardXp: 10 },
    { id: "m3", text: "Aide quelqu’un (réponds à un message)", goal: 1, rewardXp: 10 }
  ];
  const daySeed = Math.floor(Date.now() / (1000*60*60*24));
  return missions[daySeed % missions.length];
}

function getMissionProgress(m){
  resetMsgTodayIfNeeded();
  const t = todayStr();
  if (m.id === "m1") return msgToday.count; // messages
  if (m.id === "m2") return aiUsed === t ? 1 : 0; // @ia
  if (m.id === "m3") return msgToday.count > 0 ? 1 : 0; // simple reply
  return 0;
}

function canClaimMission(){
  const m = getMissionOfDay();
  return getMissionProgress(m) >= m.goal;
}

function resetMsgTodayIfNeeded(){
  const t = todayStr();
  if (msgToday.date !== t) {
    msgToday = { date: t, count: 0 };
    lsSet("msgToday", msgToday);
  }
}

function canUnlockVault(){
  return getLevel() >= 3;
}

function renderHUD(){
  const lvl = getLevel();
  const within = xp % XP_PER_LEVEL;

  if (hudLevel) hudLevel.textContent = String(lvl);
  if (hudStreak) hudStreak.textContent = String(streak);
  if (hudXpText) hudXpText.textContent = `${within}/${XP_PER_LEVEL} XP`;
  if (hudXpFill) hudXpFill.style.width = `${Math.round((within / XP_PER_LEVEL) * 100)}%`;

  const m = getMissionOfDay();
  const prog = getMissionProgress(m);
  if (hudMissionText) hudMissionText.textContent = `${m.text}  (${prog}/${m.goal})`;
  if (hudMissionMeta) {
    const t = todayStr();
    const claimed = missionClaimed === t;
    hudMissionMeta.textContent = claimed ? "Récompense : déjà récupérée ✅" : `Récompense : +${m.rewardXp} XP`;
  }
  if (hudMissionClaim) {
    const claimed = missionClaimed === todayStr();
    hudMissionClaim.disabled = claimed || !canClaimMission();
    hudMissionClaim.textContent = claimed ? "DONE" : (canClaimMission() ? "CLAIM" : "LOCKED");
  }
  if (hudVaultState) {
    hudVaultState.textContent = canUnlockVault() ? "État : déverrouillé ✅" : "État : verrouillé";
  }
}

// Anti-spam (client)
let lastSentAt = 0;
const COOLDOWN_MS = 2500;

let lastXPAt = 0;
const XP_COOLDOWN_MS = 10000;

// UI nav
function renderStaticNav(){
  if (!spacesList || !roomsList || !spaceName || !roomName) return;
  spacesList.innerHTML = "";
  roomsList.innerHTML = "";

  const sp = document.createElement("div");
  sp.className = "item active";
  sp.textContent = SPACE_LABEL;
  spacesList.appendChild(sp);

  const rm = document.createElement("div");
  rm.className = "item active";
  rm.textContent = "# " + ROOM_LABEL;
  roomsList.appendChild(rm);

  spaceName.textContent = SPACE_LABEL;
  roomName.textContent = "# " + ROOM_LABEL;
}

// ===== Avatars for old messages (users/{uid}) =====
const avatarCache = new Map();

async function getAvatarForUid(uid){
  if (!uid) return null;
  if (avatarCache.has(uid)) return avatarCache.get(uid);

  try{
    const uref = doc(db, "users", uid);
    const usnap = await getDoc(uref);
    const photo = usnap.exists() ? (usnap.data().photoURL || null) : null;
    avatarCache.set(uid, photo);
    return photo;
  }catch{
    avatarCache.set(uid, null);
    return null;
  }
}

async function renderMessage({ uid, user, text, me=false, photoURL=null }){
  const row = document.createElement("div");
  const isAI = uid === "AI_BOT" || (user || "").toUpperCase() === "IA";
  const isKey = uid === "KEYMASTER" || (user || "").toUpperCase() === "KEYMASTER";
  row.className = "msgRow" + (me ? " meRow" : "") + (isAI ? " iaRow" : "") + (isKey ? " keyRow" : "");

  let finalPhoto = photoURL || null;
  if (!finalPhoto) finalPhoto = await getAvatarForUid(uid);

  const avatarHTML = finalPhoto
    ? `<img class="avatar" src="${finalPhoto}" referrerpolicy="no-referrer">`
    : `<div class="avatar fallback">${esc((user?.[0] || "?").toUpperCase())}</div>`;

  row.innerHTML = `
    ${avatarHTML}
    <div class="bubble">
      <div class="meta">
        <span class="name">${esc(user || "USER")}</span>
        ${isAI ? `<span class="badge">🤖 IA</span>` : (isKey ? `<span class="badge">🔑 KEY</span>` : "")}
      </div>
      <div class="text">${esc(text || "")}</div>
    </div>
  `;

  messagesEl.appendChild(row);
}

// Membership
async function checkMembership(){
  const memRef = doc(db, "spaces", SPACE_ID, "members", currentUser.uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

// ===== Keys & profile =====
function genKeyCode(tier){
  const p = String(tier || "BRONZE").toUpperCase().replace(/[^A-Z0-9]/g, "");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${p}-${rand}`;
}

async function ensureUserDoc(){
  if (!currentUser) return;
  const uref = doc(db, "users", currentUser.uid);
  const snap = await getDoc(uref);

  if (!snap.exists()){
    await setDoc(uref, {
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      rank: "BRONZE",
      keys: [],
      createdAt: serverTimestamp()
    });
  } else {
    // keep fresh identity
    await setDoc(uref, {
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      updatedAt: serverTimestamp()
    }, { merge: true });
  }
}

async function refreshProfile(){
  if (!currentUser) return;
  try{
    const uref = doc(db, "users", currentUser.uid);
    const snap = await getDoc(uref);
    const data = snap.exists() ? snap.data() : {};

    userKeys = Array.isArray(data.keys) ? data.keys : [];
    userRank = String(data.rank || "BRONZE").toUpperCase();

    if (profileName) profileName.textContent = currentUser.name;
    if (profileRank) profileRank.textContent = userRank;
    if (profileKeys) profileKeys.textContent = userKeys.length ? userKeys.join(" • ") : "Aucune clé";
  }catch(e){
    console.error(e);
  }
}

async function grantKey(tier="BRONZE"){
  if (!currentUser) return;
  const code = genKeyCode(tier);
  const uref = doc(db, "users", currentUser.uid);
  await updateDoc(uref, { keys: arrayUnion(code) });
  await refreshProfile();
  addSystem(`[KEYMASTER] Nouvelle clé ajoutée : ${code}`);
}

async function consumeKey(codeRaw){
  const code = String(codeRaw||"").trim().toUpperCase();
  if (!code) return addSystem("USAGE: /use <clé>");
  if (!userKeys.includes(code)) return addSystem("[KEYMASTER] Clé introuvable dans ton inventaire.");

  const uref = doc(db, "users", currentUser.uid);
  await updateDoc(uref, { keys: arrayRemove(code) });
  await refreshProfile();
  addSystem(`[KEYMASTER] Clé utilisée : ${code} ✅`);
}

async function dropKey(){
  if (!userKeys.length) return addSystem("[KEYMASTER] Tu n'as aucune clé à drop.");
  const code = userKeys[Math.floor(Math.random() * userKeys.length)];
  await consumeKey(code);
  // For the vibe: a key drop message inside chat
  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: "KEYMASTER",
      displayName: "KEYMASTER",
      photoURL: null,
      text: `DROP DETECTÉ 🔑  ${code}  (tape /claim ${code})`.slice(0, 800),
      createdAt: serverTimestamp()
    });
  }catch(e){
    console.error(e);
  }
}

async function claimKey(codeRaw){
  const code = String(codeRaw||"").trim().toUpperCase();
  if (!code) return addSystem("USAGE: /claim <clé>");
  // Claim is just adding it to your inventory (demo)
  const uref = doc(db, "users", currentUser.uid);
  await updateDoc(uref, { keys: arrayUnion(code) });
  await refreshProfile();
  addSystem(`[KEYMASTER] Clé récupérée : ${code} ✅`);
}

// Join invite
async function joinWithInvite(codeRaw){
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const code = (codeRaw || "").trim().toUpperCase();
  if (!code) return addSystem("INVITE_CODE_REQUIRED.");

  try{
    const invRef = doc(db, "invites", code);
    const invSnap = await getDoc(invRef);
    if (!invSnap.exists()) return addSystem("INVITE_INVALID.");

    const inv = invSnap.data();
    if (inv.enabled !== true) return addSystem("INVITE_DISABLED.");
    if (!inv.spaceId) return addSystem("INVITE_BROKEN.");

    const memRef = doc(db, "spaces", inv.spaceId, "members", currentUser.uid);
    const memSnap = await getDoc(memRef);

    if (memSnap.exists()){
      addSystem("ALREADY_MEMBER");
      isMember = true;
      setTerminal("authenticated");
      startListener();
      return;
    }

    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

    // Give a starter key on first join
    try{ await grantKey("BRONZE"); }catch{}

    addSystem("INVITE_OK");
    isMember = true;
    setTerminal("authenticated");
    startListener();
  }catch(e){
    console.error(e);
    addSystem("INVITE_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Listener
function startListener(){
  if (!currentUser) return;
  if (!isMember) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  // ✅ On prend les 80 derniers messages (rapide + fluide)
  // Puis on inverse pour afficher du plus ancien au plus récent.
  const q = query(msgRef, orderBy("createdAt", "desc"), limit(80));

  unsub = onSnapshot(q, async (snap) => {
    // keep scroll position if user is reading older messages
    const distFromBottom = (messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight);
    const wasAtBottom = distFromBottom < 80;

    clearMessages();
    const docs = [...snap.docs].reverse();
    for (const docSnap of docs) {
      const m = docSnap.data();
      await renderMessage({
        uid: m.uid,
        user: m.displayName || "USER",
        text: m.text || "",
        me: m.uid === currentUser.uid,
        photoURL: m.photoURL || null
      });
    }
    if (wasAtBottom) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
      if (newMsgBtn) newMsgBtn.style.display = "none";
    } else {
      // restore distance from bottom to avoid jump
      messagesEl.scrollTop = Math.max(0, messagesEl.scrollHeight - messagesEl.clientHeight - distFromBottom);
      if (newMsgBtn) newMsgBtn.style.display = "inline-block";
    }
  }, (err) => {
    console.error(err);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

// ===== IA CALL (Firebase Functions v2 / HTTP) =====
// ✅ URL standard Functions v2: https://<region>-<project>.cloudfunctions.net/<name>
// Projet: lycee-europe-private (voir .firebaserc)
const AI_ENDPOINT = "https://us-central1-lycee-europe-private.cloudfunctions.net/aiReply";

async function callAI(prompt){
  if (!AI_ENDPOINT || AI_ENDPOINT.includes("PASTE_")) {
    addSystem("AI_DISABLED: set AI_ENDPOINT in app.js");
    return;
  }
  if (!currentUser) return addSystem("AUTH_REQUIRED.");
  if (!isMember) return addSystem("ACCESS_DENIED: invite required");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000); // 20s

  try{
    const res = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        spaceId: SPACE_ID,
        roomId: ROOM_ID,
        uid: currentUser.uid,
        displayName: currentUser.name,
        photoURL: currentUser.photoURL || null,
        prompt
      })
    });

    if (!res.ok) {
      const t = await res.text().catch(()=> "");
      throw new Error(`HTTP_${res.status} ${t}`.slice(0, 220));
    }

    addSystem("AI_OK");
  }catch(e){
    console.error(e);
    addSystem("AI_FAILED: " + (e?.name === "AbortError" ? "timeout" : (e?.message || "unknown")));
  }finally{
    clearTimeout(timeout);
  }
}

// Send
async function sendMessage(){
  const text = (msgInput.value || "").trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  resetMsgTodayIfNeeded();

  const now = Date.now();
  if (now - lastSentAt < COOLDOWN_MS) return addSystem("SLOWMODE 2.5s");
  lastSentAt = now;

  // ✅ Commande IA: "@ia ..." ou "@ai ..."
  const lower = text.toLowerCase();

  // ===== Slash commands =====
  if (lower === "/help"){
    msgInput.value = "";
    addSystem("COMMANDS: /help • /keys • /use <key> • /drop • /claim <key> • @ia <prompt>");
    return;
  }
  if (lower === "/keys"){
    msgInput.value = "";
    await refreshProfile();
    addSystem(`[KEYMASTER] Inventaire: ${userKeys.length ? userKeys.join(", ") : "vide"}`);
    return;
  }
  if (lower.startsWith("/use ")){
    msgInput.value = "";
    await consumeKey(text.slice(5));
    return;
  }
  if (lower === "/drop"){
    msgInput.value = "";
    if (!isMember) return addSystem("ACCESS_DENIED: invite required");
    await dropKey();
    return;
  }
  if (lower.startsWith("/claim ")){
    msgInput.value = "";
    if (!isMember) return addSystem("ACCESS_DENIED: invite required");
    await claimKey(text.slice(7));
    return;
  }
  if (lower.startsWith("@ia ") || lower.startsWith("@ai ")) {
    const prompt = text.slice(4).trim();
    if (!prompt) return addSystem("AI_USAGE: @ia ton message");
    if (!isMember) return addSystem("ACCESS_DENIED: invite required");

    // 1) enregistrer la question dans Firestore pour qu'elle reste visible
    try{
      const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
      await addDoc(msgRef, {
        uid: currentUser.uid,
        displayName: currentUser.name,
        photoURL: currentUser.photoURL || null,
        text: `@IA: ${prompt}`.slice(0, 800),
        createdAt: serverTimestamp()
      });

      // mini-game: @ia question counts as a message
      msgToday.count += 1;
      lsSet("msgToday", msgToday);
    }catch(e){
      console.error(e);
      addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
      return;
    }

    // 2) appeler l'IA (elle répondra ensuite via ton backend)
    msgInput.value = "";
    // mission progress
    aiUsed = todayStr();
    lsSet("aiUsed", aiUsed);
    renderHUD();
    addSystem("AI_THINKING...");
    await callAI(prompt);
    return;
  }

  if (!isMember) return addSystem("ACCESS_DENIED: invite required");

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text: text.slice(0, 800),
      createdAt: serverTimestamp()
    });
    msgInput.value = "";

    // mini-game progress
    msgToday.count += 1;
    lsSet("msgToday", msgToday);
    const nowXP = Date.now();
    if (nowXP - lastXPAt > XP_COOLDOWN_MS) {
      lastXPAt = nowXP;
      addXP(1);
    }
    renderHUD();
  }catch(e){
    console.error(e);
    addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Events
btnLogin.addEventListener("click", async () => {
  try { await loginGoogle(); }
  catch(e){ console.error(e); addSystem("AUTH_FAILED: " + (e?.code || e?.message || "unknown")); }
});

btnLogout.addEventListener("click", async () => {
  try { await logout(); }
  catch(e){ console.error(e); addSystem("LOGOUT_FAILED"); }
});

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendBtn.click(); });
msgInput.addEventListener("input", updateCharCount);

iaBtn?.addEventListener("click", () => {
  // prepend @ia quickly
  if (!currentUser) return addSystem("AUTH_REQUIRED.");
  const t = msgInput.value || "";
  if (!t.toLowerCase().startsWith("@ia")) {
    msgInput.value = "@ia " + t;
    updateCharCount();
  }
  msgInput.focus();
});

newMsgBtn?.addEventListener("click", () => {
  messagesEl.scrollTop = messagesEl.scrollHeight;
  newMsgBtn.style.display = "none";
});
joinBtn?.addEventListener("click", () => joinWithInvite(inviteCode?.value || ""));

// Clock
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// Boot
renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("TIP: @ia <message> • /help");

// initial UI state
updateConnectivityUI();
renderHUD();
updateCharCount();

window.addEventListener("online", updateConnectivityUI);
window.addEventListener("offline", updateConnectivityUI);

// Auth watch
watchAuth(async (user) => {
  if (user) {
    currentUser = {
      uid: user.uid,
      name: (user.displayName || "USER").toUpperCase(),
      photoURL: user.photoURL || null
    };

    userTag.textContent = currentUser.name;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";

    addSystem("AUTH_OK: " + currentUser.name);
    addSystem("CHECKING_ACCESS...");

    await ensureUserDoc();
    await refreshProfile();

    // mini-game daily drop
    dailyCheckin();
    renderHUD();

    try{
      const ok = await checkMembership();
      isMember = !!ok;

      if (!ok) {
        clearMessages();
        addSystem("ACCESS_DENIED: invite required");
        setTerminal("join required");
        return;
      }

      addSystem("ACCESS_OK");
      setTerminal("authenticated");
      startListener();
    }catch(e){
      console.error(e);
      isMember = false;
      clearMessages();
      addSystem("ACCESS_DENIED");
      setTerminal("join required");
    }
  } else {
    currentUser = null;
    isMember = false;

    userTag.textContent = "OFFLINE";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";
    if (unsub) { unsub(); unsub = null; }

    clearMessages();
    addSystem("DISCONNECTED");
    setTerminal("offline");
  }
});

// ===== Console extras: profile + mission =====
function openProfile(){
  if (!profileModal) return;
  profileModal.setAttribute("aria-hidden", "false");
}
function closeProfileModal(){
  if (!profileModal) return;
  profileModal.setAttribute("aria-hidden", "true");
}

userTag?.addEventListener("click", async () => {
  if (!currentUser) return;
  await refreshProfile();
  openProfile();
});
closeProfile?.addEventListener("click", closeProfileModal);
profileModal?.addEventListener("click", (e) => { if (e.target === profileModal) closeProfileModal(); });

missionBtn?.addEventListener("click", async () => {
  if (!currentUser) return addSystem("AUTH_REQUIRED.");
  if (!isMember) return addSystem("ACCESS_DENIED: invite required");
  try{
    await grantKey("ARGENT");
    addSystem("MISSION_OK: +1 clé ARGENT");
  }catch(e){
    console.error(e);
    addSystem("MISSION_FAILED");
  }
});

// HUD mission claim (mini-game)
hudMissionClaim?.addEventListener("click", () => {
  const t = todayStr();
  if (missionClaimed === t) return;
  if (!canClaimMission()) return addSystem("MISSION_LOCKED: complète la mission du jour");

  const m = getMissionOfDay();
  missionClaimed = t;
  lsSet("missionClaimed", missionClaimed);
  addXP(m.rewardXp);
  addSystem(`MISSION_OK: +${m.rewardXp} XP ✅`);
});

// Crash reporting into UI
window.addEventListener("error", (ev) => {
  try { addSystem("JS_CRASH: " + (ev?.message || "unknown")); } catch {}
});
window.addEventListener("unhandledrejection", (ev) => {
  try { addSystem("JS_PROMISE_CRASH"); } catch {}
  console.error(ev.reason);
});