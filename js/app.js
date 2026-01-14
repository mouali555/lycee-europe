// js/app.js — Firebase Auth + Invites + Membership gate + Firestore chat + Anti-spam + Avatars
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
  div.className = "msg systemline";
  div.innerHTML = `<span class="system">[SYSTEM]</span> ${esc(text)}`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
function avatarEl(photoURL, fallbackText){
  if (photoURL) {
    const img = document.createElement("img");
    img.className = "avatar";
    img.src = photoURL;
    img.alt = "avatar";
    img.referrerPolicy = "no-referrer";
    return img;
  }
  const div = document.createElement("div");
  div.className = "avatar fallback";
  div.textContent = (fallbackText || "U").slice(0,2);
  return div;
}
function addMessage({displayName, text, me, photoURL, createdAtLabel}){
  const row = document.createElement("div");
  row.className = "msg";

  const av = avatarEl(photoURL, displayName ? displayName.toUpperCase() : "U");

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const line = document.createElement("div");
  line.className = "line";

  const name = document.createElement("span");
  name.className = me ? "me" : "user";
  name.textContent = (displayName || "USER") + ":";

  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = createdAtLabel ? createdAtLabel : "";

  line.appendChild(name);
  line.appendChild(meta);

  const content = document.createElement("div");
  content.className = "text";
  content.textContent = text || "";

  bubble.appendChild(line);
  bubble.appendChild(content);

  row.appendChild(av);
  row.appendChild(bubble);

  messagesEl.appendChild(row);
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

// Anti-spam (client side)
const SPAM = {
  cooldownMs: 1800,         // 1.8s entre messages
  sameMsgWindowMs: 12000,   // interdit de renvoyer EXACTEMENT le même msg pendant 12s
  maxLen: 300,
  lastSentAt: 0,
  lastText: "",
  lastTextAt: 0
};

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

// Join with invite (reads invites/{CODE}, creates members doc)
async function joinWithInvite(codeRaw){
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const code = (codeRaw || "").trim().toUpperCase();
  if (!code) return addSystem("INVITE_CODE_REQUIRED.");

  try {
    // read invite
    const invRef = doc(db, "invites", code);
    const invSnap = await getDoc(invRef);
    if (!invSnap.exists()) return addSystem("INVITE_INVALID.");

    const inv = invSnap.data();
    if (inv.enabled !== true) return addSystem("INVITE_DISABLED.");
    if (!inv.spaceId) return addSystem("INVITE_BROKEN (no spaceId).");

    // if already member, stop
    const memRef = doc(db, "spaces", inv.spaceId, "members", currentUser.uid);
    const memSnap = await getDoc(memRef);
    if (memSnap.exists()) {
      addSystem("ALREADY_MEMBER: access ok");
      setTerminal("authenticated");
      startListener();
      return;
    }

    // create membership
    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

    addSystem(`INVITE_OK: joined ${inv.spaceId}`);
    // recharge simple pour que l'accès se mette bien
    location.reload();

  } catch (e) {
    console.error(e);
    addSystem("INVITE_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// Firestore messages (listener)
function startListener(){
  if (!currentUser) return;

  if (unsub) { unsub(); unsub = null; }
  clearMessages();
  addSystem("CONNECTED: Firestore live feed");

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
  const q = query(msgRef, orderBy("createdAt"), limit(200));

  unsub = onSnapshot(q, (snap) => {
    clearMessages();
    snap.forEach((docSnap) => {
      const m = docSnap.data();
      const me = m.uid === currentUser.uid;

      // affichage timestamp simple si dispo
      let label = "";
      try {
        if (m.createdAt && m.createdAt.toDate) {
          const d = m.createdAt.toDate();
          label = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        }
      } catch {}

      addMessage({
        displayName: m.displayName || "USER",
        text: m.text || "",
        me,
        photoURL: m.photoURL || "",
        createdAtLabel: label
      });
    });
  }, (err) => {
    console.error(err);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

function canSend(text){
  const now = Date.now();
  if (text.length > SPAM.maxLen) return { ok:false, why:`MSG_TOO_LONG (${SPAM.maxLen})` };

  if (now - SPAM.lastSentAt < SPAM.cooldownMs) {
    const left = Math.ceil((SPAM.cooldownMs - (now - SPAM.lastSentAt))/1000);
    return { ok:false, why:`SLOW_DOWN (${left}s)` };
  }

  // same message spam
  if (SPAM.lastText && text === SPAM.lastText && (now - SPAM.lastTextAt) < SPAM.sameMsgWindowMs) {
    return { ok:false, why:"DUPLICATE_BLOCKED" };
  }

  return { ok:true, why:"" };
}

async function sendMessage(){
  const raw = (msgInput.value || "");
  const text = raw.trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  const verdict = canSend(text);
  if (!verdict.ok) return addSystem("SPAM_BLOCKED: " + verdict.why);

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");

    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || "",
      text,
      createdAt: serverTimestamp()
    });

    SPAM.lastSentAt = Date.now();
    SPAM.lastText = text;
    SPAM.lastTextAt = Date.now();

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
addSystem("MODE: invites + members gate + anti-spam + avatars");

// Auth
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