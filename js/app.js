// js/app.js — Firebase Auth + Invites + Membership gate + Rooms list + Anti-spam + Avatars + Mod delete
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
  collection, query, orderBy, limit, onSnapshot, addDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// ---------------- DOM ----------------
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

// ---------------- Utils ----------------
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

// Message UI avec avatar + bouton delete si mod
function addMessage({ id, user, text, me=false, photoURL=null, canDelete=false }){
  const row = document.createElement("div");
  row.className = "msg";

  const avatarHtml = photoURL
    ? `<img class="avatar" src="${esc(photoURL)}" alt="avatar">`
    : `<div class="avatar fallback"></div>`;

  const delBtn = canDelete
    ? `<button class="del" data-id="${esc(id)}" title="Supprimer">✕</button>`
    : "";

  row.innerHTML = `
    ${avatarHtml}
    <div class="bubble">
      <div class="line">
        <span class="${me ? "me" : "user"}">${esc(user)}:</span>
        ${delBtn}
      </div>
      <div class="text">${esc(text)}</div>
    </div>
  `;

  // handler delete
  if (canDelete) {
    const btn = row.querySelector("button.del");
    btn.addEventListener("click", async () => {
      if (!confirm("Supprimer ce message ?")) return;
      try {
        const ref = doc(db, "spaces", SPACE_ID, "rooms", currentRoomId, "messages", id);
        await deleteDoc(ref);
        addSystem("MOD_DELETE_OK");
      } catch (e) {
        console.error(e);
        addSystem("MOD_DELETE_FAILED: " + (e?.code || e?.message || "unknown"));
      }
    });
  }

  messagesEl.appendChild(row);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// ---------------- State ----------------
let currentUser = null;

let unsubMessages = null;
let unsubRooms = null;

const SPACE_ID = "europe";
const SPACE_LABEL = "EUROPE_SPACE";

let currentRoomId = "general";
let currentRoomLabel = "general";

// Anti-spam client
let lastSentAt = 0;

// Mod info
let myRole = "member";
let isMod = false;

// ---------------- UI ----------------
function renderSpaceStatic(){
  spacesList.innerHTML = "";
  const sp = document.createElement("div");
  sp.className = "item active";
  sp.textContent = SPACE_LABEL;
  spacesList.appendChild(sp);
  spaceName.textContent = SPACE_LABEL;
}

function renderRoomHeader(){
  roomName.textContent = "# " + currentRoomLabel;
}

// ---------------- Membership / Role ----------------
async function getMyMemberDoc(){
  if (!currentUser) return null;
  const memRef = doc(db, "spaces", SPACE_ID, "members", currentUser.uid);
  const snap = await getDoc(memRef);
  return snap.exists() ? snap.data() : null;
}

async function checkMembership(){
  const data = await getMyMemberDoc();
  return !!data;
}

// Join with invite (reads invites/{CODE}, creates members doc if not exists)
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
      // cache la zone invite
      if (inviteCode) inviteCode.style.display = "none";
      if (joinBtn) joinBtn.style.display = "none";
      return;
    }

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

// ---------------- Rooms List ----------------
function renderRoomsList(roomDocs){
  roomsList.innerHTML = "";

  roomDocs.forEach(({ id, name }) => {
    const label = name || id;

    const item = document.createElement("div");
    item.className = "item" + (id === currentRoomId ? " active" : "");
    item.textContent = "# " + label;

    item.onclick = () => {
      currentRoomId = id;
      currentRoomLabel = label;
      renderRoomHeader();
      renderRoomsList(roomDocs);
      startMessagesListener();
    };

    roomsList.appendChild(item);
  });
}

function startRoomsListener(){
  if (!currentUser) return;

  if (unsubRooms) { unsubRooms(); unsubRooms = null; }

  const roomsRef = collection(db, "spaces", SPACE_ID, "rooms");
  const qRooms = query(roomsRef, orderBy("name"), limit(50));

  unsubRooms = onSnapshot(qRooms, (snap) => {
    const list = [];
    snap.forEach(d => list.push({ id: d.id, name: d.data()?.name || d.id }));

    if (list.length === 0) {
      roomsList.innerHTML = "";
      const item = document.createElement("div");
      item.className = "item active";
      item.textContent = "# general";
      roomsList.appendChild(item);
      currentRoomId = "general";
      currentRoomLabel = "general";
      renderRoomHeader();
      return;
    }

    if (!list.some(r => r.id === currentRoomId)) {
      currentRoomId = list[0].id;
      currentRoomLabel = list[0].name || list[0].id;
    }

    const cur = list.find(r => r.id === currentRoomId);
    currentRoomLabel = cur?.name || currentRoomId;

    renderRoomHeader();
    renderRoomsList(list);
  }, (err) => {
    console.error(err);
    addSystem("ROOMS_LIST_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

// ---------------- Messages Listener ----------------
function startMessagesListener(){
  if (!currentUser) return;

  if (unsubMessages) { unsubMessages(); unsubMessages = null; }

  const msgRef = collection(db, "spaces", SPACE_ID, "rooms", currentRoomId, "messages");
  const qMsg = query(msgRef, orderBy("createdAt"), limit(120));

  unsubMessages = onSnapshot(qMsg, (snap) => {
    clearMessages();
    addSystem("ROOM: #" + currentRoomLabel);
    addSystem("CONNECTED: Firestore live feed");

    if (snap.empty) {
      addSystem("NO_MESSAGES_YET");
      return;
    }

    snap.forEach((docSnap) => {
      const m = docSnap.data();
      const me = m.uid === currentUser.uid;
      addMessage({
        id: docSnap.id,
        user: m.displayName || "user",
        text: m.text || "",
        me,
        photoURL: m.photoURL || null,
        canDelete: isMod // mod/admin/owner
      });
    });
  }, (err) => {
    console.error(err);
    clearMessages();
    addSystem("ROOM: #" + currentRoomLabel);
    addSystem("LISTEN_FAILED: " + (err?.code || err?.message || "unknown"));
  });
}

// ---------------- Send ----------------
async function sendMessage(){
  const text = (msgInput.value || "").trim();
  if (!text) return;
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

  // anti-spam client (2s)
  const now = Date.now();
  if (now - lastSentAt < 2000) return addSystem("SLOW_DOWN: wait 2s");
  lastSentAt = now;

  // longueur client (en plus des rules)
  if (text.length > 300) return addSystem("MESSAGE_TOO_LONG (300 max)");

  try{
    const msgRef = collection(db, "spaces", SPACE_ID, "rooms", currentRoomId, "messages");
    await addDoc(msgRef, {
      uid: currentUser.uid,
      displayName: currentUser.name,
      photoURL: currentUser.photoURL || null,
      text,
      createdAt: serverTimestamp()
    });
    msgInput.value = "";
  } catch(e){
    console.error(e);
    addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
  }
}

// ---------------- Events ----------------
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

// ---------------- Clock ----------------
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// ---------------- Boot ----------------
renderSpaceStatic();
renderRoomHeader();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("MODE: invites + members + rooms + anti-spam + avatars + mod");

// ---------------- Auth ----------------
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

    try {
      const member = await getMyMemberDoc();

      if (!member) {
        clearMessages();
        addSystem("ACCESS_DENIED: invite required");
        addSystem("=> Enter code then click REJOINDRE");
        setTerminal("join required");
        roomsList.innerHTML = "";
        if (inviteCode) inviteCode.style.display = "block";
        if (joinBtn) joinBtn.style.display = "block";
        return;
      }

      myRole = String(member.role || "member");
      isMod = ["mod","admin","owner"].includes(myRole);

      addSystem("ACCESS_OK: member verified");
      addSystem("ROLE: " + myRole);
      setTerminal("authenticated");

      // cache invite UI
      if (inviteCode) inviteCode.style.display = "none";
      if (joinBtn) joinBtn.style.display = "none";

      startRoomsListener();
      startMessagesListener();

    } catch (e) {
      console.error(e);
      clearMessages();
      addSystem("ACCESS_DENIED: invite required");
      setTerminal("join required");
      roomsList.innerHTML = "";
      if (inviteCode) inviteCode.style.display = "block";
      if (joinBtn) joinBtn.style.display = "block";
    }
  } else {
    currentUser = null;
    userTag.textContent = "OFFLINE";

    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";

    if (unsubMessages) { unsubMessages(); unsubMessages = null; }
    if (unsubRooms) { unsubRooms(); unsubRooms = null; }

    clearMessages();
    roomsList.innerHTML = "";
    addSystem("DISCONNECTED");
    setTerminal("offline");

    if (inviteCode) inviteCode.style.display = "block";
    if (joinBtn) joinBtn.style.display = "block";
  }
});
