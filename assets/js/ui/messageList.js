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

    // Gestion du bouton "nouveaux messages"
    if (this.root && this.newMsgBtn) {
      this.newMsgBtn.style.display = "none";
      this.root.addEventListener("scroll", () => {
        const nearBottom = this.isNearBottom();
        this.newMsgBtn.style.display = nearBottom ? "none" : "inline-flex";
      });
    }
  }

  /**
   * Retourne la liste des noeuds messages (exclut SYSTEM et typing).
   * Utile pour insérer / déplacer selon l'index Firestore.
   */
  _messageNodes() {
    return Array.from(
      this.root.querySelectorAll(".msgRow:not(.typingRow)")
    );
  }

  /**
   * Insère un noeud message à la position voulue (index relatif aux .msgRow).
   * Conserve l'ordre en évitant d'écraser les nodes system / typing.
   */
  _insertAt(node, index = null) {
    const nodes = this._messageNodes();
    const i =
      typeof index === "number" && index >= 0 ? index : nodes.length;

    // Typing indicator doit rester en bas
    const typing =
      this.typingNode && this.typingNode.isConnected
        ? this.typingNode
        : null;

    if (i >= nodes.length) {
      if (typing) {
        this.root.insertBefore(node, typing);
      } else {
        this.root.appendChild(node);
      }
      return;
    }

    // Insérer avant le i-eme message
    this.root.insertBefore(node, nodes[i]);
  }

  /**
   * Auto-scroll helpers
   */
  scrollToBottom() {
    if (!this.root) return;
    this.root.scrollTop = this.root.scrollHeight;
  }

  isNearBottom(threshold = 120) {
    if (!this.root) return true;
    const { scrollTop, scrollHeight, clientHeight } = this.root;
    return scrollHeight - (scrollTop + clientHeight) < threshold;
  }

  /**
   * Crée un noeud message (DOM) sans l'insérer.
   */
  _buildMessageNode({
    id,
    uid,
    displayName,
    text,
    photoURL,
    imageURL,
    reactions,
    meUid,
  }) {
    const row = document.createElement("div");
    const me = uid && meUid && uid === meUid;
    const isAI =
      uid === "AI_BOT" ||
      String(displayName || "").toUpperCase() === "IA";
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
    if (isAI) finalPhoto = "./assets/img/photoia.png";

    const avatarHTML = finalPhoto
      ? `<img src="${esc(finalPhoto)}" alt="" class="avatar" />`
      : `<div class="avatar fallback">${esc(
          (displayName || "U")[0].toUpperCase()
        )}</div>`;

    const name = esc(displayName || "USER");

    const badge = isAI
      ? `<span class="badge system">IA</span>`
      : isKey
      ? `<span class="badge">KEYMASTER</span>`
      : "";

    const safeText = esc(text || "");

    const imgHTML = imageURL
      ? `<div class="media"><img src="${esc(
          imageURL
        )}" class="msgImage" alt="Image envoyée" loading="lazy"></div>`
      : "";

    // Reactions chips
    const reactionChips = this._buildReactionChips(reactions, meUid, id);
    row.innerHTML = `
      ${avatarHTML}
      <div class="bubble">
        <div class="meta">
          <span class="name">${name}</span>
          ${badge}
        </div>
        <div class="text">${safeText}</div>
        ${imgHTML}
        ${reactionChips}
        <div class="msgActions">
          ${
            this.onReact
              ? `<button class="iconBtn reactToggle" type="button" aria-label="Réagir">😊</button>`
              : ""
          }
          ${
            this.onDelete
              ? `<button class="iconBtn danger deleteMsg" type="button" aria-label="Supprimer">✕</button>`
              : ""
          }
        </div>
        ${
          this.onReact
            ? `<div class="reactionBar">
                 <button class="reactBtn" data-emoji="👍">👍</button>
                 <button class="reactBtn" data-emoji="🔥">🔥</button>
                 <button class="reactBtn" data-emoji="💡">💡</button>
                 <button class="reactBtn" data-emoji="❤️">❤️</button>
               </div>`
            : ""
        }
      </div>
    `;

    // Hooks boutons
    if (this.onDelete) {
      const btn = row.querySelector(".deleteMsg");
      if (btn) {
        btn.addEventListener("click", () => {
          this.onDelete({ id });
        });
      }
    }

    if (this.onReact) {
      const toggle = row.querySelector(".reactToggle");
      const bar = row.querySelector(".reactionBar");

      if (toggle && bar) {
        toggle.addEventListener("click", () => {
          const isOpen = bar.style.opacity === "1";
          bar.style.opacity = isOpen ? "0" : "1";
          bar.style.pointerEvents = isOpen ? "none" : "auto";
          bar.style.transform = isOpen ? "translateY(6px)" : "translateY(0)";
        });

        bar.querySelectorAll(".reactBtn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const emoji = btn.dataset.emoji;
            if (!emoji) return;
            this.onReact({ id, emoji });
          });
        });
      }
    }

    return row;
  }

  _buildReactionChips(reactions = {}, meUid, msgId) {
    const entries = Object.entries(reactions);
    if (!entries.length) return `<div class="reactionChips"></div>`;

    const chips = entries
      .map(([emoji, users]) => {
        const count = Array.isArray(users) ? users.length : 0;
        if (!count) return "";
        const mine = meUid && Array.isArray(users) && users.includes(meUid);
        const cls = mine ? "chip mine" : "chip";
        return `<span class="${cls}" data-emoji="${esc(
          emoji
        )}" data-msgid="${esc(msgId)}">${esc(emoji)} <span>${count}</span></span>`;
      })
      .filter(Boolean)
      .join("");

    return `<div class="reactionChips" style="display:flex;">${chips}</div>`;
  }

  addSystem(text) {
    if (!this.root) return;
    const div = document.createElement("div");
    div.className = "msg sys";
    div.textContent = text;
    this.root.appendChild(div);
    this.scrollToBottom();
  }

  clear() {
    if (!this.root) return;
    this.root.innerHTML = "";
    this.rendered.clear();
    this.nodes.clear();
    this.typingNode = null;
    this.firstRender = true;
  }

  removeMessage(id) {
    const node = this.nodes.get(id);
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
    this.nodes.delete(id);
    this.rendered.delete(id);
  }
  upsertMessage(payload, newIndex = null) {
    if (!this.root) return;

    const { id } = payload;
    if (!id) return;

    const shouldStick = this.isNearBottom();

    let node = this.nodes.get(id);
    if (!node) {
      node = this._buildMessageNode(payload);
      this.nodes.set(id, node);
      this._insertAt(node, newIndex);
    } else {
      const newNode = this._buildMessageNode(payload);
      this.nodes.set(id, newNode);
      this.root.replaceChild(newNode, node);
      node = newNode;
      if (typeof newIndex === "number") {
        this._insertAt(node, newIndex);
      }
    }

    this.rendered.add(id);

    // Auto-scroll si l'utilisateur était en bas
    if (shouldStick || this.firstRender) {
      this.scrollToBottom();
    }

    this.firstRender = false;
  }

  showTyping(label = "IA") {
    if (!this.root) return;
    if (this.typingNode && this.typingNode.isConnected) return;

    const row = document.createElement("div");
    row.className = "msgRow typingRow";
    row.innerHTML = `
      <div class="avatar fallback">…</div>
      <div class="bubble">
        <div class="meta">
          <span class="name">${esc(label)}</span>
          <span class="badge system">typing</span>
        </div>
        <div class="typingDots">
          <i></i><i></i><i></i>
        </div>
      </div>
    `;
    this.typingNode = row;
    this.root.appendChild(row);
    this.scrollToBottom();
  }

  hideTyping() {
    if (this.typingNode && this.typingNode.parentNode) {
      this.typingNode.parentNode.removeChild(this.typingNode);
    }
    this.typingNode = null;
  }

  scrollIntoView(id) {
    const node = this.nodes.get(id);
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
