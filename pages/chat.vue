<template>
  <div class="chat-app" v-if="currentUser">

    <!-- Toast notification (Commandes secrètes & modération) -->
    <Transition name="slide-down">
      <div v-if="toastMsg" class="admin-toast glass-heavy">
        <span class="admin-toast-icon">👑</span>
        <span class="admin-toast-text">{{ toastMsg }}</span>
        <button class="admin-toast-close" @click="toastMsg = ''">✕</button>
      </div>
    </Transition>

    <!-- ══ SIDEBAR ═══════════════════════════════════════════ -->
    <aside class="sidebar" :class="{ open: sidebarOpen }">

      <!-- Header sidebar -->
      <div class="sidebar-header">
        <NuxtLink to="/" class="sidebar-logo">
          <div class="sidebar-logo-icon">🎓</div>
          <div>
            <div class="sidebar-logo-text">Lycée Europe</div>
            <div class="sidebar-logo-sub">Chat ∙ Communauté</div>
          </div>
        </NuxtLink>
        <button class="mobile-close-btn" @click="sidebarOpen = false">✕</button>
      </div>

      <!-- Profil utilisateur -->
      <div class="user-profile">
        <div class="user-avatar-wrapper">
          <div class="user-avatar" :style="`background: ${userColor}`">
            {{ userInitials }}
          </div>
          <div class="status-dot"></div>
        </div>
        <div class="user-info">
          <div class="user-name">
            {{ currentUser.displayName || 'Anonyme' }}
            <span v-if="isAdmin" class="admin-badge-gold" title="Super Admin Actif">👑 ADMIN</span>
          </div>
          <div class="user-email">{{ currentUser.email }}</div>
        </div>
        <button class="settings-btn" @click="showSettings = !showSettings" title="Paramètres">⚙</button>
      </div>

      <!-- Recherche -->
      <div class="sidebar-search">
        <div class="input-wrapper">
          <span class="input-icon">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            class="input-field"
            placeholder="Rechercher un salon..."
          />
        </div>
      </div>

      <!-- Liste des 3 salons -->
      <div class="rooms-section">
        <div class="rooms-category">
          <span class="category-label">Salons officiels (3)</span>
        </div>
        <button
          v-for="room in filteredRooms"
          :key="room.id"
          class="room-btn"
          :class="{ active: currentRoom === room.id }"
          @click="joinRoom(room)"
        >
          <span class="room-icon">{{ room.icon }}</span>
          <div class="room-info">
            <span class="room-name"># {{ room.name }}</span>
            <span class="room-desc">{{ room.desc }}</span>
          </div>
          <span v-if="room.unread" class="room-unread">{{ room.unread }}</span>
        </button>
      </div>

      <!-- Déconnexion -->
      <div class="sidebar-footer">
        <button class="logout-btn" @click="handleLogout">
          <span>🚪</span> Se déconnecter
        </button>
      </div>
    </aside>

    <!-- ══ ZONE PRINCIPALE ════════════════════════════════════ -->
    <main class="chat-main">

      <!-- Header du chat -->
      <div class="chat-header glass">
        <!-- Mobile menu -->
        <button class="mobile-menu-btn" @click="sidebarOpen = true">☰</button>

        <div class="chat-header-info">
          <div class="ch-room-icon">{{ activeRoom?.icon || '💬' }}</div>
          <div>
            <h2 class="ch-room-name"># {{ activeRoom?.name || 'général' }}</h2>
            <p class="ch-room-desc">{{ activeRoom?.desc || '' }} ∙ {{ onlineCount }} en ligne</p>
          </div>
        </div>

        <div class="chat-header-actions">
          <button class="icon-btn" title="Rechercher" @click="showSearch = !showSearch" data-tooltip="Rechercher dans ce salon">🔍</button>
          <button class="icon-btn" title="Membres" @click="showMembers = !showMembers" data-tooltip="Membres en ligne">👥</button>
          <div class="online-pill">
            <span class="status-dot" style="width:6px;height:6px;"></span>
            {{ onlineCount }} en ligne
            <span v-if="isAdmin" class="admin-pill-badge" title="Mode Admin Actif">👑 Admin</span>
          </div>
        </div>
      </div>

      <!-- Barre de recherche dans les messages -->
      <Transition name="slide-down">
        <div v-if="showSearch" class="msg-search-bar glass">
          <div class="input-wrapper">
            <span class="input-icon">🔍</span>
            <input v-model="msgSearch" class="input-field" placeholder="Rechercher dans les messages..." />
          </div>
          <button @click="showSearch = false; msgSearch = ''" class="btn btn-glass btn-sm">✕</button>
        </div>
      </Transition>

      <!-- Zone messages -->
      <div class="messages-area" ref="messagesArea" @scroll="handleScroll">

        <!-- Welcome banner -->
        <div class="welcome-banner">
          <div class="wb-icon">{{ activeRoom?.icon || '💬' }}</div>
          <h3 class="wb-title">Bienvenue dans #{{ activeRoom?.name || 'général' }}</h3>
          <p class="wb-desc">{{ activeRoom?.desc || 'Discutez avec votre communauté.' }}</p>
          <div class="wb-divider">
            <span class="wb-divider-text">Début du salon ∙ {{ todayDate }}</span>
          </div>
        </div>

        <!-- Groupe de messages -->
        <template v-for="(group, gi) in groupedMessages" :key="gi">
          <!-- Séparateur de date -->
          <div class="date-separator" v-if="group.showDate">
            <span class="ds-line"></span>
            <span class="ds-text">{{ group.date }}</span>
            <span class="ds-line"></span>
          </div>

          <!-- Message -->
          <div
            class="msg-group"
            :class="{
              'msg-mine': group.isOwn,
              'anim-fade-up': true,
              highlighted: msgSearch && group.messages.some(m => m.text.toLowerCase().includes(msgSearch.toLowerCase()))
            }"
          >
            <div v-if="!group.isOwn" class="msg-avatar" :style="`background: ${group.color}`">
              {{ group.initials }}
            </div>
            <div class="msg-content">
              <div class="msg-header" v-if="!group.isOwn">
                <span class="msg-author">{{ group.author }}</span>
                <span v-if="group.isAdmin" class="admin-badge-gold">👑 ADMIN</span>
                <span class="msg-time">{{ group.time }}</span>
              </div>
              <div
                v-for="(msg, mi) in group.messages"
                :key="msg.id"
                class="msg-bubble"
                :class="{ mine: group.isOwn }"
                @mouseenter="hoveredMsg = msg.id"
                @mouseleave="hoveredMsg = null"
              >
                <!-- Image si partagée -->
                <img v-if="msg.imageUrl" :src="msg.imageUrl" class="msg-image" @click="openLightbox(msg.imageUrl)" />
                <!-- Fichier joint (document, archive, etc.) -->
                <a
                  v-else-if="msg.fileUrl"
                  :href="msg.fileUrl"
                  target="_blank"
                  :download="msg.fileName || 'fichier'"
                  class="msg-file-attachment"
                >
                  <span class="file-icon-badge">📄</span>
                  <div class="file-info">
                    <span class="file-name">{{ msg.fileName || 'Fichier joint' }}</span>
                    <span class="file-size">{{ formatFileSize(msg.fileSize) }}</span>
                  </div>
                  <span class="file-download-btn" title="Télécharger">⬇</span>
                </a>
                <!-- Texte -->
                <span v-if="msg.text" v-html="formatMessage(msg.text, msgSearch)"></span>
                <!-- Timestamp sur mine -->
                <span v-if="group.isOwn && mi === group.messages.length - 1" class="msg-time-mine">
                  <span v-if="isAdmin" class="admin-badge-gold" style="margin-right:4px;">👑 ADMIN</span>
                  {{ group.time }}
                </span>

                <!-- Actions au hover -->
                <Transition name="fade-fast">
                  <div v-if="hoveredMsg === msg.id" class="msg-actions">
                    <button v-for="emoji in quickReactions" :key="emoji" class="reaction-btn" @click="addReaction(msg, emoji)" :title="emoji">{{ emoji }}</button>
                    <button v-if="group.isOwn || isAdmin" class="reaction-btn danger" @click="deleteMessage(msg)" :title="isAdmin && !group.isOwn ? '👑 Modération Admin : Supprimer ce message' : 'Supprimer'">🗑</button>
                  </div>
                </Transition>

                <!-- Réactions -->
                <div v-if="msg.reactions && Object.keys(msg.reactions).length" class="msg-reactions">
                  <button
                    v-for="(count, emoji) in msg.reactions"
                    :key="emoji"
                    class="reaction-pill"
                    :class="{ active: hasReacted(msg, emoji) }"
                    @click="addReaction(msg, emoji)"
                  >{{ emoji }} {{ count }}</button>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Ancre scroll -->
        <div ref="messagesBottom"></div>
      </div>

      <!-- Bouton scroll to bottom -->
      <Transition name="scale-up">
        <button v-if="showScrollBtn" class="scroll-bottom-btn" @click="scrollToBottom">
          ↓ <span v-if="newMessagesCount > 0">{{ newMessagesCount }} nouveau{{ newMessagesCount > 1 ? 'x' : '' }}</span>
        </button>
      </Transition>

      <!-- ══ BARRE D'ENVOI ════════════════════════════════════ -->
      <div class="input-area glass">

        <!-- Barre d'outils -->
        <div class="input-toolbar">
          <button class="tool-btn" @click="triggerFileUpload" title="Image">📎</button>
          <button class="tool-btn" @click="showEmojiPicker = !showEmojiPicker" title="Emoji">😄</button>
          <button class="tool-btn" @click="insertFormat('**')" title="Gras">𝐁</button>
          <button class="tool-btn" @click="insertFormat('_')" title="Italique">𝐼</button>
          <button class="tool-btn" @click="insertFormat('`')" title="Code">〈/〉</button>
        </div>

        <!-- Emoji picker -->
        <Transition name="scale-up">
          <div v-if="showEmojiPicker" class="emoji-picker glass-heavy">
            <div class="ep-tabs">
              <button v-for="cat in emojiCategories" :key="cat.name" class="ep-tab" :class="{ active: activeEmojiCat === cat.name }" @click="activeEmojiCat = cat.name">
                {{ cat.icon }}
              </button>
            </div>
            <div class="ep-grid">
              <button
                v-for="emoji in currentEmojis"
                :key="emoji"
                class="ep-emoji"
                @click="insertEmoji(emoji)"
              >{{ emoji }}</button>
            </div>
          </div>
        </Transition>

        <!-- Prévisualisation du fichier sélectionné -->
        <div v-if="selectedFile" class="file-preview-bar">
          <div class="file-preview-card">
            <img v-if="filePreviewUrl" :src="filePreviewUrl" class="file-preview-thumb" />
            <span v-else class="file-preview-icon">📎</span>
            <div class="file-preview-details">
              <span class="file-preview-name">{{ selectedFile.name }}</span>
              <span class="file-preview-size">{{ formatFileSize(selectedFile.size) }}</span>
            </div>
            <button class="file-preview-remove" @click="clearSelectedFile" title="Retirer le fichier">✕</button>
          </div>
        </div>

        <!-- Input principal -->
        <div class="main-input-row">
          <div class="user-avatar-small" :style="`background: ${userColor}`">{{ userInitials }}</div>
          <div class="input-box-wrap">
            <textarea
              ref="messageInput"
              v-model="newMessage"
              class="message-textarea"
              :placeholder="`Message dans #${activeRoom?.name || 'général'}…`"
              @keydown.enter.exact.prevent="sendMessage"
              @keydown.enter.shift.exact="newMessage += '\n'"
              @input="handleTyping"
              rows="1"
            ></textarea>
            <input ref="fileInput" type="file" style="display:none" @change="onFileSelected" />
          </div>
          <button
            class="send-btn"
            :class="{ active: newMessage.trim() || selectedFile }"
            @click="sendMessage"
            :disabled="(!newMessage.trim() && !selectedFile) || isSending"
            title="Envoyer"
          >
            <span v-if="isSending" class="spinner" style="width:16px;height:16px;border-width:2px;"></span>
            <span v-else>➤</span>
          </button>
        </div>

        <!-- Hint -->
        <div class="input-hint">
          <span>Entrée pour envoyer</span>
          <span>Maj+Entrée pour nouvelle ligne</span>
        </div>
      </div>
    </main>

    <!-- ══ PANNEAU MEMBRES ════════════════════════════════════ -->
    <Transition name="slide-left">
      <aside class="members-panel glass" v-if="showMembers">
        <div class="mp-header">
          <h3>Membres en ligne ({{ onlineCount }})</h3>
          <button class="icon-btn" @click="showMembers = false">✕</button>
        </div>
        <div class="mp-list">
          <div v-for="m in onlineMembers" :key="m.uid" class="mp-member">
            <div class="mp-avatar" :style="`background: ${m.color || stringToColor(m.uid || '1')}`">
              {{ getMemberInitials(m) }}
            </div>
            <div>
              <div class="mp-name">{{ m.name || m.email || 'Utilisateur' }}</div>
              <div class="mp-status">En ligne</div>
            </div>
            <div class="status-dot" style="margin-left: auto;"></div>
          </div>
        </div>
      </aside>
    </Transition>

    <!-- ══ LIGHTBOX ════════════════════════════════════════════ -->
    <Transition name="fade-fast">
      <div v-if="lightboxUrl" class="lightbox" @click="lightboxUrl = null">
        <img :src="lightboxUrl" class="lightbox-img" @click.stop />
        <button class="lightbox-close" @click="lightboxUrl = null">✕</button>
      </div>
    </Transition>

    <!-- ══ SETTINGS MODAL ═════════════════════════════════════ -->
    <Transition name="scale-up">
      <div v-if="showSettings" class="settings-modal glass-heavy" @click.self="showSettings = false">
        <div class="settings-inner">
          <h3 class="settings-title">⚙ Paramètres</h3>
          <div class="settings-section">
            <label class="settings-label">Couleur de profil</label>
            <div class="color-picker">
              <button
                v-for="c in profileColors"
                :key="c"
                class="color-swatch"
                :style="`background: ${c}`"
                :class="{ selected: userColor === c }"
                @click="userColor = c"
              ></button>
            </div>
          </div>
          <div class="settings-section">
            <label class="settings-label">Notifications sonores</label>
            <label class="toggle-switch">
              <input type="checkbox" v-model="soundEnabled" />
              <span class="toggle-track"></span>
            </label>
          </div>
          <button class="btn btn-primary btn-sm" style="margin-top: 16px;" @click="showSettings = false">Fermer</button>
        </div>
      </div>
    </Transition>

  </div>

  <!-- ══ REDIRECT SI NON CONNECTÉ ══════════════════════════════ -->
  <div v-else class="loading-screen">
    <div class="loading-spinner"></div>
    <p>Vérification de votre session…</p>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch, onMounted, onUnmounted, nextTick } from 'vue'
import {
  getAuth, onAuthStateChanged, signOut
} from 'firebase/auth'
import {
  getFirestore, collection, addDoc, query, orderBy,
  onSnapshot, serverTimestamp, doc, deleteDoc,
  updateDoc, getDoc, setDoc, limit
} from 'firebase/firestore'
import {
  getStorage, ref as storageRef, uploadBytes, getDownloadURL
} from 'firebase/storage'

useHead({ title: 'Chat' })

const { $firebase } = useNuxtApp()

// ── State ─────────────────────────────────────────────────────
const currentUser   = ref(null)
const messages      = ref([])
const newMessage    = ref('')
const currentRoom   = ref('general')
const sidebarOpen   = ref(false)
const showMembers   = ref(false)
const showSearch    = ref(false)
const showSettings  = ref(false)
const showEmojiPicker = ref(false)
const msgSearch     = ref('')
const searchQuery   = ref('')
const hoveredMsg    = ref(null)
const isSending     = ref(false)
const lightboxUrl   = ref(null)
const showScrollBtn = ref(false)
const newMessagesCount = ref(0)
const soundEnabled  = ref(true)
const someoneTyping = ref(false)
const typingText    = ref('')
const activeEmojiCat = ref('Smileys')
const messagesArea  = ref(null)
const messagesBottom = ref(null)
const messageInput  = ref(null)
const fileInput     = ref(null)
const userColor     = ref('#7c3aed')

// ── Admin secret & Toast ──────────────────────────────────────
const isAdmin       = ref(false)
const toastMsg      = ref('')
let toastTimer      = null

function showToast(msg) {
  toastMsg.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMsg.value = ''
  }, 4500)
}

function playAdminSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const notes = [523.25, 659.25, 783.99, 1046.50]
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.09)
      gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.09)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.09 + 0.35)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(ctx.currentTime + i * 0.09)
      osc.stop(ctx.currentTime + i * 0.09 + 0.35)
    })
  } catch {}
}

const profileColors = [
  '#7c3aed', '#ec4899', '#f97316', '#3b82f6',
  '#14b8a6', '#8b5cf6', '#06b6d4', '#10b981'
]

// ── Salons (Exactement 3 salons) ──────────────────────────────
const rooms = [
  { id: 'general',  name: 'général',  icon: '📣', desc: 'Discussion générale & vie du lycée', unread: 0 },
  { id: 'entraide', name: 'entraide', icon: '📚', desc: 'Devoirs, cours & révisions', unread: 0 },
  { id: 'detente',  name: 'détente',  icon: '🎮', desc: 'Pause café & bavardages', unread: 0 },
]

const filteredRooms = computed(() => {
  if (!searchQuery.value) return rooms
  return rooms.filter(r => r.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const activeRoom = computed(() => rooms.find(r => r.id === currentRoom.value) || rooms[0])

// ── Emojis ────────────────────────────────────────────────────
const emojiCategories = [
  { name: 'Smileys', icon: '😄', emojis: ['😀','😂','🥹','😊','😍','🤩','😎','🥳','😏','🤔','😅','🫡','😴','🤯','🥸','🤗','😇','🫶','🙏','👀','💪','✌️','👍','❤️','🔥','⭐','💯','🎉','✨','💥'] },
  { name: 'Lycée', icon: '📚', emojis: ['📚','📖','✏️','📝','🖊️','📐','📏','🔬','🔭','💡','🧪','🧬','🎓','🏫','📋','📊','📈','🗒️','💻','🖥️','⌨️','🖱️','📱','⏰','📅','🗂️'] },
  { name: 'Fun', icon: '🎮', emojis: ['🎮','🎲','🎯','🎸','🎵','🎨','🏆','🥇','⚽','🏀','🎾','🎳','🎭','🎬','🎪','🎢','🎡','🎠','🚀','🌈','🦄','🐸','🦊','🐉','🌟','🌙','☀️','🌊','🏖️','🌴'] },
  { name: 'Bouffe', icon: '🍕', emojis: ['🍕','🍔','🌮','🍜','🍣','🍰','🎂','🍩','🧁','🍪','🍫','🧃','☕','🧋','🍵','🍺','🥤','🍿','🥗','🍎','🍓','🍇','🥑','🌽','🥪','🍟','🌯','🥙','🫔'] },
]

const quickReactions = ['👍','❤️','😂','🔥','😮','👏']

const currentEmojis = computed(() => {
  return emojiCategories.find(c => c.name === activeEmojiCat.value)?.emojis || []
})

// ── Gestion des fichiers ──────────────────────────────────────
const selectedFile = ref(null)
const filePreviewUrl = ref(null)

function triggerFileUpload() {
  fileInput.value?.click()
}

function onFileSelected(e) {
  const file = e.target.files?.[0]
  if (!file) return
  if (file.size > 20 * 1024 * 1024) {
    alert('Fichier trop volumineux (20 Mo maximum).')
    if (fileInput.value) fileInput.value.value = ''
    return
  }
  selectedFile.value = file
  if (file.type.startsWith('image/')) {
    filePreviewUrl.value = URL.createObjectURL(file)
  } else {
    filePreviewUrl.value = null
  }
  if (fileInput.value) fileInput.value.value = ''
}

function clearSelectedFile() {
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
  }
  selectedFile.value = null
  filePreviewUrl.value = null
}

function formatFileSize(bytes) {
  if (!bytes) return ''
  if (bytes < 1024) return bytes + ' o'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' Ko'
  return (bytes / (1024 * 1024)).toFixed(1) + ' Mo'
}

// ── Vrai nombre de membres en ligne (Multi-onglets & Multi-appareils) ───
const tabId = typeof window !== 'undefined'
  ? ('tab_' + Math.random().toString(36).substring(2, 9))
  : 'tab_init'

const localTabs = ref([])
const firestorePresences = ref([])

function getMemberInitials(m) {
  const name = m.name || m.email || '?'
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

const userInitials = computed(() => {
  const name = currentUser.value?.displayName || currentUser.value?.email || '?'
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
})

// Membres en ligne unifiés (Multi-onglets synchronisés + Firestore cross-appareils)
const onlineMembers = computed(() => {
  const list = []

  // 1. Onglets locaux (même navigateur / machine)
  const tabs = localTabs.value || []
  let ownTabCounter = 0
  tabs.forEach(t => {
    ownTabCounter++
    const isPrimary = t.id === tabId
    const tabSuffix = tabs.length > 1 ? (isPrimary ? ' (Vous)' : ` (Onglet ${ownTabCounter})`) : ''
    list.push({
      id: t.id,
      uid: t.uid,
      name: (t.name || 'Utilisateur') + tabSuffix,
      email: t.email,
      color: t.color || userColor.value,
      isLocal: true,
      isPrimary
    })
  })

  // 2. Utilisateurs distants (autres appareils / comptes depuis Firestore)
  const localUids = new Set(tabs.map(t => t.uid))
  firestorePresences.value.forEach(fp => {
    if (!localUids.has(fp.uid) && !list.some(m => m.uid === fp.uid)) {
      list.push({
        id: 'remote_' + fp.uid,
        uid: fp.uid,
        name: fp.name || fp.email || 'Utilisateur',
        email: fp.email,
        color: fp.color || stringToColor(fp.uid),
        isLocal: false
      })
    }
  })

  // Fallback de sécurité : l'utilisateur courant doit toujours être présent
  if (list.length === 0 && currentUser.value) {
    list.push({
      id: tabId,
      uid: currentUser.value.uid,
      name: currentUser.value.displayName || currentUser.value.email?.split('@')[0] || 'Utilisateur',
      email: currentUser.value.email,
      color: userColor.value,
      isLocal: true,
      isPrimary: true
    })
  }

  return list
})

const onlineCount = computed(() => onlineMembers.value.length || 1)

// ── Multi-onglets & Firebase subscriptions ──────────────────────
let unsubMessages = null
let presenceTimer = null
let tabHeartbeatTimer = null
let presenceChannel = null

function updateLocalTabsHeartbeat(user) {
  if (typeof window === 'undefined' || !user) return
  try {
    const raw = localStorage.getItem('lycee_chat_tabs')
    let tabsMap = {}
    if (raw) {
      try { tabsMap = JSON.parse(raw) } catch {}
    }
    const now = Date.now()
    // Nettoie les onglets inactifs (> 10 secondes sans ping)
    const cleaned = {}
    for (const [id, t] of Object.entries(tabsMap)) {
      if (t && t.lastSeen && (now - t.lastSeen < 10000)) {
        cleaned[id] = t
      }
    }
    // Met à jour son propre onglet
    cleaned[tabId] = {
      id: tabId,
      uid: user.uid,
      name: user.displayName || user.email?.split('@')[0] || 'Élève',
      email: user.email,
      color: userColor.value,
      lastSeen: now
    }
    localStorage.setItem('lycee_chat_tabs', JSON.stringify(cleaned))
    localTabs.value = Object.values(cleaned)
  } catch {
    localTabs.value = [{
      id: tabId,
      uid: user.uid,
      name: user.displayName || user.email?.split('@')[0] || 'Élève',
      email: user.email,
      color: userColor.value,
      lastSeen: Date.now()
    }]
  }
}

function removeLocalTab() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem('lycee_chat_tabs')
    if (raw) {
      const tabsMap = JSON.parse(raw)
      delete tabsMap[tabId]
      localStorage.setItem('lycee_chat_tabs', JSON.stringify(tabsMap))
    }
  } catch {}
}

function initPresence(user) {
  if (!user) return

  // 1. Synchronisation multi-onglets immédiate
  updateLocalTabsHeartbeat(user)
  if (tabHeartbeatTimer) clearInterval(tabHeartbeatTimer)
  tabHeartbeatTimer = setInterval(() => updateLocalTabsHeartbeat(user), 3500)

  // Écoute les changements d'onglets (storage event & BroadcastChannel)
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === 'lycee_chat_tabs' && e.newValue) {
        try {
          const map = JSON.parse(e.newValue)
          const now = Date.now()
          localTabs.value = Object.values(map).filter(t => t && (now - t.lastSeen < 10000))
        } catch {}
      }
    })

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        presenceChannel = new BroadcastChannel('lycee_chat_presence')
        presenceChannel.onmessage = (ev) => {
          if (ev.data?.type === 'HEARTBEAT' || ev.data?.type === 'JOIN' || ev.data?.type === 'LEAVE') {
            updateLocalTabsHeartbeat(user)
          }
        }
        presenceChannel.postMessage({ type: 'JOIN', id: tabId })
      } catch {}
    }

    window.addEventListener('beforeunload', () => {
      removeLocalTab()
      if (presenceChannel) {
        try { presenceChannel.postMessage({ type: 'LEAVE', id: tabId }) } catch {}
      }
      if ($firebase && user) {
        const db = getFirestore($firebase)
        deleteDoc(doc(db, 'messages', 'presence_' + user.uid)).catch(() => {})
      }
    })
  }

  // 2. Synchronisation distante via Firestore (collection messages autorisée)
  if ($firebase) {
    const db = getFirestore($firebase)
    const myPresenceRef = doc(db, 'messages', 'presence_' + user.uid)

    const sendFirestoreHeartbeat = () => {
      setDoc(myPresenceRef, {
        room: '__presence__',
        isPresence: true,
        uid: user.uid,
        name: user.displayName || user.email?.split('@')[0] || 'Utilisateur',
        email: user.email,
        color: userColor.value,
        lastSeen: Date.now(),
        createdAt: serverTimestamp()
      }, { merge: true }).catch(() => {})
    }

    sendFirestoreHeartbeat()
    if (presenceTimer) clearInterval(presenceTimer)
    presenceTimer = setInterval(sendFirestoreHeartbeat, 30000)
  }
}


// ── Messages groupés ──────────────────────────────────────────
const groupedMessages = computed(() => {
  const filtered = msgSearch.value
    ? messages.value.filter(m => (m.text || '').toLowerCase().includes(msgSearch.value.toLowerCase()) || (m.fileName || '').toLowerCase().includes(msgSearch.value.toLowerCase()))
    : messages.value

  const groups = []
  let lastAuthor = null
  let lastDate = null
  let lastGroup = null

  filtered.forEach((msg) => {
    const ts = msg.createdAt?.toDate?.() || (msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000) : new Date())
    const dateStr = formatDate(ts)
    const timeStr = formatTime(ts)
    const isOwn = msg.uid === currentUser.value?.uid
    const authorName = msg.displayName || msg.author || msg.email?.split('@')[0] || 'Anonyme'
    const initials = authorName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    const color = stringToColor(msg.uid || authorName)

    const showDate = dateStr !== lastDate
    if (showDate) lastDate = dateStr

    const sameAuthorRecent = msg.uid === lastAuthor && !showDate && lastGroup && (ts - (lastGroup.messages.at(-1)?.createdAt?.toDate?.() || new Date()) < 300000)

    if (sameAuthorRecent && lastGroup) {
      lastGroup.messages.push(msg)
    } else {
      lastGroup = {
        author: authorName,
        initials,
        color,
        isOwn,
        isAdmin: !!msg.isAdmin,
        time: timeStr,
        date: dateStr,
        showDate,
        messages: [msg],
      }
      groups.push(lastGroup)
    }
    lastAuthor = msg.uid
  })

  return groups
})

const todayDate = computed(() => new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))

// ── Auth & Lifecycle ──────────────────────────────────────────
onMounted(async () => {
  // Charge l'état admin secret sauvegardé
  const savedAdmin = localStorage.getItem('chat_admin_goofy')
  if (savedAdmin === 'true') {
    isAdmin.value = true
  }

  const auth = getAuth($firebase)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.value = user
      const savedColor = localStorage.getItem('profileColor')
      if (savedColor) userColor.value = savedColor
      initPresence(user)
      subscribeToRoom(currentRoom.value)
    } else {
      navigateTo('/login')
    }
  })
})

watch(userColor, (val) => localStorage.setItem('profileColor', val))

onUnmounted(() => {
  if (unsubMessages) unsubMessages()
  if (presenceTimer) clearInterval(presenceTimer)
  if (tabHeartbeatTimer) clearInterval(tabHeartbeatTimer)
  removeLocalTab()
  if (presenceChannel) {
    try {
      presenceChannel.postMessage({ type: 'LEAVE', id: tabId })
      presenceChannel.close()
    } catch {}
  }
  if (currentUser.value && $firebase) {
    const db = getFirestore($firebase)
    deleteDoc(doc(db, 'messages', 'presence_' + currentUser.value.uid)).catch(() => {})
  }
})

// ── Firebase Messages (collection "messages" globale avec filtre de salon & présence) ──
function subscribeToRoom(roomId) {
  if (unsubMessages) unsubMessages()
  messages.value = []

  const db = getFirestore($firebase)
  // On écoute la collection "messages" (racine autorisée par Firestore)
  const q = query(
    collection(db, "messages"),
    orderBy('createdAt', 'desc'),
    limit(150)
  )

  unsubMessages = onSnapshot(q, (snap) => {
    const prevCount = messages.value.length
    const allDocs = snap.docs.map(d => ({ id: d.id, ...d.data() }))

    // 1. Extraction des présences distantes (< 2 minutes)
    const now = Date.now()
    firestorePresences.value = allDocs
      .filter(d => (d.isPresence || d.room === '__presence__') && d.uid && (now - (d.lastSeen || 0) < 120000))
      .map(d => ({
        uid: d.uid,
        name: d.name || d.email?.split('@')[0] || 'Utilisateur',
        email: d.email,
        color: d.color,
        lastSeen: d.lastSeen
      }))

    // 2. Filtre et tri chronologique ascendant des VRAIS messages de discussion
    const realMsgs = allDocs.filter(m => !m.isPresence && m.room !== '__presence__')
    realMsgs.sort((a, b) => {
      const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt?.seconds ? a.createdAt.seconds * 1000 : 0)
      const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt?.seconds ? b.createdAt.seconds * 1000 : 0)
      return ta - tb
    })

    // Filtre pour le salon actuel (les anciens messages sans champ 'room' vont dans 'general')
    messages.value = realMsgs.filter(m => {
      const msgRoom = m.room || 'general'
      return msgRoom === currentRoom.value
    })

    if (messages.value.length > prevCount && prevCount > 0) {
      newMessagesCount.value++
      if (soundEnabled.value) playNotificationSound()
    }
    nextTick(scrollToBottom)
  }, (err) => {
    console.error('Erreur écoute messages Firestore:', err)
  })
}

async function sendMessage() {
  const text = newMessage.value.trim()
  const file = selectedFile.value

  // 👑 COMMANDE ULTRA SECRÈTE : /admingoofyahah
  if (text.toLowerCase() === '/admingoofyahah') {
    newMessage.value = ''
    isAdmin.value = !isAdmin.value
    localStorage.setItem('chat_admin_goofy', isAdmin.value ? 'true' : 'false')
    playAdminSound()
    if (isAdmin.value) {
      showToast('👑 MODE ADMIN ACTIVÉ ! Vous avez les pleins pouvoirs de modération et pouvez supprimer n\'importe quel message.')
    } else {
      showToast('🛡️ Mode Admin désactivé.')
    }
    return
  }

  // Commande admin supplémentaire : /clear pour vider l'écran localement
  if (isAdmin.value && text.toLowerCase() === '/clear') {
    newMessage.value = ''
    messages.value = []
    showToast('🧹 Messages nettoyés localement.')
    return
  }

  if ((!text && !file) || isSending.value) return

  isSending.value = true
  const db = getFirestore($firebase)

  let uploadedFileUrl = null
  let isImage = false

  try {
    if (file) {
      isImage = file.type.startsWith('image/')
      try {
        const storage = getStorage($firebase)
        const path = `chat_files/${Date.now()}_${file.name}`
        const fileRef = storageRef(storage, path)
        await uploadBytes(fileRef, file)
        uploadedFileUrl = await getDownloadURL(fileRef)
      } catch (storageErr) {
        console.warn('Firebase Storage échoué, utilisation du fallback local...', storageErr)
        // Secours pour petits fichiers (< 800Ko)
        if (file.size < 800 * 1024) {
          uploadedFileUrl = await new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = (ev) => resolve(ev.target.result)
            reader.onerror = () => resolve(null)
            reader.readAsDataURL(file)
          })
        } else {
          alert('Impossible de transférer ce fichier via le stockage Firebase. Limitez à 800 Ko en mode direct.')
          isSending.value = false
          return
        }
      }
    }

    const payload = {
      text: text || '',
      author: currentUser.value.displayName || currentUser.value.email.split('@')[0] || 'Anonyme',
      displayName: currentUser.value.displayName || currentUser.value.email.split('@')[0] || 'Anonyme',
      email: currentUser.value.email,
      uid: currentUser.value.uid,
      room: currentRoom.value,
      isAdmin: !!isAdmin.value,
      createdAt: serverTimestamp(),
      reactions: {},
    }

    if (uploadedFileUrl) {
      payload.fileUrl = uploadedFileUrl
      payload.fileName = file.name
      payload.fileSize = file.size
      payload.fileType = file.type
      if (isImage) {
        payload.imageUrl = uploadedFileUrl
      }
    }

    // Écrit dans la collection "messages" autorisée
    await addDoc(collection(db, "messages"), payload)

    newMessage.value = ''
    clearSelectedFile()
    showEmojiPicker.value = false
    nextTick(() => { autoResizeTextarea(); scrollToBottom() })
  } catch (err) {
    console.error('Erreur sendMessage:', err)
    alert('Erreur lors de l\'envoi du message : ' + (err.message || 'Vérifiez la connexion.'))
  } finally {
    isSending.value = false
  }
}

async function deleteMessage(msg) {
  if (isAdmin.value && msg.uid !== currentUser.value?.uid) {
    const authorName = msg.author || msg.displayName || 'cet utilisateur'
    if (!confirm(`👑 Action Administrateur :\nVoulez-vous supprimer le message de "${authorName}" ?`)) {
      return
    }
  }
  try {
    const db = getFirestore($firebase)
    await deleteDoc(doc(db, "messages", msg.id))
    // Mise à jour immédiate locale de la liste
    messages.value = messages.value.filter(m => m.id !== msg.id)
    showToast('Message supprimé 🗑️')
  } catch (err) {
    console.error('Erreur suppression message:', err)
    alert('Erreur lors de la suppression : ' + (err.message || 'Impossible de supprimer ce message.'))
  }
}

async function addReaction(msg, emoji) {
  try {
    const db = getFirestore($firebase)
    const refDoc = doc(db, "messages", msg.id)
    const snap = await getDoc(refDoc)
    const reactions = snap.data()?.reactions || {}
    const key = `${emoji}`
    reactions[key] = (reactions[key] || 0) + 1
    await updateDoc(refDoc, { reactions })
  } catch (err) {
    console.error('Erreur réaction:', err)
  }
}

function hasReacted(msg, emoji) {
  return false
}

// ── UI helpers ────────────────────────────────────────────────
function joinRoom(room) {
  currentRoom.value = room.id
  room.unread = 0
  sidebarOpen.value = false
  subscribeToRoom(room.id)
}

async function handleLogout() {
  if (currentUser.value && $firebase) {
    const db = getFirestore($firebase)
    deleteDoc(doc(db, 'presence', currentUser.value.uid)).catch(() => {})
  }
  const auth = getAuth($firebase)
  await signOut(auth)
  navigateTo('/')
}

function scrollToBottom() {
  messagesBottom.value?.scrollIntoView({ behavior: 'smooth' })
  showScrollBtn.value = false
  newMessagesCount.value = 0
}

function handleScroll() {
  if (!messagesArea.value) return
  const el = messagesArea.value
  const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100
  showScrollBtn.value = !atBottom
}

function handleTyping() {
  autoResizeTextarea()
}

function autoResizeTextarea() {
  const el = messageInput.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 150) + 'px'
}

function insertEmoji(emoji) {
  newMessage.value += emoji
  showEmojiPicker.value = false
  messageInput.value?.focus()
}

function insertFormat(delim) {
  const el = messageInput.value
  if (!el) return
  const start = el.selectionStart
  const end = el.selectionEnd
  const selected = newMessage.value.slice(start, end)
  newMessage.value = newMessage.value.slice(0, start) + delim + selected + delim + newMessage.value.slice(end)
}

function openLightbox(url) {
  lightboxUrl.value = url
}

// ── Formatage ─────────────────────────────────────────────────
function formatMessage(text, search) {
  if (!text) return ''
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
    .replace(/\n/g, '<br>')

  if (search) {
    const re = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    html = html.replace(re, '<mark class="search-highlight">$1</mark>')
  }
  return html
}

function formatDate(date) {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  if (date.toDateString() === today.toDateString()) return "Aujourd'hui"
  if (date.toDateString() === yesterday.toDateString()) return 'Hier'
  return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
}

function formatTime(date) {
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

function stringToColor(str) {
  if (!str) return '#7c3aed'
  const colors = ['#7c3aed','#ec4899','#f97316','#3b82f6','#14b8a6','#8b5cf6','#06b6d4','#10b981','#f59e0b']
  let hash = 0
  for (const c of str) hash = c.charCodeAt(0) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
    osc.start()
    osc.stop(ctx.currentTime + 0.3)
  } catch {}
}
</script>

<style scoped>
/* ── Layout principal ──────────────────────────────────────── */
.chat-app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

/* ── Sidebar ───────────────────────────────────────────────── */
.sidebar {
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(24px);
  border-right: 1px solid var(--glass-border);
  overflow: hidden;
  z-index: 100;
  transition: transform var(--t-slow);
}

.sidebar-header {
  padding: 20px 16px 16px;
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.sidebar-logo-icon {
  font-size: 1.5rem;
}

.sidebar-logo-text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: .9rem;
  color: var(--text-primary);
}

.sidebar-logo-sub {
  font-size: .65rem;
  color: var(--text-muted);
}

/* User profile */
.user-profile {
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--glass-border);
}

.user-avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: .875rem;
  color: white;
}

.user-avatar-wrapper .status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border: 2px solid var(--bg-base);
  border-radius: 50%;
}

.user-info { flex: 1; min-width: 0; }

.user-name {
  font-weight: 600;
  font-size: .85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-email {
  font-size: .7rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.settings-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-muted);
  padding: 4px;
  border-radius: var(--r-sm);
  transition: all var(--t-fast);
}

.settings-btn:hover {
  color: var(--text-primary);
  background: var(--glass-bg);
}

/* Search */
.sidebar-search {
  padding: 12px 16px;
  border-bottom: 1px solid var(--glass-border);
}

.sidebar-search .input-field {
  padding: 8px 8px 8px 38px;
  font-size: .8rem;
  border-radius: var(--r-md);
}

/* Rooms */
.rooms-section {
  flex: 1;
  overflow-y: auto;
  padding: 8px 8px;
}

.rooms-category {
  padding: 8px 8px 4px;
}

.category-label {
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.room-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--r-md);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all var(--t-fast);
  color: var(--text-secondary);
}

.room-btn:hover {
  background: var(--glass-bg);
  color: var(--text-primary);
}

.room-btn.active {
  background: linear-gradient(135deg, rgba(124,58,237,.25), rgba(236,72,153,.15));
  color: var(--text-primary);
  border: 1px solid rgba(168,85,247,.2);
}

.room-icon { font-size: 1rem; flex-shrink: 0; }

.room-info { flex: 1; min-width: 0; }

.room-name {
  display: block;
  font-size: .85rem;
  font-weight: 500;
}

.room-desc {
  display: block;
  font-size: .7rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.room-unread {
  background: var(--g-accent);
  color: white;
  border-radius: var(--r-full);
  font-size: .65rem;
  font-weight: 700;
  padding: 2px 7px;
  min-width: 18px;
  text-align: center;
}

/* Sidebar footer */
.sidebar-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--glass-border);
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--r-lg);
  background: rgba(239,68,68,.1);
  border: 1px solid rgba(239,68,68,.2);
  color: #fca5a5;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--t-base);
}

.logout-btn:hover {
  background: rgba(239,68,68,.2);
  border-color: rgba(239,68,68,.4);
}

/* ── Zone principale ───────────────────────────────────────── */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Chat header */
.chat-header {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--glass-border);
  border-radius: 0;
  flex-shrink: 0;
  z-index: 10;
}

.mobile-menu-btn {
  display: none;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-sm);
  color: var(--text-primary);
  padding: 6px 10px;
  cursor: pointer;
  font-size: 1.2rem;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.ch-room-icon { font-size: 1.5rem; }

.ch-room-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
}

.ch-room-desc {
  font-size: .75rem;
  color: var(--text-muted);
}

.chat-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: var(--r-md);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--t-fast);
  color: var(--text-secondary);
}

.icon-btn:hover {
  background: var(--glass-bg-md);
  color: var(--text-primary);
}

.online-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-full);
  font-size: .75rem;
  font-weight: 500;
  color: var(--text-secondary);
}

/* Message search bar */
.msg-search-bar {
  padding: 12px 24px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid var(--glass-border);
  border-radius: 0;
  flex-shrink: 0;
}

.msg-search-bar .input-field {
  font-size: .875rem;
  padding: 8px 8px 8px 38px;
}

/* Messages area */
.messages-area {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Welcome banner */
.welcome-banner {
  text-align: center;
  padding: 40px 24px;
  margin-bottom: 16px;
}

.wb-icon { font-size: 3rem; margin-bottom: 16px; }

.wb-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.wb-desc {
  font-size: .9rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.wb-divider {
  display: flex;
  align-items: center;
  gap: 16px;
}

.wb-divider::before, .wb-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--glass-border);
}

.wb-divider-text {
  font-size: .75rem;
  color: var(--text-muted);
}

/* Date separator */
.date-separator {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.ds-line {
  flex: 1;
  height: 1px;
  background: var(--glass-border);
}

.ds-text {
  font-size: .7rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: .06em;
  background: var(--glass-bg);
  padding: 4px 12px;
  border-radius: var(--r-full);
  border: 1px solid var(--glass-border);
}

/* Message groups */
.msg-group {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 2px 0;
}

.msg-group.msg-mine {
  flex-direction: row-reverse;
}

.msg-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: .8rem;
  color: white;
  flex-shrink: 0;
  margin-top: 4px;
}

.msg-content { display: flex; flex-direction: column; gap: 2px; max-width: 70%; }

.msg-group.msg-mine .msg-content { align-items: flex-end; }

.msg-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
  margin-bottom: 4px;
}

.msg-author {
  font-weight: 600;
  font-size: .85rem;
}

.msg-time {
  font-size: .7rem;
  color: var(--text-muted);
}

.msg-bubble {
  position: relative;
  padding: 10px 14px;
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  background: var(--glass-bg-md);
  border: 1px solid var(--glass-border);
  font-size: .875rem;
  line-height: 1.6;
  max-width: 100%;
  word-break: break-word;
  transition: all var(--t-fast);
}

.msg-bubble:hover {
  border-color: rgba(255,255,255,.2);
}

.msg-bubble.mine {
  background: linear-gradient(135deg, rgba(124,58,237,.4), rgba(236,72,153,.3));
  border: 1px solid rgba(168,85,247,.3);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 16px;
  box-shadow: 0 4px 16px rgba(168,85,247,.2);
}

.msg-time-mine {
  display: block;
  font-size: .65rem;
  color: rgba(255,255,255,.5);
  text-align: right;
  margin-top: 4px;
}

.msg-image {
  max-width: 280px;
  border-radius: var(--r-md);
  cursor: pointer;
  transition: transform var(--t-base);
  margin-top: 4px;
}

.msg-image:hover { transform: scale(1.02); }

/* Fichier joint dans message */
.msg-file-attachment {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--r-md);
  margin-top: 4px;
  margin-bottom: 4px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all var(--t-fast);
}

.msg-file-attachment:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: var(--c-purple-2);
  transform: translateY(-1px);
}

.file-icon-badge {
  font-size: 1.4rem;
  width: 36px;
  height: 36px;
  border-radius: var(--r-sm);
  background: rgba(168, 85, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}

.file-name {
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
}

.file-size {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.file-download-btn {
  margin-left: auto;
  font-size: 0.95rem;
  color: var(--c-purple-2);
  padding: 4px 8px;
  border-radius: var(--r-sm);
  transition: all var(--t-fast);
}

/* Prévisualisation fichier sélectionné avant envoi */
.file-preview-bar {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-lg);
}

.file-preview-card {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-preview-thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: var(--r-sm);
  border: 1px solid var(--glass-border);
}

.file-preview-icon {
  font-size: 1.3rem;
  width: 36px;
  height: 36px;
  border-radius: var(--r-sm);
  background: rgba(168, 85, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-preview-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  overflow: hidden;
}

.file-preview-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-preview-size {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.file-preview-remove {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px 10px;
  font-size: 1rem;
  border-radius: var(--r-sm);
  transition: all var(--t-fast);
}

.file-preview-remove:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.15);
}

/* Message actions */
.msg-actions {
  position: absolute;
  top: -36px;
  right: 0;
  display: flex;
  gap: 4px;
  background: var(--glass-bg-heavy);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-full);
  padding: 4px 8px;
  z-index: 10;
  white-space: nowrap;
}

.reaction-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
  border-radius: var(--r-sm);
  transition: transform var(--t-fast);
}

.reaction-btn:hover { transform: scale(1.2); }

.reaction-btn.danger { filter: grayscale(1); opacity: .7; }
.reaction-btn.danger:hover { filter: none; opacity: 1; }

/* Réactions */
.msg-reactions {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.reaction-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-full);
  font-size: .8rem;
  cursor: pointer;
  transition: all var(--t-fast);
}

.reaction-pill:hover, .reaction-pill.active {
  background: rgba(168,85,247,.2);
  border-color: rgba(168,85,247,.4);
}

/* Typing indicator */
.typing-indicator {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 8px 0;
}

.typing-avatar { font-size: 1.2rem; }

.typing-bubble {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 16px;
  border-bottom-left-radius: 4px;
}

.typing-text {
  font-size: .75rem;
  color: var(--text-muted);
  font-style: italic;
}

/* Scroll to bottom */
.scroll-bottom-btn {
  position: absolute;
  bottom: 140px;
  right: 24px;
  padding: 10px 18px;
  background: var(--g-accent);
  border: none;
  border-radius: var(--r-full);
  color: white;
  font-size: .8rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(168,85,247,.5);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all var(--t-spring);
}

.scroll-bottom-btn:hover { transform: translateY(-2px); }

/* ── Zone de saisie ────────────────────────────────────────── */
.input-area {
  padding: 12px 20px 16px;
  border-top: 1px solid var(--glass-border);
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
}

.input-toolbar {
  display: flex;
  gap: 4px;
  align-items: center;
}

.tool-btn {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: var(--r-sm);
  cursor: pointer;
  font-size: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all var(--t-fast);
}

.tool-btn:hover {
  background: var(--glass-bg);
  color: var(--text-primary);
}

/* Emoji picker */
.emoji-picker {
  border-radius: var(--r-xl);
  padding: 16px;
  position: absolute;
  bottom: 130px;
  left: 24px;
  z-index: 100;
  width: 340px;
}

.ep-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.ep-tab {
  padding: 6px 12px;
  background: none;
  border: 1px solid transparent;
  border-radius: var(--r-full);
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--t-fast);
}

.ep-tab.active, .ep-tab:hover {
  background: var(--glass-bg-md);
  border-color: var(--glass-border);
}

.ep-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  max-height: 160px;
  overflow-y: auto;
}

.ep-emoji {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px;
  border-radius: var(--r-sm);
  transition: all var(--t-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ep-emoji:hover {
  background: var(--glass-bg-md);
  transform: scale(1.2);
}

/* Main input row */
.main-input-row {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

.user-avatar-small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: .7rem;
  color: white;
  flex-shrink: 0;
}

.input-box-wrap {
  flex: 1;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: all var(--t-base);
}

.input-box-wrap:focus-within {
  border-color: var(--c-purple-2);
  box-shadow: 0 0 0 3px rgba(168,85,247,.2);
}

.message-textarea {
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: .9rem;
  resize: none;
  min-height: 44px;
  max-height: 150px;
  line-height: 1.5;
}

.message-textarea::placeholder { color: var(--text-muted); }

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--t-spring);
  flex-shrink: 0;
}

.send-btn.active {
  background: var(--g-accent);
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 20px rgba(168,85,247,.5);
}

.send-btn.active:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 32px rgba(168,85,247,.7);
}

.send-btn:disabled { opacity: .5; cursor: not-allowed; }

.input-hint {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  font-size: .65rem;
  color: var(--text-muted);
}

/* ── Membres panel ─────────────────────────────────────────── */
.members-panel {
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--glass-border);
  border-radius: 0;
}

.mp-header {
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--glass-border);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: .9rem;
}

.mp-list {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}

.mp-member {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: var(--r-md);
  transition: background var(--t-fast);
}

.mp-member:hover { background: var(--glass-bg); }

.mp-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: .75rem;
  color: white;
}

.mp-name { font-size: .85rem; font-weight: 500; }
.mp-status { font-size: .7rem; color: #22c55e; }

/* ── Lightbox ──────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(0,0,0,.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: var(--r-xl);
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Settings modal ────────────────────────────────────────── */
.settings-modal {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
  justify-content: flex-start;
  padding-left: 16px;
}

.settings-inner {
  width: 280px;
  padding: 24px;
  border-radius: var(--r-xl);
  background: rgba(20,20,30,.95);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);
}

.settings-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.settings-section {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.settings-label {
  font-size: .8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: .05em;
}

.color-picker { display: flex; gap: 8px; flex-wrap: wrap; }

.color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--t-fast);
}

.color-swatch.selected {
  border-color: white;
  transform: scale(1.15);
}

/* Toggle switch */
.toggle-switch { position: relative; display: inline-block; }
.toggle-switch input { display: none; }

.toggle-track {
  display: block;
  width: 44px;
  height: 24px;
  background: rgba(255,255,255,.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all var(--t-base);
  position: relative;
}

.toggle-track::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  transition: all var(--t-base);
}

.toggle-switch input:checked + .toggle-track {
  background: var(--c-purple-1);
}

.toggle-switch input:checked + .toggle-track::after {
  transform: translateX(20px);
}

/* ── Loading screen ────────────────────────────────────────── */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 24px;
  position: relative;
  z-index: 1;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255,255,255,.1);
  border-top-color: var(--c-purple-2);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* ── Misc inline styles ────────────────────────────────────── */
:deep(.inline-code) {
  background: rgba(255,255,255,.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: .85em;
}

:deep(.search-highlight) {
  background: rgba(249,115,22,.3);
  border-radius: 2px;
  padding: 0 2px;
}

.highlighted .msg-bubble {
  border-color: rgba(249,115,22,.4);
  box-shadow: 0 0 0 2px rgba(249,115,22,.2);
}

/* ── Transitions ───────────────────────────────────────────── */
.slide-down-enter-active, .slide-down-leave-active { transition: all .3s ease; }
.slide-down-enter-from, .slide-down-leave-to { transform: translateY(-10px); opacity: 0; }

.slide-left-enter-active, .slide-left-leave-active { transition: all .35s var(--t-spring); }
.slide-left-enter-from, .slide-left-leave-to { transform: translateX(100%); opacity: 0; }

.scale-up-enter-active, .scale-up-leave-active { transition: all .3s var(--t-spring); }
.scale-up-enter-from, .scale-up-leave-to { transform: scale(.9); opacity: 0; }

.fade-fast-enter-active, .fade-fast-leave-active { transition: opacity .15s ease; }
.fade-fast-enter-from, .fade-fast-leave-to { opacity: 0; }

/* ── Mobile responsive ─────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    z-index: 200;
  }

  .sidebar.open { transform: translateX(0); }

  .mobile-menu-btn { display: flex; }
  .mobile-close-btn { display: flex; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--r-sm); padding: 4px 8px; cursor: pointer; color: var(--text-primary); }

  .members-panel { display: none; }

  .online-pill { display: none; }

  .emoji-picker { left: 8px; right: 8px; width: auto; }
}

@media (min-width: 769px) {
  .mobile-close-btn { display: none; }
}

/* ── Admin Badges & Toast ──────────────────────────────────── */
.admin-badge-gold {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(234, 179, 8, 0.35));
  border: 1px solid rgba(245, 158, 11, 0.5);
  color: #fbbf24;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: var(--r-full);
  letter-spacing: 0.05em;
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.25);
  margin-left: 6px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}

.admin-pill-badge {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #000;
  font-weight: 800;
  font-size: 0.65rem;
  padding: 2px 8px;
  border-radius: var(--r-full);
  margin-left: 6px;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.5);
}

.admin-toast {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 22px;
  border-radius: var(--r-full);
  background: rgba(18, 13, 30, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 158, 11, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 158, 11, 0.3);
  color: #fef08a;
  font-size: 0.88rem;
  font-weight: 600;
  max-width: 90vw;
}

.admin-toast-icon {
  font-size: 1.3rem;
  animation: pulse 1.5s infinite;
}

.admin-toast-close {
  background: none;
  border: none;
  color: rgba(254, 240, 138, 0.7);
  cursor: pointer;
  font-size: 0.95rem;
  padding: 2px 6px;
  border-radius: 50%;
  transition: all var(--t-fast);
}

.admin-toast-close:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
}
</style>