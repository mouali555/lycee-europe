<<<<<<< HEAD
// js/app.js — Chat + Avatars + Invites + IA via Cloud Run (HTTP) ✅ FIX SEND
=======
// js/app.js — Chat + Avatars + Invites + IA via Cloud Run (HTTP)
>>>>>>> dc08ff2 (zed)
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
<<<<<<< HEAD
  collection, query, orderBy, limit, onSnapshot, addDoc
=======
  collection, query, orderBy, limit, onSnapshot, addDoc,
  updateDoc, arrayUnion, arrayRemove
>>>>>>> dc08ff2 (zed)
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// DOM
const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");
const chatStatusEl = document.getElementById("chatStatus");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

const inviteCode = document.getElementById("inviteCode");
const joinBtn = document.getElementById("joinBtn");
const inviteFab = document.getElementById("inviteFab");

const spacesList = document.getElementById("spacesList");
const roomsList = document.getElementById("roomsList");
const spaceName = document.getElementById("spaceName");
const roomName = document.getElementById("roomName");

const messagesEl = document.getElementById("messages");
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");

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
<<<<<<< HEAD
  if (chatStatusEl) chatStatusEl.textContent = text;
=======
>>>>>>> dc08ff2 (zed)
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
<<<<<<< HEAD
}

// ✅ IMPORTANT: on ne disable PLUS le bouton/ input.
// On met juste un état visuel.
let chatLocked = true;
function setChatLocked(locked){
  chatLocked = !!locked;

  if (locked){
    msgInput.placeholder = "Invite requis — mets ton code puis JOIN";
    msgInput.style.opacity = "0.65";
    sendBtn.style.opacity = "0.65";
  } else {
    msgInput.placeholder = "Écris un message… (Enter pour envoyer)";
    msgInput.style.opacity = "1";
    sendBtn.style.opacity = "1";
  }
=======
>>>>>>> dc08ff2 (zed)
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

// Anti-spam (client)
let lastSentAt = 0;
const COOLDOWN_MS = 2500;

<<<<<<< HEAD
// Nav
function renderLockedNav(){
  if (spacesList) spacesList.innerHTML = `<div class="item active">🔒 LOCKED</div>`;
  if (roomsList) roomsList.innerHTML = `<div class="item">—</div>`;
  if (spaceName) spaceName.textContent = "LOCKED";
  if (roomName) roomName.textContent = "—";
}

=======
// UI nav
>>>>>>> dc08ff2 (zed)
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
<<<<<<< HEAD
  row.className = "msgRow" + (me ? " meRow" : "");
=======
  const isAI = uid === "AI_BOT" || (user || "").toUpperCase() === "IA";
  const isKey = uid === "KEYMASTER" || (user || "").toUpperCase() === "KEYMASTER";
  row.className = "msgRow" + (me ? " meRow" : "") + (isAI ? " iaRow" : "") + (isKey ? " keyRow" : "");
>>>>>>> dc08ff2 (zed)

  let finalPhoto = photoURL || null;
  if (!finalPhoto) finalPhoto = await getAvatarForUid(uid);

  const avatarHTML = finalPhoto
    ? `<img class="avatar" src="${finalPhoto}" referrerpolicy="no-referrer">`
    : `<div class="avatar fallback">${esc((user?.[0] || "?").toUpperCase())}</div>`;

  row.innerHTML = `
    ${avatarHTML}
    <div class="bubble">
<<<<<<< HEAD
      <div class="meta"><span class="name">${esc(user || "USER")}</span></div>
=======
      <div class="meta">
        <span class="name">${esc(user || "USER")}</span>
        ${isAI ? `<span class="badge">🤖 IA</span>` : (isKey ? `<span class="badge">🔑 KEY</span>` : "")}
      </div>
>>>>>>> dc08ff2 (zed)
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
<<<<<<< HEAD
=======
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
      text: `DROP DETECTÉ 🔑  ${code}  (tape /claim ${code})`.slice(0, 300),
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
>>>>>>> dc08ff2 (zed)
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
<<<<<<< HEAD
      renderStaticNav();
      setChatLocked(false);
=======
>>>>>>> dc08ff2 (zed)
      setTerminal("authenticated");
      startListener();
      return;
    }

    await setDoc(memRef, {
      role: inv.role || "member",
      joinedAt: serverTimestamp(),
      displayName: currentUser.name
    });

<<<<<<< HEAD
    addSystem("INVITE_OK");
    isMember = true;
    renderStaticNav();
    setChatLocked(false);
=======
    // Give a starter key on first join
    try{ await grantKey("BRONZE"); }catch{}

    addSystem("INVITE_OK");
    isMember = true;
>>>>>>> dc08ff2 (zed)
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
  const q = query(msgRef, orderBy("createdAt"), limit(150));

  unsub = onSnapshot(q, async (snap) => {
    clearMessages();
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

<<<<<<< HEAD
// ===== IA CALL =====
const AI_ENDPOINT = "https://aireply-mtjtt4jn5q-uc.a.run.app"; // ✅ ton endpoint

async function callAI(prompt){
  if (!AI_ENDPOINT) return addSystem("AI_DISABLED: endpoint missing");
=======
// ===== IA CALL (Cloud Run / HTTP) =====
const AI_ENDPOINT = "https://aireply-mtjtt4jn5q-uc.a.run.app";

async function callAI(prompt){
  if (!AI_ENDPOINT || AI_ENDPOINT.includes("PASTE_")) {
    addSystem("AI_DISABLED: set AI_ENDPOINT in app.js");
    return;
  }
>>>>>>> dc08ff2 (zed)
  if (!currentUser) return addSystem("AUTH_REQUIRED.");
  if (!isMember) return addSystem("ACCESS_DENIED: invite required");

  const controller = new AbortController();
<<<<<<< HEAD
  const timeout = setTimeout(() => controller.abort(), 25000);
=======
  const timeout = setTimeout(() => controller.abort(), 20000); // 20s
>>>>>>> dc08ff2 (zed)

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
<<<<<<< HEAD
=======

    addSystem("AI_OK");
>>>>>>> dc08ff2 (zed)
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
<<<<<<< HEAD

  if (!currentUser) return addSystem("AUTH_REQUIRED.");
  if (!isMember) return addSystem("ACCESS_DENIED: invite required");

  const now = Date.now();
  if (now - lastSentAt < COOLDOWN_MS) return addSystem("SLOWMODE 2.5s");
  lastSentAt = now;

  const lower = text.toLowerCase();

  // ✅ IA command
  if (lower.startsWith("@ia ") || lower.startsWith("@ai ")) {
    const prompt = text.slice(4).trim();
    if (!prompt) return addSystem("AI_USAGE: @ia ton message");

    // 1) écrire la question dans le chat
    try{
      const msgRef = collection(db, "spaces", SPACE_ID, "rooms", ROOM_ID, "messages");
      await addDoc(msgRef, {
        uid: currentUser.uid,
        displayName: currentUser.name,
        photoURL: currentUser.photoURL || null,
        text: `@IA: ${prompt}`.slice(0, 300),
        createdAt: serverTimestamp()
      });
    }catch(e){
      console.error(e);
      addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
      return;
    }

    msgInput.value = "";
    addSystem("AI_THINKING...");
    await callAI(prompt);
    return;
  }

  // Normal message
=======
  if (!currentUser) return addSystem("AUTH_REQUIRED.");

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
        text: `@IA: ${prompt}`.slice(0, 300),
        createdAt: serverTimestamp()
      });
    }catch(e){
      console.error(e);
      addSystem("SEND_FAILED: " + (e?.code || e?.message || "unknown"));
      return;
    }

    // 2) appeler l'IA (elle répondra ensuite via ton backend)
    msgInput.value = "";
    addSystem("AI_THINKING...");
    await callAI(prompt);
    return;
  }

  if (!isMember) return addSystem("ACCESS_DENIED: invite required");

>>>>>>> dc08ff2 (zed)
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
msgInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage(); });

joinBtn?.addEventListener("click", () => joinWithInvite(inviteCode?.value || ""));
inviteFab?.addEventListener("click", () => {
  inviteCode?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => inviteCode?.focus(), 150);
});

// Clock
setInterval(() => { if (clockEl) clockEl.textContent = nowStamp(); }, 250);

// Boot
<<<<<<< HEAD
renderLockedNav();
setChatLocked(true);
setTerminal("offline");
addSystem("BOOT_OK");
addSystem("TIP: @ia <message>");
=======
renderStaticNav();
setTerminal("type: login");
addSystem("BOOT_OK");
addSystem("TIP: @ia <message> • /help");
>>>>>>> dc08ff2 (zed)

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
<<<<<<< HEAD
    setTerminal("checking");

    try{
      const ok = await checkMembership();
      isMember = !!ok;

      if (!ok) {
        clearMessages();
        renderLockedNav();
        inviteFab && (inviteFab.style.display = "inline-block");
        setChatLocked(true);
        addSystem("ACCESS_DENIED: invite required");
        addSystem("=> Entre un code puis clique JOIN");
        setTerminal("join required");
        return;
      }

      inviteFab && (inviteFab.style.display = "none");
      renderStaticNav();
      setChatLocked(false);
      addSystem("ACCESS_OK");
      setTerminal("authenticated");
      startListener();
    }catch(e){
      console.error(e);
      isMember = false;
      clearMessages();
      renderLockedNav();
      setChatLocked(true);
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
    renderLockedNav();
    inviteFab && (inviteFab.style.display = "none");
    setChatLocked(true);
    addSystem("DISCONNECTED");
    setTerminal("offline");
=======

    await ensureUserDoc();
    await refreshProfile();

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
>>>>>>> dc08ff2 (zed)
  }
});

// Crash reporting
window.addEventListener("error", (ev) => {
  try { addSystem("JS_CRASH: " + (ev?.message || "unknown")); } catch {}
});
window.addEventListener("unhandledrejection", (ev) => {
  try { addSystem("JS_PROMISE_CRASH"); } catch {}
  console.error(ev.reason);
});