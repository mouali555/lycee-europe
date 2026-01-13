// js/app.js — Firebase Auth + Firestore messages persistants
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  collection, query, orderBy, limit, onSnapshot,
  addDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// DOM
const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

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
function clearMessages(){ messagesEl.innerHTML = ""; }
function addSystem(text){
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<span class="system">[SYSTEM]</span> ${esc(text)}`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
function addMessage(user, text, me=false){
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<span class="${me ? "me" : "user"}">${esc(user)}:</span> ${esc(text)}`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// State
let currentUser = null;
let unsub = null;

// FIXED room (V1)
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

// Listener Firestore (persist)
function startListener(){
  if (!currentUser) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED: Firestore live feed");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  const q = query(msgRef, orderBy("createdAt"), limit(120));

  unsub = onSnapshot(q, (snap) => {
    clearMessages();
    snap.forEach(docSnap => {
      const m = docSnap.data();
      const me = m.uid === currentUser.uid;
      addMessage(m.displayName || "user", m.text || "", me);
    });
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

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
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

sendBtn?.addEventListener("click", sendMessage);
msgInput?.addEventListener("keydown", (e) => { if (e.key === "Enter") sendBtn.click(); });

// Clock
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// Boot
renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("MODE: Firebase Auth + Firestore (persist)");

// Auth watch
watchAuth((user) => {
  if (user) {
    currentUser = { uid: user.uid, name: (user.displayName || "USER").toUpperCase() };
    userTag.textContent = currentUser.name;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";
    addSystem("AUTH_OK: " + currentUser.name);
    startListener();
    setTerminal("authenticated");
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
