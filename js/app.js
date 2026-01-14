// js/app.js — Firebase Auth + Invites + Membership gate + Firestore chat + Avatars + Anti-spam
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc,
  collection, query, orderBy, limit, onSnapshot, addDoc,
  serverTimestamp
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
function safeUrl(u){
  // simple garde-fou (évite javascript:)
  const s = String(u || "").trim();
  if (!s) return "";
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return "";
}
function clearMessages(){ messagesEl.innerHTML = ""; }
function addSystem(text){
  const div = document.createElement("div");
  div.className = "msg sys";
  div.innerHTML = `<span class="system">[SYSTEM]</span> ${esc(text)}`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
function addMessage({ displayName, text, photoURL, me }){
  const div = document.createElement("div");
  div.className = "msgRow" + (me ? " meRow" : "");

  const avatar = safeUrl(photoURL)
    ? `<img class="avatar" src="${esc(photoURL)}" alt="">`
    : `<div class="avatar fallback">${esc((displayName || "U").slice(0,1).toUpperCase())}</div>`;

  div.innerHTML = `
    ${avatar}
    <div class="bubble">
      <div class="meta">
        <span class="name">${esc(displayName || "USER")}</span>
      </div>
      <div class="text">${esc(text || "")}</div>
    </div>
  `;

  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// State
let currentUser = null;
let unsub = null;

// Anti-spam (client side) — simple & efficace
let lastSendAt = 0;
let streak = 0;
function canSendNow(){
  const now = Date.now();
  const delta = now - lastSendAt;

  // 1 msg / 900ms minimum
  if (delta < 900) return { ok:false, reason:"SLOW_DOWN" };

  // limite “rafale”
  if (delta < 3500) streak++; else streak = 0;
  if (streak >= 6) return { ok:false, reason:"FLOOD_DETECTED" };

  lastSendAt = now;
  return { ok:true };
}

// V1 fixed space/room
const SPACE_ID = "europe";
const SPACE_LABEL = "EUROPE_SPACE";
const ROOM_ID = "general";
const ROOM_LABEL = "general";

function renderStaticNav(){
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

// Membership check
async function checkMembership(){
  if (!currentUser) return false;
  const memRef = doc(db, "spaces", SPACE_ID, "members", currentUser.uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

// Join with invite
async function joinWithInvite(codeRaw){
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const code = (codeRaw || "").trim().toUpperCase();
  if (!code) return addSystem("INVITE_CODE_REQUIRED.");

  try {
    const invRef = doc(db, "invites", code);
    const invSnap = await getDoc(invRef);
    if (!invSnap.exists()) return addSystem("INVITE_INVALID.");

    const inv = invSnap.data();
    if (inv.enabled !== true) return addSystem("INVITE_DISABLED.");
    if (!inv.spaceId) return addSystem("INVITE_BROKEN (no spaceId).");

    const memRef = doc(db, "spaces", inv.spaceId, "members", currentUser.uid);
    const memSnap = await getDoc(memRef);

    if (memSnap.exists()) {
      addSystem("ALREADY_MEMBER: access ok");
      setTerminal("authenticated");
      startListener();
      return;
    }

    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

    addSystem(`INVITE_OK: joined ${inv.spaceId}`);
    // reload pour que le checkMembership repasse clean
    location.reload();
  } catch (e) {
    console.error(e);
    addSystem("INVITE_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Firestore listener
function startListener(){
  if (!currentUser) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED: Firestore live feed");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  const q = query(msgRef, orderBy("createdAt"), limit(150));

  unsub = onSnapshot(q, (snap) => {
    clearMessages();
    snap.forEach((docSnap) => {
      const m = docSnap.data();
      addMessage({
        displayName: m.displayName || "USER",
        text: m.text || "",
        photoURL: m.photoURL || "",
        me: (m.uid === currentUser.uid),
      });
    });
  }, (err) => {
    console.error(err);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

// Send message (+ avatar)
async function sendMessage(){
  const text = (msgInput.value || "").trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const gate = canSendNow();
  if (!gate.ok) return addSystem(gate.reason);

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || "",
      text,
      createdAt: serverTimestamp()
    });
    msgInput.value = "";
  } catch(e){
    console.error(e);
    addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Events
btnLogin?.addEventListener("click", async () => {
  try { await loginGoogle(); }
  catch(e){ console.error(e); addSystem("AUTH_FAILED: " + (e?.code || e?.message || "unknown")); }
});

btnLogout?.addEventListener("click", async () => {
  try { await logout(); }
  catch(e){ console.error(e); addSystem("LOGOUT_FAILED"); }
});

joinBtn?.addEventListener("click", () => {
  joinWithInvite(inviteCode?.value || "");
});

sendBtn?.addEventListener("click", sendMessage);
msgInput?.addEventListener("keydown", (e) => { if (e.key === "Enter") sendBtn.click(); });

// Clock
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// Boot
renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("MODE: avatars + anti-spam + members gate");

// Auth watch
watchAuth(async (user) => {
  if (user) {
    currentUser = {
      uid: user.uid,
      name: (user.displayName || "USER").toUpperCase(),
      photoURL: user.photoURL || ""
    };

    userTag.textContent = currentUser.name;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";

    addSystem("AUTH_OK: " + currentUser.name);
    addSystem("CHECKING_ACCESS...");

    try {
      const ok = await checkMembership();
      if (!ok) {
        clearMessages();
        addSystem("ACCESS_DENIED: invite required");
        addSystem("=> Enter code then click REJOINDRE");
        setTerminal("join required");
        return;
      }
      addSystem("ACCESS_OK: member verified");
      setTerminal("authenticated");
      startListener();
    } catch (e) {
      console.error(e);
      clearMessages();
      addSystem("ACCESS_DENIED: invite required");
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