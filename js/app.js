// js/app.js — SAFE BOOT + Avatars for ALL (messages.photoURL OR users/{uid}.photoURL)
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
  collection, query, orderBy, limit, onSnapshot, addDoc
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

// State
let currentUser = null;
let unsub = null;

// Space/room fixed
const SPACE_ID = "europe";
const SPACE_LABEL = "EUROPE_SPACE";
const ROOM_ID = "general";
const ROOM_LABEL = "general";

// Anti-spam (client)
let lastSentAt = 0;
const COOLDOWN_MS = 2500;

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

// ===== AVATAR FIX FOR ALL USERS =====
// cache avatars: uid -> photoURL|null
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
  }catch(e){
    // if rules deny read -> null
    avatarCache.set(uid, null);
    return null;
  }
}

async function renderMessage({ uid, user, text, me=false, photoURL=null }){
  const row = document.createElement("div");
  row.className = "msgRow" + (me ? " meRow" : "");

  // If message has no photoURL (old messages), fetch from users/{uid}
  let finalPhoto = photoURL || null;
  if (!finalPhoto) finalPhoto = await getAvatarForUid(uid);

  const avatarHTML = finalPhoto
    ? `<img class="avatar" src="${finalPhoto}" referrerpolicy="no-referrer">`
    : `<div class="avatar fallback">${esc((user?.[0] || "?").toUpperCase())}</div>`;

  row.innerHTML = `
    ${avatarHTML}
    <div class="bubble">
      <div class="meta"><span class="name">${esc(user || "USER")}</span></div>
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
      setTerminal("authenticated");
      startListener();
      return;
    }

    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

    addSystem("INVITE_OK");
    startListener();
  }catch(e){
    console.error(e);
    addSystem("INVITE_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Listener
function startListener(){
  if (!currentUser) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  const q = query(msgRef, orderBy("createdAt"), limit(150));

  unsub = onSnapshot(q, async (snap) => {
    clearMessages();

    // render sequentially to keep order + async avatar fetch
    for (const docSnap of snap.docs) {
      const m = docSnap.data();
      await renderMessage({
        uid: m.uid,
        user: m.displayName || "USER",
        text: m.text || "",
        me: m.uid === currentUser.uid,
        photoURL: m.photoURL || null
      });
    }

    messagesEl.scrollTop = messagesEl.scrollHeight;
  }, (err) => {
    console.error(err);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

// Send
async function sendMessage(){
  const text = (msgInput.value || "").trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const now = Date.now();
  if (now - lastSentAt < COOLDOWN_MS) return addSystem("SLOWMODE 2.5s");
  lastSentAt = now;

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null, // ✅ stored in message for everyone
      text: text.slice(0, 300),
      createdAt: serverTimestamp()
    });
    msgInput.value = "";
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
joinBtn?.addEventListener("click", () => joinWithInvite(inviteCode?.value || ""));

// Clock
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// Boot
renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");

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

    try{
      const ok = await checkMembership();
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
      clearMessages();
      addSystem("ACCESS_DENIED");
      setTerminal("join required");
    }
  } else {
    currentUser = null;
    userTag.textContent = "OFFLINE";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";
    if (unsub) { unsub(); unsub = null; }
    clearMessages();
    addSystem("DISCONNECTED");
    setTerminal("offline");
  }
});

// Crash reporting into UI
window.addEventListener("error", (ev) => {
  try { addSystem("JS_CRASH: " + (ev?.message || "unknown")); } catch {}
});
window.addEventListener("unhandledrejection", (ev) => {
  try { addSystem("JS_PROMISE_CRASH"); } catch {}
  console.error(ev.reason);
});