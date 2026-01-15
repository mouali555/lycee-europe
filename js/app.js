// js/app.js — Chat + Avatars + Invites + IA (Cloud Run)
import { loginGoogle, logout, watchAuth } from "./auth.js";
import { db } from "./firebase.js";

import {
  doc, getDoc, setDoc, serverTimestamp,
  collection, query, orderBy, limit, onSnapshot, addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

/* ================= DOM ================= */
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

/* ================= UTILS ================= */
function pad(n){ return String(n).padStart(2,"0"); }
function nowStamp(){
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function esc(s){
  return String(s).replace(/[&<>"']/g,m=>({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}
function setTerminal(t){ terminalStatus && (terminalStatus.textContent=t); }
function clearMessages(){ messagesEl.innerHTML=""; }
function addSystem(t){
  const d=document.createElement("div");
  d.className="msg sys";
  d.innerHTML=`<span class="system">[SYSTEM]</span> ${esc(t)}`;
  messagesEl.appendChild(d);
  messagesEl.scrollTop=messagesEl.scrollHeight;
}

/* ================= STATE ================= */
let currentUser=null;
let isMember=false;
let unsub=null;
let lastSentAt=0;

const SPACE_ID="europe";
const ROOM_ID="general";
const COOLDOWN_MS=2500;

/* ================= AVATARS ================= */
const avatarCache=new Map();
async function getAvatar(uid){
  if(!uid) return null;
  if(avatarCache.has(uid)) return avatarCache.get(uid);
  try{
    const s=await getDoc(doc(db,"users",uid));
    const p=s.exists()?s.data().photoURL||null:null;
    avatarCache.set(uid,p); return p;
  }catch{ return null; }
}

async function renderMessage(m){
  const row=document.createElement("div");
  row.className="msgRow"+(m.uid===currentUser.uid?" meRow":"");
  const photo=m.photoURL||await getAvatar(m.uid);
  row.innerHTML=`
    ${photo
      ? `<img class="avatar" src="${photo}" referrerpolicy="no-referrer">`
      : `<div class="avatar fallback">${esc((m.displayName||"?")[0])}</div>`
    }
    <div class="bubble">
      <div class="meta"><span class="name">${esc(m.displayName||"USER")}</span></div>
      <div class="text">${esc(m.text||"")}</div>
    </div>`;
  messagesEl.appendChild(row);
}

/* ================= MEMBERSHIP ================= */
async function checkMembership(){
  const s=await getDoc(doc(db,"spaces",SPACE_ID,"members",currentUser.uid));
  return s.exists();
}
async function joinWithInvite(code){
  if(!currentUser) return addSystem("AUTH_REQUIRED");
  code=(code||"").trim().toUpperCase();
  if(!code) return addSystem("INVITE_CODE_REQUIRED");

  try{
    const inv=await getDoc(doc(db,"invites",code));
    if(!inv.exists()) return addSystem("INVITE_INVALID");
    const memRef=doc(db,"spaces",inv.data().spaceId,"members",currentUser.uid);
    if((await getDoc(memRef)).exists()){
      isMember=true; startListener(); return;
    }
    await setDoc(memRef,{
      role:"member",
      joinedAt:serverTimestamp(),
      displayName:currentUser.name
    });
    isMember=true; startListener();
  }catch(e){ addSystem("INVITE_FAILED"); }
}

/* ================= LISTENER ================= */
function startListener(){
  if(unsub) unsub();
  clearMessages();
  const q=query(
    collection(db,"spaces",SPACE_ID,"rooms",ROOM_ID,"messages"),
    orderBy("createdAt"),limit(150)
  );
  unsub=onSnapshot(q,async snap=>{
    clearMessages();
    for(const d of snap.docs) await renderMessage(d.data());
    messagesEl.scrollTop=messagesEl.scrollHeight;
  });
}

/* ================= IA ================= */
const AI_ENDPOINT="https://aireply-mtjtt4jn5q-uc.a.run.app";

async function callAI(prompt){
  try{
    await fetch(AI_ENDPOINT,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({
        spaceId:SPACE_ID,
        roomId:ROOM_ID,
        uid:currentUser.uid,
        displayName:currentUser.name,
        photoURL:currentUser.photoURL||null,
        prompt
      })
    });
  }catch{ addSystem("AI_FAILED"); }
}

/* ================= SEND ================= */
async function sendMessage(){
  const text=msgInput.value.trim();
  if(!text||!currentUser) return;

  const now=Date.now();
  if(now-lastSentAt<COOLDOWN_MS) return;
  lastSentAt=now;

  const isAI=text.toLowerCase().startsWith("@ia ")||text.toLowerCase().startsWith("@ai ");
  if(isAI){
    if(!isMember) return addSystem("INVITE_REQUIRED");
    const prompt=text.slice(4).trim();
    await addDoc(collection(db,"spaces",SPACE_ID,"rooms",ROOM_ID,"messages"),{
      uid:currentUser.uid,
      displayName:currentUser.name,
      photoURL:currentUser.photoURL||null,
      text:`@IA: ${prompt}`,
      createdAt:serverTimestamp()
    });
    msgInput.value="";
    addSystem("AI_THINKING");
    callAI(prompt);
    return;
  }

  if(!isMember) return addSystem("INVITE_REQUIRED");
  await addDoc(collection(db,"spaces",SPACE_ID,"rooms",ROOM_ID,"messages"),{
    uid:currentUser.uid,
    displayName:currentUser.name,
    photoURL:currentUser.photoURL||null,
    text:text.slice(0,300),
    createdAt:serverTimestamp()
  });
  msgInput.value="";
}

/* ================= EVENTS ================= */
btnLogin.onclick=()=>loginGoogle();
btnLogout.onclick=()=>logout();
sendBtn.onclick=sendMessage;
msgInput.onkeydown=e=>e.key==="Enter"&&sendMessage();
joinBtn&& (joinBtn.onclick=()=>joinWithInvite(inviteCode.value));

setInterval(()=>clockEl&&(clockEl.textContent=nowStamp()),250);

/* ================= AUTH ================= */
watchAuth(async u=>{
  if(!u){
    currentUser=null; isMember=false;
    clearMessages(); setTerminal("offline");
    return;
  }
  currentUser={
    uid:u.uid,
    name:(u.displayName||"USER").toUpperCase(),
    photoURL:u.photoURL||null
  };
  userTag.textContent=currentUser.name;
  isMember=await checkMembership();
  isMember?startListener():addSystem("INVITE_REQUIRED");
});