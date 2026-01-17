// js/ui/messageList.js

import { esc } from "../core/utils.js";

export class MessageList {
  constructor({ root, newMsgBtn }) {
    this.root = root;
    this.newMsgBtn = newMsgBtn || null;
    this.rendered = new Set();
    this.avatarCache = new Map();
  }

  clear() {
    this.root.innerHTML = "";
    this.rendered.clear();
  }

  isNearBottom() {
    const el = this.root;
    const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
    return dist < 80;
  }

  scrollToBottom() {
    this.root.scrollTop = this.root.scrollHeight;
    if (this.newMsgBtn) this.newMsgBtn.style.display = "none";
  }

  showNewMsgBtn() {
    if (!this.newMsgBtn) return;
    this.newMsgBtn.style.display = "inline-block";
  }

  addSystem(text) {
    const div = document.createElement("div");
    div.className = "msg sys";
    div.innerHTML = `<span class="system">[SYSTEM]</span> ${esc(text)}`;
    this.root.appendChild(div);
    this.scrollToBottom();
  }

  async appendMessage({ id, uid, displayName, text, photoURL, meUid }) {
    if (!id) return;
    if (this.rendered.has(id)) return;
    this.rendered.add(id);

    const wasAtBottom = this.isNearBottom();

    const row = document.createElement("div");
    const me = uid && meUid && uid === meUid;
    const isAI =
      uid === "AI_BOT" || String(displayName || "").toUpperCase() === "IA";
    const isKey =
      uid === "KEYMASTER" ||
      String(displayName || "").toUpperCase() === "KEYMASTER";

    row.className =
      "msgRow" +
      (me ? " meRow" : "") +
      (isAI ? " iaRow" : "") +
      (isKey ? " keyRow" : "");

    // Avatar : IA utilise toujours photoia.png
let finalPhoto = photoURL || null;
if (isAI) {
  finalPhoto = "https://lycee-europe.com/photoia.png";
}


    const avatarHTML = finalPhoto
      ? `<img class="avatar" src="${finalPhoto}" referrerpolicy="no-referrer">`
      : `<div class="avatar fallback">${esc(
          (displayName?.[0] || "?").toUpperCase()
        )}</div>`;

    row.innerHTML = `
      ${avatarHTML}
      <div class="bubble">
        <div class="meta">
          <span class="name">${esc(displayName || "USER")}</span>
          ${
            isAI
              ? `<span class="badge">🤖 IA</span>`
              : isKey
              ? `<span class="badge">🔑 KEY</span>`
              : ""
          }
        </div>
        <div class="text">${esc(text || "")}</div>
      </div>
    `;

    this.root.appendChild(row);

    if (wasAtBottom) this.scrollToBottom();
    else this.showNewMsgBtn();
  }
}
