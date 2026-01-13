// js/app.js
// Console logic (base) — pas encore Firebase

const clockEl = document.getElementById("clock");
const terminalStatus = document.getElementById("terminalStatus");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const userTag = document.getElementById("userTag");

const joinHint = document.getElementById("joinHint");
const inviteCode = document.getElementById("inviteCode");
const joinBtn = document.getElementById("joinBtn");

const spacesList = document.getElementById("spacesList");
const roomsList = document.getElementById("roomsList");
const spaceName = document.getElementById("spaceName");
const roomName = document.getElementById("roomName");

const messages = document.getElementById("messages");
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");

// ---------- Utils ----------
function pad(n){ return String(n).padStart(2, "0"); }
function nowStamp(){
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function setTerminal(text){
  if (terminalStatus) terminalStatus.textContent = text;
}

function addSystem(text){
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<span class="system">[SYSTEM]</span> ${escapeHtml(text)}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function addMessage(user, text, me=false){
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<span class="${me ? "me" : "user"}">${escapeHtml(user)}:</span> ${escapeHtml(text)}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}

// ---------- Fake state (temp) ----------
let authed = false;
let currentUser = null;

const demoSpaces = [
  { id:"s1", name:"EUROPE_SPACE" },
  { id:"s2", name:"PROJECT_LAB" }
];
const demoRooms = {
  s1: [{id:"r1", name:"annonces"}, {id:"r2", name:"general"}],
  s2: [{id:"r3", name:"build"}, {id:"r4", name:"ideas"}]
};

let currentSpaceId = null;
let currentRoomId = null;

// ---------- UI render ----------
function renderSpaces(){
  spacesList.innerHTML = "";
  demoSpaces.forEach(sp => {
    const item = document.createElement("div");
    item.className = "item" + (sp.id === currentSpaceId ? " active" : "");
    item.textContent = sp.name;
    item.onclick = () => selectSpace(sp.id);
    spacesList.appendChild(item);
  });
}

function renderRooms(){
  roomsList.innerHTML = "";
  const rooms = demoRooms[currentSpaceId] || [];
  rooms.forEach(r => {
    const item = document.createElement("div");
    item.className = "item" + (r.id === currentRoomId ? " active" : "");
    item.textContent = "# " + r.name;
    item.onclick = () => selectRoom(r.id);
    roomsList.appendChild(item);
  });
}

function selectSpace(spaceId){
  currentSpaceId = spaceId;
  currentRoomId = null;
  const sp = demoSpaces.find(s => s.id === spaceId);
  spaceName.textContent = sp ? sp.name : "—";
  roomName.textContent = "—";
  messages.innerHTML = "";
  addSystem(`SPACE_SELECTED: ${sp ? sp.name : spaceId}`);
  renderSpaces();
  renderRooms();
  setTerminal("space selected — choose a room");
}

function selectRoom(roomId){
  currentRoomId = roomId;
  const room = (demoRooms[currentSpaceId] || []).find(r => r.id === roomId);
  roomName.textContent = room ? "# " + room.name : "—";
  messages.innerHTML = "";
  addSystem(`ROOM_CONNECTED: ${room ? room.name : roomId}`);
  addMessage("console", "Tape un message, ça enverra en mode démo.", false);
  renderRooms();
  setTerminal("room connected — demo mode");
}

// ---------- Auth toggle (temp) ----------
function setAuthUI(on){
  authed = on;
  if (on) {
    currentUser = { name: "USER" };
    userTag.textContent = currentUser.name;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";
    joinHint.textContent = "Entre un code d’invitation puis clique REJOINDRE.";
    setTerminal("authenticated — ready");
    addSystem("AUTH_OK (demo). Next step: Firebase Auth.");
    renderSpaces();
  } else {
    currentUser = null;
    userTag.textContent = "OFFLINE";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";
    joinHint.textContent = "Connecte-toi puis rejoins un espace.";
    spacesList.innerHTML = "";
    roomsList.innerHTML = "";
    spaceName.textContent = "—";
    roomName.textContent = "—";
    messages.innerHTML = "";
    setTerminal("offline");
  }
}

// ---------- Events ----------
btnLogin?.addEventListener("click", () => {
  setAuthUI(true);
});

btnLogout?.addEventListener("click", () => {
  setAuthUI(false);
});

joinBtn?.addEventListener("click", () => {
  if (!authed) return addSystem("AUTH_REQUIRED.");
  const code = (inviteCode.value || "").trim().toUpperCase();
  if (!code) return addSystem("INVITE_CODE_REQUIRED.");

  // Démo: n'importe quel code -> sélectionne un espace
  addSystem(`INVITE_ACCEPTED: ${code} (demo)`);
  selectSpace("s1");
  selectRoom("r2");
});

sendBtn?.addEventListener("click", () => {
  const t = (msgInput.value || "").trim();
  if (!t) return;
  if (!authed) return addSystem("AUTH_REQUIRED.");
  if (!currentRoomId) return addSystem("JOIN_ROOM_REQUIRED.");
  addMessage(currentUser.name, t, true);
  msgInput.value = "";
});

msgInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// ---------- Clock ----------
setInterval(() => {
  if (clockEl) clockEl.textContent = nowStamp();
}, 250);

// ---------- Boot ----------
setAuthUI(false);
addSystem("BOOT_OK: console online.");
addSystem("MODE: demo UI (no Firebase yet).");
setTerminal("type: login");
