// js/app.js — Firebase Auth + Invites + Membership + Firestore chat + Avatars + Anti-spam + IA (@ai)
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
  collection, query, orderBy, limit, onSnapshot, addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

/* =========================
   CONFIG
   ========================= */

// ✅ TON endpoint IA Cloud Run (POST only)
const AI_ENDPOINT = "https://aireply-mtjtt4jn5q-uc.a.run.app";

// V1 salon fixe
const SPACE_ID = "europe";
const SPACE_LABEL = "EUROPE_SPACE";
const ROOM_ID = "general";
const ROOM_LABEL = "general";

// Anti-spam client
const COOLDOWN_MS = 2500;

/* =========================
   DOM
   ========================= */

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

function must(el, id){
  if (!el) throw new Error(`MISSING_DOM_ID: #${id}`);
  return el;
}
must(btnLogin, "btn-login");
must(btnLogout, "btn-logout");
must(userTag, "userTag");
must(messagesEl, "messages");
must(msgInput, "msg");
must(sendBtn, "send");

/* =========================
   UTILS
   ========================= */

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

// UI message row
function addMessage(user, text, me=false, photoURL=null){
  const row = document.createElement("div");
  row.className = "msgRow" + (me ? " meRow" : "");

  const avatarHTML = photoURL
    ? `<img class="avatar" src="${photoURL}" referrerpolicy="no-referrer">`
    : `<div class="avatar fallback">${esc((user?.[0] || "?").toUpperCase())}</div>`;

  row.innerHTML = `
    ${avatarHTML}
    <div class="bubble">
      <div class="meta"><span class="name">${esc(user || "USER")}</span></div>
      <div class="text">${esc(text || "")}</div>
    </div>
  `;

  messagesEl.appendChild(row);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

/* =========================
   STATE
   ========================= */

let currentUser = null;
let unsub = null;
let lastSentAt = 0;

// avatar cache pour anciens messages
const avatarCache = new Map();
async function getAvatarForUid(uid){
  if (!uid) return null;
  if (avatarCache.has(uid)) return avatarCache.get(uid);
  try{
    const snap = await getDoc(doc(db, "users", uid));
    const photo = snap.exists() ? (snap.data().photoURL || null) : null;
    avatarCache.set(uid, photo);
    return photo;
  }catch{
    avatarCache.set(uid, null);
    return null;
  }
}

/* =========================
   NAV
   ========================= */

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

/* =========================
   MEMBERSHIP / INVITES
   ========================= */

async function checkMembership(){
  if (!currentUser) return false;
  const memRef = doc(db, "spaces", SPACE_ID, "members", currentUser.uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

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

/* =========================
   FIRESTORE LISTENER
   ========================= */

function startListener(){
  if (!currentUser) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  const q = query(msgRef, orderBy("createdAt"), limit(150));

  unsub = onSnapshot(q, async (snap) => {
    clearMessages();

    for (const docSnap of snap.docs) {
      const m = docSnap.data();

      let photo = m.photoURL || null;
      if (!photo && m.uid && m.uid !== "AI_BOT") {
        photo = await getAvatarForUid(m.uid);
      }

      addMessage(
        m.displayName || "USER",
        m.text || "",
        m.uid === currentUser.uid,
        photo
      );
    }
  }, (err) => {
    console.error(err);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

/* =========================
   IA CALL (POST)
   ========================= */

async function callAI(prompt){
  addSystem("AI_THINKING...");

  const payload = {
    // ton backend original attend souvent prompt + spaceId + roomId
    prompt: String(prompt).slice(0, 1200),
    spaceId: SPACE_ID,
    roomId: ROOM_ID
  };

  try{
    const res = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    addSystem("AI_HTTP_STATUS: " + res.status);

    const txt = await res.text().catch(() => "");
    // On log le body (utile si OpenAI error)
    if (!res.ok) {
      addSystem("AI_HTTP_BODY: " + (txt ? txt.slice(0, 180) : "(empty)"));
      throw new Error("HTTP_" + res.status);
    }

    // Si ton backend renvoie json, on essaye de parser
    let data = null;
    try { data = JSON.parse(txt); } catch {}

    // Ton backend peut soit renvoyer "ok", soit {reply:"..."}
    // Dans ton cas, la function écrit dans Firestore, donc le front n’a rien à afficher ici.
    // On confirme juste.
    addSystem("AI_OK (bot posted)");

    return data;
  }catch(e){
    console.error(e);
    addSystem("AI_FAILED: " + (e?.message || "unknown"));
  }
}

/* =========================
   SEND
   ========================= */

async function sendMessage(){
  const text = (msgInput.value || "").trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const now = Date.now();
  if (now - lastSentAt < COOLDOWN_MS) return addSystem(`SLOWMODE ${COOLDOWN_MS/1000}s`);
  lastSentAt = now;

  // IA trigger
  if (/^@ai\b/i.test(text) || /^@ia\b/i.test(text)) {
    const prompt = text.replace(/^@ai\s*/i, "").replace(/^@ia\s*/i, "").trim();
    msgInput.value = "";
    if (!prompt) return addSystem("AI_USAGE: @ai ton message");
    await callAI(prompt);
    return;
  }

  // Normal message -> Firestore
  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text: text.slice(0, 300),
      createdAt: serverTimestamp()
    });
    msgInput.value = "";
  }catch(e){
    console.error(e);
    addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

/* =========================
   EVENTS
   ========================= */

btnLogin.addEventListener("click", async () => {
  try { await loginGoogle(); }
  catch(e){ console.error(e); addSystem("AUTH_FAILED: " + (e?.code || e?.message || "unknown")); }
});

btnLogout.addEventListener("click", async () => {
  try { await logout(); }
  catch(e){ console.error(e); addSystem("LOGOUT_FAILED"); }
});

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage(); });

joinBtn?.addEventListener("click", () => joinWithInvite(inviteCode?.value || ""));

/* =========================
   BOOT
   ========================= */

setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("TIP: @ai <message>");

/* =========================
   AUTH WATCH
   ========================= */

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

/* =========================
   CRASH REPORT UI
   ========================= */

window.addEventListener("error", (ev) => {
  try { addSystem("JS_CRASH: " + (ev?.message || "unknown")); } catch {}
});
window.addEventListener("unhandledrejection", (ev) => {
  try { addSystem("JS_PROMISE_CRASH"); } catch {}
  console.error(ev.reason);
});