// js/app.js — Firebase Auth + Invites + Membership gate + Firestore chat
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

// V1 fixed space/room (simple)
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

// Membership check (needs allow get on members/{uid})
async function checkMembership(){
  if (!currentUser) return false;
  const memRef = doc(db, "spaces", SPACE_ID, "members", currentUser.uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

// Join with invite (reads invites/{CODE}, creates members doc)
async function joinWithInvite(codeRaw){
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const code = (codeRaw || "").trim().toUpperCase();
  if (!code) return addSystem("INVITE_CODE_REQUIRED.");

  try {
    // 1) Lire l'invite
    const invRef = doc(db, "invites", code);
    const invSnap = await getDoc(invRef);
    if (!invSnap.exists()) return addSystem("INVITE_INVALID.");

    const inv = invSnap.data();
    if (inv.enabled !== true) return addSystem("INVITE_DISABLED.");
    if (!inv.spaceId) return addSystem("INVITE_BROKEN (no spaceId).");

    // 2) ✅ Si déjà membre -> stop (sinon ça fait un update interdit)
    const memRef = doc(db, "spaces", inv.spaceId, "members", currentUser.uid);
    const memSnap = await getDoc(memRef);

    if (memSnap.exists()) {
      addSystem("ALREADY_MEMBER: access ok");
      setTerminal("authenticated");
      return; // 👈 on ne touche rien
    }

    // 3) Créer membership (create only)
    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

    addSystem(`INVITE_OK: joined ${inv.spaceId}`);
    location.reload();

  } catch (e) {
    console.error(e);
    addSystem("INVITE_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}


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
addSystem("MODE: invites + members gate");

// Auth
watchAuth(async (user) => {
  if (user) {
    currentUser = { uid: user.uid, name: (user.displayName || "USER").toUpperCase() };
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
