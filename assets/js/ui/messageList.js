// js/ui/messageList.js
import { esc } from "../core/utils.js";

export class MessageList {
  constructor({ root, newMsgBtn, onDelete, onReact }) {
    this.root = root;
    this.newMsgBtn = newMsgBtn || null;
    this.onDelete = typeof onDelete === "function" ? onDelete : null;
    this.onReact = typeof onReact === "function" ? onReact : null;
    this.rendered = new Set();
    this.nodes = new Map();
    this.firstRender = true;

    // UI state
    this.typingNode = null;
  }

  clear() {
    this.root.innerHTML = "";
    this.rendered.clear();
    this.nodes.clear();
    this.firstRender = true;
  }

  removeMessage(id) {
    if (!id) return;
    const n = this.nodes.get(id);
    if (n && n.parentNode) n.parentNode.removeChild(n);
    this.nodes.delete(id);
    this.rendered.delete(id);
  }

  updateMessage(id, patch = {}) {
    // Pour l'instant : si ça change on re-render en simple
    // (peu utilisé, mais utile si on masque un message).
    const n = this.nodes.get(id);
    if (!n) return;
    const textEl = n.querySelector(".text");
    if (textEl && typeof patch.text === "string") textEl.textContent = patch.text;

    // Live reactions update (Firestore)
    if (patch.reactions) {
      this._renderReactions(n, patch.reactions, patch.meUid);
    }
  }

  _renderReactions(rowNode, reactions = {}, meUid = null) {
    const chips = rowNode?.querySelector(".reactionChips");
    if (!chips) return;

    // reactions: { like: [uid], love:[uid], laugh:[uid] }
    const map = {
      like: "👍",
      love: "❤️",
      laugh: "😂",
    };

    const items = [];
    for (const [key, emoji] of Object.entries(map)) {
      const arr = Array.isArray(reactions?.[key]) ? reactions[key] : [];
      if (arr.length) items.push({ key, emoji, count: arr.length, mine: !!(meUid && arr.includes(meUid)) });
    }

    chips.innerHTML = "";
    if (!items.length) {
      chips.style.display = "none";
      return;
    }
    chips.style.display = "flex";

    for (const it of items) {
      const el = document.createElement("span");
      el.className = "chip" + (it.mine ? " mine" : "");
      el.textContent = `${it.emoji} ${it.count}`;
      chips.appendChild(el);
    }

    // Highlight active buttons
    rowNode.querySelectorAll(".reactBtn").forEach((b) => {
      const em = b.getAttribute("data-react");
      const key = em === "👍" ? "like" : em === "❤️" ? "love" : em === "😂" ? "laugh" : null;
      if (!key) return;
      const arr = Array.isArray(reactions?.[key]) ? reactions[key] : [];
      b.classList.toggle("active", !!(meUid && arr.includes(meUid)));
    });
  }

  isNearBottom() {
    const el = this.root;
    if (!el) return true;
    if (el.scrollHeight <= el.clientHeight + 4) return true;
    const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
    return dist < 80;
  }

  scrollToBottom() {
    const el = this.root;
    el.scrollTop = el.scrollHeight;
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

  showTyping(label = "IA") {
    // Avoid duplicates
    if (this.typingNode && this.typingNode.isConnected) return;

    const row = document.createElement("div");
    row.className = "msgRow iaRow typingRow popIn";

    // Keep avatar path relative to the HTML entry (static hosting friendly)
    const avatarHTML = `<img class="avatar" src="./assets/img/photoia.png" referrerpolicy="no-referrer">`;

    row.innerHTML = `
      ${avatarHTML}
      <div class="bubble">
        <div class="meta">
          <span class="name">${esc(label)}</span>
          <span class="badge">🤖 IA</span>
        </div>
        <div class="typingDots" aria-label="En train d'écrire">
          <i></i><i></i><i></i>
        </div>
      </div>
    `;

    this.root.appendChild(row);
    this.typingNode = row;
    this.scrollToBottom();
  }

  hideTyping() {
    if (!this.typingNode) return;
    try {
      this.typingNode.remove();
    } catch {}
    this.typingNode = null;
  }

  async appendMessage({
    id,
    uid,
    displayName,
    text,
    photoURL,
    imageURL,
    reactions,
    meUid,
  }) {
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

    row.classList.add("popIn");

    row.dataset.msgId = id;

    // Avatar (IA utilise une image fixe)
    let finalPhoto = photoURL || null;
    if (isAI) {
      finalPhoto = "./assets/img/photoia.png";
    }

    const avatarHTML = finalPhoto
      ? `<img class="avatar" src="${finalPhoto}" referrerpolicy="no-referrer">`
      : `<div class="avatar fallback">${esc(
          (displayName?.[0] || "?").toUpperCase()
        )}</div>`;

    const hasText = (text || "").trim().length > 0;
    const imgHtml = imageURL
      ? `<div class="media"><img class="msgImage" src="${esc(
          imageURL
        )}" loading="lazy"></div>`
      : "";

    const actionsHtml =
      me && this.onDelete
        ? `
          <div class="msgActions">
            <button class="iconBtn danger" data-action="delete" title="Supprimer">🗑️</button>
          </div>
        `
        : "";

    // Reactions (synced)
    const reactionBar = `
      <div class="reactionBar" aria-hidden="true">
        <button class="reactBtn" data-react="👍" title="Réagir : 👍">👍</button>
        <button class="reactBtn" data-react="❤️" title="Réagir : ❤️">❤️</button>
        <button class="reactBtn" data-react="😂" title="Réagir : 😂">😂</button>
      </div>
      <div class="reactionChips" aria-hidden="true"></div>
    `;

    row.innerHTML = `
      ${avatarHTML}
      <div class="bubble">
        ${actionsHtml}
        ${reactionBar}
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
        ${hasText ? `<div class="text">${esc(text || "")}</div>` : ""}
        ${imgHtml}
      </div>
    `;

    // Actions
    if (me && this.onDelete) {
      const del = row.querySelector('[data-action="delete"]');
      del?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.onDelete({ id, uid, displayName, text, imageURL });
      });
    }

    // Reaction handlers -> Firestore
    row.querySelectorAll(".reactBtn").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const em = b.getAttribute("data-react");
        if (!em) return;
        if (this.onReact) this.onReact({ id, emoji: em });
      });
    });

    // First render reactions from Firestore state
    this._renderReactions(row, reactions || {}, meUid);

    this.root.appendChild(row);
    this.nodes.set(id, row);

    // Premier rendu : on descend tout en bas
    if (this.firstRender) {
      this.firstRender = false;
      this.scrollToBottom();
      return;
    }

    if (wasAtBottom) {
      this.scrollToBottom();
    } else {
      this.showNewMsgBtn();
    }
  }
}
