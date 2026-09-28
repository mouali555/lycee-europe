<template>
  <main class="community-page" :class="{ 'mini-chat': miniChat }">
    <button v-if="sidebarOpen" class="sidebar-overlay" aria-label="Fermer les salons" tabindex="-1" @click="setSidebar(false)"></button>
    <aside id="community-sidebar" ref="sidebarPanel" class="community-sidebar" :class="{ 'is-open': sidebarOpen }" :role="isMobile && sidebarOpen ? 'dialog' : undefined" :aria-modal="isMobile && sidebarOpen ? true : undefined" aria-label="Les salons du collectif">
      <div class="brand-row"><NuxtLink to="/" class="community-brand" aria-label="Lycée Europe — Accueil"><span class="brand-mark" aria-hidden="true"><img :src="`${base}europe-orbit.svg`" alt="" /></span><span>lycée<br><strong>europe.</strong></span></NuxtLink><button class="icon-button mobile-only" aria-label="Fermer les salons" @click="setSidebar(false)">×</button></div>
      <NuxtLink to="/" class="back-to-site"><span aria-hidden="true">←</span> Retour au site</NuxtLink>
      <div class="sidebar-divider"></div>
      <div class="workspace-label"><span class="workspace-symbol" aria-hidden="true">✳</span><div><strong>Le collectif</strong><span>L’espace des élèves</span></div><span class="workspace-dot" aria-hidden="true"></span></div>
      <p class="section-label">VOS SALONS <span>03</span></p>
      <nav class="room-list" aria-label="Salons de discussion">
        <button v-for="room in rooms" :key="room.id" :class="{ active: currentRoom === room.id }" :aria-current="currentRoom === room.id ? 'page' : undefined" :disabled="isSending" @click="joinRoom(room.id)"><span class="room-hash" aria-hidden="true">#</span><span>{{ room.name }}<small>{{ room.short }}</small></span><span class="room-arrow" aria-hidden="true">↗</span></button>
      </nav>
      <div class="sidebar-note"><span class="note-symbol" aria-hidden="true">↗</span><span class="note-eyebrow">ON AVANCE ENSEMBLE</span><h2>Une question ?<br>Il y a un salon<br>pour ça.</h2><p>Les petites questions font aussi les grandes conversations.</p><button @click="joinRoom('entraide')">Trouver de l’entraide <span aria-hidden="true">↗</span></button></div>
      <div class="sidebar-bottom">
        <NuxtLink to="/clubs" class="clubs-link">Découvrir les clubs <span aria-hidden="true">↗</span></NuxtLink>
        <div v-if="currentUser" class="account-row"><span class="avatar own-avatar">{{ initials(userName) }}</span><div class="account-copy"><strong>{{ userName }}</strong><span>Votre espace personnel</span></div><button class="icon-button" :disabled="isSigningOut || isSending" aria-label="Se déconnecter" title="Se déconnecter" @click="handleLogout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 4H4v16h6m4-13 5 5-5 5m-6-5h11"/></svg></button></div>
        <NuxtLink v-else to="/login" class="account-login">Rejoindre la communauté <span aria-hidden="true">↗</span></NuxtLink>
      </div>
    </aside>

    <section class="conversation" aria-labelledby="room-title" :inert="isMobile && sidebarOpen">
      <header class="conversation-header">
        <button ref="sidebarTrigger" class="icon-button mobile-only" aria-label="Ouvrir les salons" aria-controls="community-sidebar" :aria-expanded="sidebarOpen" @click="setSidebar(true)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        <span class="header-hash" aria-hidden="true">#</span><div class="room-heading"><h1 id="room-title">{{ activeRoom.name }}</h1><p>{{ activeRoom.description }}</p></div>
        <div class="header-actions"><span class="connection-status"><span :class="{ connected: currentUser && !messagesError && !messagesFromCache }"></span>{{ !authReady ? 'Chargement' : currentUser ? (messagesError ? 'Connexion interrompue' : messagesFromCache ? 'Synchronisation…' : 'Espace connecté') : 'Aperçu de l’espace' }}</span><button class="icon-button" aria-label="Rechercher dans les messages" :aria-expanded="showSearch" @click="toggleSearch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button></div>
      </header>
      <div v-if="showSearch" class="message-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg><input ref="searchInput" v-model="search" aria-label="Rechercher un message ou un fichier" placeholder="Rechercher dans les messages récents…" @keydown.esc="closeSearch" /><span v-if="search && currentUser">{{ displayedMessages.length }} résultat{{ displayedMessages.length > 1 ? 's' : '' }}</span><button class="icon-button" aria-label="Fermer la recherche" @click="closeSearch">×</button></div>
      <div class="conversation-notice"><span class="notice-icon" aria-hidden="true">↗</span><p><strong>Un espace qui nous ressemble.</strong> Partageons nos idées avec respect, curiosité et bienveillance.</p><span class="notice-tag">LE COLLECTIF EUROPE</span></div>

      <div ref="messagesArea" class="messages-area" @scroll="handleScroll">
        <div v-if="!authReady || messagesLoading" class="state-panel" role="status"><span class="loading-ring" aria-hidden="true"></span><h2>On vous ouvre la porte…</h2><p>Chargement de votre espace.</p></div>
          <div v-else-if="!currentUser" class="welcome-state">
          <div class="welcome-illustration" aria-hidden="true"><img :src="`${base}europe-orbit.svg`" alt="" /><span class="welcome-star">✳</span><span class="bubble bubble-one">Une idée à partager ?<i>↗</i></span><span class="bubble bubble-two">On en parle ensemble.<i>✧</i></span></div>
          <span class="welcome-kicker">BIENVENUE DANS #{{ activeRoom.name.toUpperCase() }}</span><h2>{{ activeRoom.welcome }}<br><em>ensemble.</em></h2><p>{{ activeRoom.intro }} Connectez-vous pour retrouver les messages et rejoindre la conversation.</p><NuxtLink to="/login" class="primary-link">Rejoindre les échanges <span aria-hidden="true">↗</span></NuxtLink><span class="preview-label">Aperçu de l’espace · Aucun message affiché hors connexion</span>
        </div>
        <div v-else-if="messagesError" class="state-panel error-state" role="alert"><span class="state-symbol" aria-hidden="true">↻</span><h2>La conversation fait une pause.</h2><p>{{ messagesError }}</p><button class="primary-link" @click="subscribeToMessages">Réessayer <span aria-hidden="true">↻</span></button></div>
        <template v-else>
          <div class="room-introduction"><span class="room-intro-symbol" aria-hidden="true">#</span><div><h2>Bienvenue dans {{ activeRoom.name }}.</h2><p>{{ activeRoom.intro }}</p></div></div>
          <p class="history-notice">Historique récent · Ce salon parmi les 150 dernières publications du collectif</p>
          <div v-if="!displayedMessages.length" class="empty-state"><span aria-hidden="true">{{ search ? '⌕' : '↗' }}</span><h3>{{ search ? 'Aucun message trouvé.' : 'La conversation commence avec vous.' }}</h3><p>{{ search ? 'Essayez un autre mot ou recherchez dans un autre salon.' : 'Une question, une idée ou simplement un bonjour ?' }}</p><button v-if="search" class="text-button" @click="search = ''">Effacer la recherche</button></div>
          <template v-for="(message, index) in displayedMessages" :key="message.id">
            <div v-if="showDate(message, index)" class="date-divider"><span>{{ formatDate(message.createdAt) }}</span></div>
            <article class="message" :class="{ mine: message.uid === currentUser?.uid }">
              <span class="avatar message-avatar" :style="{ background: avatarColor(message.uid) }">{{ initials(authorName(message)) }}</span>
              <div class="message-content"><div class="message-meta"><strong>{{ message.uid === currentUser?.uid ? 'Vous' : authorName(message) }}</strong><time>{{ formatTime(message.createdAt) }}</time></div>
                <div class="message-bubble"><p v-if="message.text" class="message-text">{{ message.text }}</p><a v-if="safeUrl(message.imageUrl, true)" :href="safeUrl(message.imageUrl, true)" target="_blank" rel="noopener noreferrer" class="message-image-link" :aria-label="'Ouvrir l’image ' + (message.fileName || 'partagée')"><img :src="safeUrl(message.imageUrl, true)" :alt="message.fileName || 'Image partagée'" loading="lazy" class="message-image" /></a><a v-if="safeUrl(message.fileUrl) && !safeUrl(message.imageUrl, true)" :href="safeUrl(message.fileUrl)" target="_blank" rel="noopener noreferrer" :download="message.fileName" class="file-attachment"><span aria-hidden="true">↧</span><span><strong>{{ message.fileName || 'Pièce jointe' }}</strong><small>{{ formatFileSize(message.fileSize) }} · Ouvrir le fichier</small></span><span aria-hidden="true">↗</span></a></div>
                <div class="message-footer"><div class="message-reactions"><button v-for="(count, emoji) in validReactions(message)" :key="emoji" class="reaction" :class="{ reacted: hasReacted(message, emoji) }" :disabled="reactionPending === message.id" :aria-label="`Réagir ${emoji} (${count})`" @click="toggleReaction(message, emoji)">{{ emoji }} <span>{{ count }}</span></button><button class="reaction add-reaction" :disabled="reactionPending === message.id" aria-label="Réagir avec un pouce levé" title="J’aime" @click="toggleReaction(message, '👍')">＋ 👍</button></div><button v-if="message.uid === currentUser?.uid" class="delete-message" @click="pendingDelete = pendingDelete === message.id ? null : message.id" :aria-expanded="pendingDelete === message.id" aria-label="Supprimer votre message">Supprimer</button></div>
                <div v-if="pendingDelete === message.id" class="delete-confirm"><span>Supprimer ce message ?</span><button @click="pendingDelete = null" :disabled="deleting">Conserver</button><button class="confirm-danger" @click="deleteMessage(message)" :disabled="deleting">{{ deleting ? 'Suppression…' : 'Supprimer' }}</button></div>
              </div>
            </article>
          </template>
          <div ref="messagesBottom" class="messages-bottom"></div>
        </template>
      </div>
      <button v-if="showScrollButton && currentUser && !search" class="scroll-bottom-button" @click="scrollToBottom">Derniers messages <span aria-hidden="true">↓</span></button>

      <footer class="composer-area">
        <p v-if="actionError" class="action-error" role="alert">{{ actionError }}<button @click="actionError = ''" aria-label="Fermer le message d’erreur">×</button></p>
        <template v-if="currentUser">
          <div v-if="selectedFile" class="selected-file"><img v-if="filePreview" :src="filePreview" alt="Aperçu de la pièce jointe" /><span v-else class="selected-file-icon" aria-hidden="true">↧</span><span><strong>{{ selectedFile.name }}</strong><small>{{ isSending && uploadProgress ? `Transfert : ${uploadProgress} %` : formatFileSize(selectedFile.size) }}</small></span><button class="icon-button" :disabled="isSending" aria-label="Retirer la pièce jointe" @click="clearSelectedFile">×</button></div>
          <div v-if="emojiOpen" class="emoji-picker" aria-label="Insérer un emoji"><button v-for="emoji in emojis" :key="emoji" :aria-label="'Insérer ' + emoji" @click="insertEmoji(emoji)">{{ emoji }}</button><button class="emoji-close" aria-label="Fermer les emojis" @click="emojiOpen = false">×</button></div>
          <form class="composer" @submit.prevent="sendMessage"><label class="visually-hidden" for="message-input">Votre message dans {{ activeRoom.name }}</label><textarea id="message-input" ref="messageInput" v-model="draft" :placeholder="`Un message pour #${activeRoom.name}…`" rows="1" maxlength="4000" :disabled="isSending" @input="resizeInput" @keydown="handleMessageKeydown"></textarea><div class="composer-toolbar"><div><input ref="fileInput" type="file" class="visually-hidden" tabindex="-1" aria-label="Choisir une pièce jointe" @change="selectFile" /><button type="button" class="icon-button" aria-label="Joindre un fichier (20 Mo maximum)" :disabled="isSending" @click="fileInput?.click()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m9 12 6-6a3 3 0 0 1 4.2 4.2l-8.4 8.4a5 5 0 0 1-7.1-7.1l8.4-8.4M7 14l7-7"/></svg></button><button type="button" class="icon-button" aria-label="Insérer un emoji" :aria-expanded="emojiOpen" :disabled="isSending" @click="emojiOpen = !emojiOpen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 14.5a4.5 4.5 0 0 0 8 0M8 9h1m6 0h1"/></svg></button><span class="attachment-limit">20 Mo max.</span></div><button type="submit" class="send-button" :disabled="isSending || (!draft.trim() && !selectedFile)">{{ isSending ? 'Envoi…' : 'Envoyer' }} <span aria-hidden="true">↗</span></button></div></form>
          <div class="composer-hint"><span><strong>Entrée</strong> pour envoyer · <strong>Maj + Entrée</strong> pour une nouvelle ligne</span><span>{{ draft.length }}/4000</span></div>
        </template>
          <div v-else class="guest-composer"><span>Votre prochaine conversation commence ici.</span><NuxtLink to="/login" :target="miniChat ? '_top' : undefined">Se connecter <span aria-hidden="true">↗</span></NuxtLink></div>
      </footer>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, deleteDoc, runTransaction, limit } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

useHead({ title: 'Le collectif' })
const route = useRoute()
const miniChat = computed(() => route.query.mini === '1')
const { $firebase, $firebaseConfigured } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const base = (runtimeConfig.app.baseURL || '/').endsWith('/') ? (runtimeConfig.app.baseURL || '/') : (runtimeConfig.app.baseURL || '/') + '/'
const rooms = [
  { id: 'general', name: 'général', short: 'La vie du lycée', description: 'Les idées se rencontrent ici.', welcome: 'Faisons connaissance,', intro: 'Le rendez-vous de tous les élèves : les nouvelles du lycée, les bonnes idées et les questions du quotidien.' },
  { id: 'entraide', name: 'entraide', short: 'Apprendre ensemble', description: 'Une question. Plusieurs façons d’avancer.', welcome: 'Allons plus loin,', intro: 'Un exercice qui résiste, une méthode à partager ou une révision à organiser ? Ici, on s’aide à avancer.' },
  { id: 'detente', name: 'détente', short: 'La pause du collectif', description: 'On se retrouve, on échange, on souffle.', welcome: 'Prenons une pause,', intro: 'Musique, sport, découvertes et discussions spontanées : une place pour tout ce qui vous anime en dehors des cours.' }
]
const emojis = ['👋', '😊', '👍', '💡', '📚', '✨', '🎉', '❤️']
const currentRoom = ref('general')
const activeRoom = computed(() => rooms.find(room => room.id === currentRoom.value) || rooms[0])
const currentUser = ref(null)
const authReady = ref(false)
const userName = computed(() => currentUser.value?.displayName || currentUser.value?.email?.split('@')[0] || 'Élève')
const allMessages = ref([])
const search = ref('')
const showSearch = ref(false)
const sidebarOpen = ref(false)
const isMobile = ref(false)
const sidebarPanel = ref(null)
const sidebarTrigger = ref(null)
const messagesLoading = ref(false)
const messagesFromCache = ref(true)
const messagesError = ref('')
const actionError = ref('')
const isSigningOut = ref(false)
const draft = ref('')
const isSending = ref(false)
const emojiOpen = ref(false)
const uploadProgress = ref(0)
const selectedFile = ref(null)
const filePreview = ref(null)
const pendingDelete = ref(null)
const deleting = ref(false)
const reactionPending = ref(null)
const messagesArea = ref(null)
const messagesBottom = ref(null)
const messageInput = ref(null)
const fileInput = ref(null)
const searchInput = ref(null)
const showScrollButton = ref(false)
let unsubscribeAuth
let unsubscribeMessages
let uploadTask
let disposed = false
let subscriptionVersion = 0
let mobileMedia
const roomDrafts = new Map()

const displayedMessages = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('fr')
  return allMessages.value.filter(message => (message.room || 'general') === currentRoom.value && (!term || [message.text, message.fileName, authorName(message)].some(value => String(value || '').toLocaleLowerCase('fr').includes(term))))
})

onMounted(() => {
  mobileMedia = window.matchMedia('(max-width: 760px)')
  updateMobileLayout()
  mobileMedia.addEventListener('change', updateMobileLayout)
  document.addEventListener('keydown', handleSidebarKeydown)
  if (!$firebase || !$firebaseConfigured) { authReady.value = true; return }
  try {
    unsubscribeAuth = onAuthStateChanged(getAuth($firebase), user => {
      if (disposed) return
      subscriptionVersion++
      unsubscribeMessages?.()
      currentUser.value = user
      authReady.value = true
      allMessages.value = []
      if (user) subscribeToMessages()
      else { messagesLoading.value = false; messagesError.value = ''; clearDrafts() }
    }, () => {
      subscriptionVersion++
      unsubscribeMessages?.()
      currentUser.value = null
      allMessages.value = []
      clearDrafts()
      messagesLoading.value = false
      authReady.value = true
      actionError.value = 'Impossible de vérifier votre connexion. Actualisez la page pour réessayer.'
    })
  } catch { authReady.value = true; actionError.value = 'L’espace connecté est momentanément indisponible.' }
})
onUnmounted(() => {
  disposed = true
  subscriptionVersion++
  unsubscribeAuth?.()
  unsubscribeMessages?.()
  uploadTask?.cancel()
  clearDrafts()
  mobileMedia?.removeEventListener('change', updateMobileLayout)
  document.removeEventListener('keydown', handleSidebarKeydown)
})

function subscribeToMessages() {
  unsubscribeMessages?.()
  if (!currentUser.value || !$firebase) return
  const version = ++subscriptionVersion
  messagesLoading.value = true
  messagesError.value = ''
  messagesFromCache.value = true
  let firstSnapshot = true
  const messagesQuery = query(collection(getFirestore($firebase), 'messages'), orderBy('createdAt', 'desc'), limit(150))
  unsubscribeMessages = onSnapshot(messagesQuery, { includeMetadataChanges: true }, snapshot => {
    if (disposed || version !== subscriptionVersion) return
    const shouldScroll = firstSnapshot || !showScrollButton.value
    allMessages.value = snapshot.docs.map(item => ({ ...item.data({ serverTimestamps: 'estimate' }), id: item.id })).filter(message => !message.isPresence && message.room !== '__presence__').reverse()
    messagesLoading.value = false
    messagesFromCache.value = snapshot.metadata.fromCache
    firstSnapshot = false
    if (shouldScroll && !search.value) nextTick(scrollToBottom)
  }, error => {
    if (disposed || version !== subscriptionVersion) return
    messagesLoading.value = false
    messagesError.value = error.code === 'permission-denied' ? 'Votre compte ne peut pas encore accéder aux échanges. Contactez l’équipe du lycée pour vérifier votre accès.' : 'Impossible de charger les messages pour le moment. Vérifiez votre connexion, puis réessayez.'
  })
}

function joinRoom(roomId) {
  if (isSending.value || !rooms.some(room => room.id === roomId)) return
  if (roomId !== currentRoom.value) {
    roomDrafts.set(currentRoom.value, { text: draft.value, file: selectedFile.value, preview: filePreview.value })
    const saved = roomDrafts.get(roomId)
    draft.value = saved?.text || ''
    selectedFile.value = saved?.file || null
    filePreview.value = saved?.preview || null
    roomDrafts.delete(roomId)
  }
  currentRoom.value = roomId
  setSidebar(false)
  pendingDelete.value = null
  search.value = ''
  actionError.value = ''
  emojiOpen.value = false
  nextTick(() => { scrollToBottom(); resizeInput() })
}
function updateMobileLayout() { isMobile.value = !!mobileMedia?.matches; if (!isMobile.value) sidebarOpen.value = false }
async function setSidebar(open) {
  const wasOpen = sidebarOpen.value
  sidebarOpen.value = open
  await nextTick()
  if (open) sidebarPanel.value?.querySelector('button:not(:disabled)')?.focus()
  else if (wasOpen && isMobile.value) sidebarTrigger.value?.focus()
}
function handleSidebarKeydown(event) {
  if (!isMobile.value || !sidebarOpen.value) return
  if (event.key === 'Escape') { event.preventDefault(); setSidebar(false); return }
  if (event.key !== 'Tab') return
  const focusable = Array.from(sidebarPanel.value?.querySelectorAll('a[href],button:not(:disabled),input:not(:disabled),[tabindex="0"]') || []).filter(element => element.getClientRects().length)
  const first = focusable[0], last = focusable.at(-1)
  if (!first) return
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}
function clearDrafts() {
  for (const saved of roomDrafts.values()) if (saved.preview) URL.revokeObjectURL(saved.preview)
  roomDrafts.clear()
  draft.value = ''
  pendingDelete.value = null
  emojiOpen.value = false
  clearSelectedFile()
}
async function toggleSearch() { showSearch.value = !showSearch.value; if (showSearch.value) { await nextTick(); searchInput.value?.focus() } else search.value = '' }
function closeSearch() { showSearch.value = false; search.value = '' }
function authorName(message) { return message.displayName || message.author || message.email?.split('@')[0] || 'Élève' }
function initials(name) { return String(name || 'E').trim().split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase() }
function avatarColor(uid) { const palette = ['#ddc6f2', '#dbe9ab', '#edc8dd', '#c7d7ed', '#e8dff4']; const hash = Array.from(String(uid || '')).reduce((value, char) => value + char.charCodeAt(0), 0); return palette[hash % palette.length] }
function dateValue(timestamp) {
  const date = typeof timestamp?.toDate === 'function' ? timestamp.toDate() : typeof timestamp?.seconds === 'number' ? new Date(timestamp.seconds * 1000) : null
  return date instanceof Date && Number.isFinite(date.getTime()) ? date : null
}
function formatDate(timestamp) { const date = dateValue(timestamp); return date ? date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Aujourd’hui' }
function formatTime(timestamp) { const date = dateValue(timestamp); return date ? date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) : 'Envoi…' }
function showDate(message, index) { return !index || formatDate(message.createdAt) !== formatDate(displayedMessages.value[index - 1].createdAt) }
function formatFileSize(bytes) { const size = Number(bytes); if (bytes == null || !Number.isFinite(size) || size < 0) return ''; if (size < 1024) return `${size} o`; if (size < 1048576) return `${(size / 1024).toFixed(1)} Ko`; return `${(size / 1048576).toFixed(1)} Mo` }
function safeUrl(value, imageOnly = false) {
  if (typeof value !== 'string') return ''
  if (/^data:image\/(?:png|jpeg|gif|webp);base64,[A-Za-z0-9+/=\s]+$/.test(value)) return value
  if (!imageOnly && /^data:(?:application\/pdf|text\/plain);base64,[A-Za-z0-9+/=\s]+$/.test(value)) return value
  try { const parsed = new URL(value); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : '' } catch { return '' }
}
function validReactions(message) { return Object.fromEntries(Object.entries(message.reactions || {}).filter(([emoji, count]) => emojis.includes(emoji) || ['😂', '🔥', '😮', '👏'].includes(emoji)).filter(([, count]) => Number.isFinite(count) && count > 0)) }
function hasReacted(message, emoji) { const users = message.reactionUsers?.[emoji]; return Array.isArray(users) && users.includes(currentUser.value?.uid) }

function selectFile(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file) return
  actionError.value = ''
  if (file.size > 20 * 1024 * 1024) { actionError.value = 'Ce fichier dépasse 20 Mo. Choisissez un fichier plus léger.'; return }
  clearSelectedFile()
  selectedFile.value = file
  if (/^image\/(png|jpeg|gif|webp)$/.test(file.type)) filePreview.value = URL.createObjectURL(file)
}
function clearSelectedFile() { if (filePreview.value) URL.revokeObjectURL(filePreview.value); selectedFile.value = null; filePreview.value = null; uploadProgress.value = 0 }
function insertEmoji(emoji) { if (draft.value.length + emoji.length <= 4000) draft.value += emoji; emojiOpen.value = false; nextTick(() => { resizeInput(); messageInput.value?.focus() }) }
function resizeInput() { if (messageInput.value) { messageInput.value.style.height = 'auto'; messageInput.value.style.height = `${Math.min(messageInput.value.scrollHeight, 150)}px` } }
function handleMessageKeydown(event) { if (event.key === 'Enter' && !event.shiftKey && !event.isComposing && event.keyCode !== 229) { event.preventDefault(); sendMessage() } if (event.key === 'Escape') emojiOpen.value = false }
function handleScroll() { const element = messagesArea.value; if (element) showScrollButton.value = element.scrollHeight - element.scrollTop - element.clientHeight > 110 }
function scrollToBottom() { const element = messagesArea.value; if (element) element.scrollTop = element.scrollHeight; showScrollButton.value = false }

async function sendMessage() {
  const text = draft.value.trim()
  const file = selectedFile.value
  const user = currentUser.value
  const room = currentRoom.value
  if (!user || !$firebase || isSending.value || (!text && !file)) return
  if (text.length > 4000) { actionError.value = 'Votre message doit contenir 4 000 caractères maximum.'; return }
  isSending.value = true
  actionError.value = ''
  let uploadedRef
  let committed = false
  try {
    const payload = { text, author: userName.value, displayName: userName.value, email: user.email || '', uid: user.uid, room, createdAt: serverTimestamp(), reactions: {} }
    if (file) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-150)
      uploadedRef = storageRef(getStorage($firebase), `chat_files/${Date.now()}_${user.uid}_${safeName}`)
      uploadTask = uploadBytesResumable(uploadedRef, file, { contentType: file.type || 'application/octet-stream' })
      await new Promise((resolve, reject) => uploadTask.on('state_changed', snapshot => { uploadProgress.value = snapshot.totalBytes ? Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100) : 100 }, reject, resolve))
      payload.fileUrl = await getDownloadURL(uploadedRef)
      payload.fileName = file.name; payload.fileSize = file.size; payload.fileType = file.type; payload.storagePath = uploadedRef.fullPath
      if (/^image\/(png|jpeg|gif|webp)$/.test(file.type)) payload.imageUrl = payload.fileUrl
    }
    if (disposed) { if (uploadedRef) await deleteObject(uploadedRef).catch(() => {}); return }
    if (getAuth($firebase).currentUser?.uid !== user.uid) throw new Error('Session changed before sending')
    await addDoc(collection(getFirestore($firebase), 'messages'), payload)
    committed = true
    draft.value = ''
    clearSelectedFile()
    emojiOpen.value = false
    await nextTick()
    resizeInput(); scrollToBottom(); messageInput.value?.focus()
  } catch (error) {
    if (uploadedRef && !committed) deleteObject(uploadedRef).catch(() => {})
    if (!disposed) actionError.value = error.code?.startsWith('storage/') ? 'Le fichier n’a pas pu être transféré. Votre brouillon est conservé ; réessayez ou retirez la pièce jointe.' : 'Votre message n’a pas été envoyé. Votre brouillon est conservé ; vérifiez votre connexion et réessayez.'
  } finally { isSending.value = false; uploadTask = null }
}

async function deleteMessage(message) {
  if (deleting.value || !currentUser.value || message.uid !== currentUser.value.uid) return
  deleting.value = true; actionError.value = ''
  try {
    await deleteDoc(doc(getFirestore($firebase), 'messages', message.id))
    pendingDelete.value = null
    if (typeof message.storagePath === 'string' && message.storagePath.startsWith('chat_files/')) {
      await deleteObject(storageRef(getStorage($firebase), message.storagePath)).catch(error => {
        if (error.code !== 'storage/object-not-found') actionError.value = 'Le message est supprimé. Sa pièce jointe n’a pas pu être effacée du stockage ; contactez l’équipe du lycée si nécessaire.'
      })
    }
  }
  catch { actionError.value = 'Impossible de supprimer ce message pour le moment. Réessayez.' }
  finally { deleting.value = false }
}

async function toggleReaction(message, emoji) {
  if (!currentUser.value || reactionPending.value) return
  const uid = currentUser.value.uid
  reactionPending.value = message.id
  actionError.value = ''
  try {
    await runTransaction(getFirestore($firebase), async transaction => {
      const reference = doc(getFirestore($firebase), 'messages', message.id)
      const snapshot = await transaction.get(reference)
      if (!snapshot.exists()) return
      const data = snapshot.data()
      const reactions = { ...(data.reactions || {}) }
      const reactionUsers = { ...(data.reactionUsers || {}) }
      const users = Array.isArray(reactionUsers[emoji]) ? reactionUsers[emoji] : []
      const alreadyReacted = users.includes(uid)
      reactionUsers[emoji] = alreadyReacted ? users.filter(id => id !== uid) : [...users, uid]
      reactions[emoji] = Math.max(0, (Number(reactions[emoji]) || 0) + (alreadyReacted ? -1 : 1))
      transaction.update(reference, { reactions, reactionUsers })
    })
  } catch { actionError.value = 'Votre réaction n’a pas pu être enregistrée. Réessayez.' }
  finally { reactionPending.value = null }
}

async function handleLogout() {
  if (isSigningOut.value || isSending.value) return
  isSigningOut.value = true
  try { await signOut(getAuth($firebase)); await navigateTo('/login') }
  catch { actionError.value = 'La déconnexion n’a pas abouti. Réessayez.' }
  finally { isSigningOut.value = false }
}
</script>

<style scoped>
.community-page { --chat-light: #f2eef6; --chat-dark: #0c061d; display: flex; height: 100vh; height: 100dvh; min-height: 460px; overflow: hidden; background: var(--chat-light); color: #261831; font-family: var(--font-sans, sans-serif); }
.community-page * { box-sizing: border-box; }
.community-page button, .community-page input, .community-page textarea { font: inherit; }
.community-page button { cursor: pointer; touch-action: manipulation; }
.community-page button:disabled { opacity: .45; cursor: not-allowed; }
.community-page a { color: inherit; text-decoration: none; }
.community-page :focus-visible { outline: 3px solid #9162d4; outline-offset: 3px; }
.community-sidebar { display: flex; flex-direction: column; flex-shrink: 0; width: 286px; overflow-y: auto; padding: 32px 26px 24px; background: radial-gradient(ellipse at 0 85%, #4a216744, transparent 65%), var(--chat-dark); color: #f5effb; border-right: 1px solid #ae89da33; scrollbar-width: thin; scrollbar-color: #604679 transparent; }
.brand-row { display: flex; justify-content: space-between; align-items: center; }
.community-brand { display: flex; gap: 11px; align-items: center; width: fit-content; font-size: 11px; line-height: 1; text-transform: uppercase; }
.community-brand strong { display: block; font-family: var(--font-display, sans-serif); font-size: 22px; line-height: 1; letter-spacing: -.04em; margin-top: 4px; }
.brand-mark { width: 43px; height: 43px; display: grid; place-items: center; flex-shrink: 0; }
.brand-mark img { width: 100%; height: 100%; object-fit: contain; }
.back-to-site { display: flex; align-items: center; gap: 10px; width: fit-content; font-size: 11px; color: #b9aacb !important; margin-top: 26px; }
.back-to-site:hover { color: #fff !important; }
.back-to-site span { font-size: 19px; }
.sidebar-divider { height: 1px; background: #ffffff21; margin: 25px 0; }
.workspace-label { display: flex; gap: 12px; align-items: center; }
.workspace-symbol { display: grid; place-items: center; width: 39px; height: 39px; border: 1px solid #bc92ed4f; font-size: 29px; color: var(--acid, #dfff78); }
.workspace-label strong { display: block; font-size: 12px; font-weight: 750; }
.workspace-label div > span { display: block; margin-top: 5px; font-size: 10px; color: #aa97c0; }
.workspace-dot { width: 5px; height: 5px; background: var(--acid, #dfff78); margin-left: auto; }
.section-label { display: flex; justify-content: space-between; margin: 34px 0 14px; font-size: 9px; font-weight: 700; color: #aa97c0; letter-spacing: .12em; }
.section-label > span { font-size: 9px; color: var(--accent, #a980ff); letter-spacing: 0; }
.room-list { display: flex; flex-direction: column; gap: 5px; margin-inline: -9px; }
.room-list > button { display: flex; align-items: center; width: 100%; gap: 11px; padding: 14px 12px; border: 1px solid transparent; border-radius: 0; color: #c0afcf; background: transparent; text-align: left; transition: background .2s; }
.room-list > button.active { background: #ab80ee21; border-color: #a57ad95c; color: #fff; }
.room-list > button:hover:not(:disabled) { background: #a87de42b; }
.room-hash { font-size: 24px; color: #af8be0; font-weight: 450; }
.room-list > button > span:nth-child(2) { font-size: 12px; font-weight: 750; }
.room-list small { display: block; margin-top: 5px; font-size: 10px; font-weight: 400; color: #af9cbf; }
.room-arrow { margin-left: auto; font-size: 20px; opacity: 0; color: var(--acid, #dfff78); }
.room-list button.active .room-arrow { opacity: 1; }
.sidebar-note { position: relative; margin-top: 32px; padding: 21px 18px; border: 1px solid #c5a4f848; background: #a980ff; color: #20102f; overflow: hidden; }
.note-symbol { position: absolute; top: 12px; right: 14px; font-size: 34px; }
.note-eyebrow { font-size: 8px; font-weight: 750; letter-spacing: .11em; }
.sidebar-note h2 { font-family: var(--font-display, sans-serif); font-size: 27px; font-weight: 750; line-height: .98; letter-spacing: -.04em; text-transform: uppercase; margin: 25px 0 12px; }
.sidebar-note p { max-width: 190px; font-size: 11px; line-height: 1.6; color: #49345d; margin: 0 0 18px; }
.sidebar-note button { display: flex; justify-content: space-between; gap: 12px; width: 100%; padding: 10px 0 0; border: 0; border-top: 1px solid #2a113533; background: none; color: #241431; font-size: 10px; font-weight: 750; }
.sidebar-bottom { margin-top: auto; padding-top: 30px; }
.clubs-link { display: flex; justify-content: space-between; font-size: 11px; padding-bottom: 20px; border-bottom: 1px solid #ffffff21; }
.clubs-link > span { font-size: 18px; color: var(--accent, #a980ff); }
.account-row { display: flex; gap: 9px; align-items: center; padding-top: 18px; }
.avatar { display: grid; place-items: center; width: 36px; height: 36px; font-size: 11px; font-weight: 750; flex-shrink: 0; color: #372143; }
.own-avatar { background: var(--acid, #dfff78); }
.account-copy { min-width: 0; flex: 1; }
.account-copy strong { display: block; font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.account-copy span { display: block; font-size: 9px; color: #b39ec9; margin-top: 5px; }
.account-row .icon-button { color: #c8b5df; width: 32px; }
.account-login { display: flex; justify-content: space-between; gap: 10px; padding-top: 20px; font-size: 11px; font-weight: 700; color: var(--acid, #dfff78) !important; }
.conversation { display: flex; flex-direction: column; flex: 1; position: relative; min-width: 0; min-height: 0; background: var(--chat-light); }
.conversation-header { display: flex; align-items: center; flex-shrink: 0; gap: 16px; min-height: 94px; padding: 17px 34px; border-bottom: 1px solid #28133325; }
.header-hash { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid #4a2b652f; font-size: 28px; color: #6e42a3; }
.room-heading { min-width: 0; }
.room-heading h1 { font-family: var(--font-display, sans-serif); font-size: 22px; font-weight: 750; letter-spacing: -.035em; text-transform: uppercase; margin: 0; }
.room-heading p { font-size: 11px; color: #776883; margin: 7px 0 0; line-height: 1.5; }
.header-actions { display: flex; align-items: center; gap: 21px; margin-left: auto; }
.connection-status { display: flex; align-items: center; gap: 7px; font-size: 10px; color: #766683; white-space: nowrap; }
.connection-status > span { width: 6px; height: 6px; background: #a695b5; }
.connection-status > span.connected { background: #5a8140; }
.icon-button { display: grid; place-items: center; flex-shrink: 0; width: 40px; height: 40px; padding: 8px; border: 0; border-radius: 0; background: transparent; color: #7b638c; font-size: 24px; }
.icon-button:hover:not(:disabled) { color: #543171; background: #ad8ac422; }
.icon-button svg { width: 21px; height: 21px; }
.conversation-notice { display: flex; align-items: center; flex-shrink: 0; gap: 12px; padding: 13px 34px; border-bottom: 1px solid #a6ad803b; background: #e7edcf; }
.notice-icon { color: #57703e; font-size: 25px; }
.conversation-notice p { font-size: 11px; line-height: 1.6; color: #626c51; margin: 0; }
.conversation-notice strong { color: #38462c; font-weight: 750; }
.notice-tag { margin-left: auto; white-space: nowrap; font-size: 8px; letter-spacing: .1em; color: #64714d; }
.message-search { display: flex; align-items: center; gap: 12px; padding: 9px 34px; border-bottom: 1px solid #28133325; background: #fff8; }
.message-search > svg { width: 19px; height: 19px; color: #8d71a1; flex-shrink: 0; }
.message-search input { min-width: 0; flex: 1; padding: 9px 0; border: 0; outline: none; background: transparent; color: #2c1c39; font-size: 13px; }
.message-search > span { font-size: 10px; color: #887094; }
.messages-area { min-height: 0; flex: 1; padding: 30px 34px 12px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #c4b2d3 transparent; overscroll-behavior: contain; }
.welcome-state { min-height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0 34px; text-align: center; }
.welcome-illustration { position: relative; width: 310px; height: 190px; margin-bottom: 22px; }
.welcome-illustration > img { width: 185px; height: 185px; position: absolute; right: 34px; top: -13px; filter: drop-shadow(0 12px 24px #8c65b13a); animation: emblem-drift 9s ease-in-out infinite; }
.welcome-star { position: absolute; right: 7px; top: 8px; font-size: 65px; line-height: 1; color: #6b429a; }
.bubble { position: absolute; display: flex; align-items: center; justify-content: space-between; gap: 18px; min-width: 229px; padding: 15px 16px; border: 1px solid #b395c848; font-size: 12px; font-weight: 650; text-align: left; box-shadow: 0 14px 26px #7c53951c; }
.bubble i { font-size: 20px; line-height: 1; font-style: normal; }
.bubble-one { background: #a980ff; color: #29123f; left: 0; top: 71px; transform: rotate(-7deg); }
.bubble-two { background: #e0f2a4; color: #374622; right: 0; top: 132px; transform: rotate(4deg); }
.welcome-kicker { font-size: 9px; color: #836898; font-weight: 750; letter-spacing: .14em; }
.welcome-state h2 { max-width: 750px; font-family: var(--font-display, sans-serif); font-size: clamp(36px, 4.3vw, 66px); line-height: .96; letter-spacing: -.05em; font-weight: 750; text-transform: uppercase; margin: 22px 0 20px; }
.welcome-state h2 em { font-style: normal; color: #7843b6; }
.welcome-state > p { max-width: 425px; font-size: 13px; line-height: 1.85; color: #776480; margin: 0 0 25px; }
.primary-link { display: flex; align-items: center; justify-content: space-between; gap: 28px; min-height: 48px; padding: 13px 18px; border: 1px solid #2a163b; border-radius: 0; background: #20112f; color: #fff !important; font-size: 11px; font-weight: 700; }
.primary-link:hover { background: #553278; }
.primary-link > span { color: var(--acid, #dfff78); font-size: 22px; }
.preview-label { font-size: 9px; color: #857190; margin-top: 18px; line-height: 1.6; }
.state-panel { display: flex; min-height: 100%; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 13px; padding: 40px; }
.state-panel h2 { font-family: var(--font-display, sans-serif); font-size: 32px; font-weight: 750; line-height: 1.05; letter-spacing: -.04em; text-transform: uppercase; margin: 8px 0 0; }
.state-panel p { max-width: 420px; font-size: 13px; line-height: 1.8; color: #7b6389; margin: 0 0 13px; }
.loading-ring { width: 34px; height: 34px; border: 2px solid #d3bedf; border-top-color: #8652b5; border-radius: 50%; animation: spin 1s linear infinite; }
.state-symbol { font-size: 44px; color: #8250b0; }
.room-introduction { display: flex; align-items: center; gap: 17px; padding: 4px 0 24px; }
.room-intro-symbol { display: grid; place-items: center; flex-shrink: 0; width: 48px; height: 48px; background: #e0c9ef; color: #754a95; font-size: 30px; }
.room-introduction h2 { font-family: var(--font-display, sans-serif); font-size: 24px; font-weight: 750; line-height: 1; letter-spacing: -.04em; text-transform: uppercase; margin: 0 0 10px; }
.room-introduction p { max-width: 540px; font-size: 11px; line-height: 1.7; color: #7f688e; margin: 0; }
.history-notice { font-size: 10px; color: #8c7698; margin: 0 0 17px; }
.date-divider { display: flex; align-items: center; gap: 15px; margin: 27px 0; font-size: 9px; color: #8a7198; letter-spacing: .1em; text-transform: uppercase; }
.date-divider::before, .date-divider::after { content: ''; flex: 1; height: 1px; background: #d9cce1; }
.message { display: flex; align-items: flex-start; gap: 12px; margin: 0 0 21px; }
.message-avatar { width: 33px; height: 33px; margin-top: 3px; }
.message-content { max-width: min(79%, 680px); min-width: 0; }
.message-meta { display: flex; align-items: center; gap: 10px; margin: 0 0 8px; }
.message-meta strong { max-width: 280px; font-size: 11px; font-weight: 750; overflow-wrap: anywhere; }
.message-meta time { font-size: 9px; color: #9279a0; white-space: nowrap; }
.message-bubble { padding: 13px 16px; background: #fff9; border: 1px solid #d2c3dd; overflow: hidden; }
.message-text { font-size: 13px; line-height: 1.75; margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; }
.message.mine { flex-direction: row-reverse; }
.message.mine .message-content { display: flex; align-items: flex-end; flex-direction: column; }
.message.mine .message-bubble { background: #e4d5f5; border-color: #c4a5df; color: #3b204e; }
.message.mine .message-meta { flex-direction: row-reverse; }
.message-footer { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 5px; min-height: 28px; }
.message-reactions { display: flex; flex-wrap: wrap; gap: 5px; }
.reaction { display: flex; align-items: center; gap: 5px; min-height: 28px; padding: 3px 7px; border: 1px solid #d2bcdf; border-radius: 3px; background: #fff9; color: #79598d; font-size: 11px !important; }
.reaction.reacted { border-color: #a278c1; background: #e6d4f4; color: #5c357b; }
.reaction span { font-size: 10px; }
.add-reaction { opacity: .75; }
.message:hover .add-reaction, .add-reaction:focus-visible { opacity: 1; }
.delete-message { border: 0; padding: 6px 2px; background: none; color: #846291; font-size: 10px !important; }
.delete-message:hover { color: #a3314c; text-decoration: underline; }
.delete-confirm { display: flex; align-items: center; flex-wrap: wrap; gap: 9px; padding: 10px; margin-top: 7px; background: #fae4e8; color: #8b3b51; font-size: 11px; }
.delete-confirm button { padding: 7px 9px; background: #fff9; border: 1px solid #d1a6b0; color: #77344a; font-size: 10px; }
.delete-confirm .confirm-danger { background: #96364e; color: #fff; border-color: #96364e; }
.message-image-link { display: block; margin-top: 7px; }
.message-image { display: block; max-width: 100%; width: auto; max-height: 290px; object-fit: contain; }
.file-attachment { display: flex; align-items: center; gap: 13px; min-width: 190px; max-width: 330px; padding: 4px 0; }
.file-attachment > span:first-child { font-size: 27px; color: #82559e; }
.file-attachment > span:nth-child(2) { overflow: hidden; flex: 1; }
.file-attachment strong { display: block; font-size: 11px; overflow-wrap: anywhere; }
.file-attachment small { display: block; font-size: 9px; color: #866695; margin-top: 5px; }
.file-attachment > span:last-child { font-size: 20px; }
.empty-state { padding: 48px 10px; text-align: center; }
.empty-state > span { font-size: 39px; color: #8150a0; }
.empty-state h3 { font-family: var(--font-display, sans-serif); font-size: 25px; line-height: 1.1; font-weight: 750; letter-spacing: -.03em; margin: 17px 0 12px; }
.empty-state p { font-size: 12px; color: #876b97; }
.text-button { border: 0; background: none; padding: 10px; color: #784599; font-size: 12px !important; }
.messages-bottom { height: 4px; }
.scroll-bottom-button { position: absolute; bottom: 179px; left: 50%; transform: translateX(-50%); border: 1px solid #bfa1d0; border-radius: 0; background: #fff; color: #77458f; padding: 11px 16px; box-shadow: 0 5px 15px #56396722; font-size: 11px; }
.scroll-bottom-button span { margin-left: 10px; }
.composer-area { position: relative; padding: 19px 34px 20px; background: var(--chat-light); flex-shrink: 0; border-top: 1px solid #28133314; }
.composer { border: 1px solid #bea3cf; background: #ffffff80; overflow: hidden; transition: border-color .2s; }
.composer:focus-within { border-color: #8654b0; box-shadow: 0 0 0 2px #a274bb12; }
.composer textarea { display: block; min-height: 50px; max-height: 150px; width: 100%; border: 0; background: transparent; resize: none; padding: 15px 17px; outline: none; color: #382147; font-size: 13px; line-height: 1.65; }
.composer textarea::placeholder { color: #927a9f; }
.composer-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 1px 10px 10px; }
.composer-toolbar > div { display: flex; align-items: center; gap: 3px; }
.attachment-limit { margin-left: 5px; font-size: 9px; color: #967fa2; }
.send-button { display: flex; align-items: center; gap: 19px; min-height: 39px; padding: 9px 15px; border: 0; background: #241232; color: #fff; font-size: 11px !important; font-weight: 650 !important; }
.send-button > span { color: var(--acid, #dfff78); font-size: 20px; }
.send-button:hover:not(:disabled) { background: #5b3478; }
.composer-hint { display: flex; justify-content: space-between; gap: 10px; margin-top: 10px; font-size: 9px; color: #957ba3; line-height: 1.5; }
.composer-hint strong { color: #7d5c8d; font-weight: 650; }
.selected-file { display: flex; align-items: center; gap: 12px; padding: 10px 12px; margin-bottom: 10px; background: #eaddf1; border: 1px solid #d7c0e1; }
.selected-file img { width: 40px; height: 40px; object-fit: cover; }
.selected-file-icon { font-size: 27px; color: #8658a0; }
.selected-file > span:nth-last-child(2) { flex: 1; min-width: 0; }
.selected-file strong { display: block; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.selected-file small { display: block; font-size: 9px; color: #916fa2; margin-top: 5px; }
.selected-file .icon-button { margin-left: auto; }
.emoji-picker { position: absolute; display: flex; flex-wrap: wrap; gap: 4px; bottom: calc(100% - 10px); left: 34px; max-width: calc(100% - 68px); padding: 10px; border: 1px solid #c0a3d1; background: #fbf7ff; box-shadow: 0 8px 25px #67427822; z-index: 3; }
.emoji-picker button { border: 0; border-radius: 0; background: transparent; min-width: 36px; min-height: 36px; padding: 5px; font-size: 21px; }
.emoji-picker button:hover { background: #ebddf3; }
.emoji-picker .emoji-close { color: #805991; font-size: 21px; }
.action-error { display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; padding: 11px 13px; margin: 0 0 12px; background: #fce2e7; border: 1px solid #e0b1c1; color: #8c3552; font-size: 11px; line-height: 1.6; }
.action-error > button { border: 0; background: none; color: inherit; font-size: 20px; }
.guest-composer { display: flex; justify-content: space-between; align-items: center; gap: 15px; padding: 19px; border: 1px solid #cdb5dc; background: #e8daf270; }
.guest-composer > span { font-size: 12px; color: #7d608d; }
.guest-composer a { font-size: 11px; font-weight: 750; color: #683687; white-space: nowrap; }
.guest-composer a span { font-size: 20px; margin-left: 14px; }
.mobile-only, .sidebar-overlay { display: none; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; clip-path: inset(50%); }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes emblem-drift { 0%, 100% { transform: rotate(-9deg) translateY(0); } 50% { transform: rotate(7deg) translateY(-8px); } }
@media (min-width: 1500px) { .conversation-header, .conversation-notice, .message-search, .messages-area, .composer-area { padding-inline: 55px; } .community-sidebar { width: 304px; padding-inline: 32px; } }
@media (max-height: 840px) and (min-width: 761px) { .community-sidebar { padding-top: 24px; } .sidebar-note { margin-top: 24px; padding: 17px; } .sidebar-note h2 { font-size: 23px; margin-top: 20px; } .sidebar-note p { display: none; } .sidebar-note button { margin-top: 17px; } .section-label { margin-top: 24px; } .sidebar-divider { margin-block: 20px; } .room-list > button { padding-block: 12px; } .welcome-illustration { width: 270px; height: 160px; margin-bottom: 12px; transform: scale(.85); } .welcome-state h2 { font-size: 46px; } .welcome-state > p { font-size: 12px; margin-bottom: 20px; } .conversation-header { min-height: 82px; } }
@media (max-width: 1050px) { .community-sidebar { width: 245px; padding-inline: 22px; } .conversation-header, .conversation-notice, .message-search, .messages-area, .composer-area { padding-inline: 24px; } .notice-tag, .connection-status { display: none; } .header-actions { gap: 8px; } .welcome-state h2 { font-size: 45px; } .message-content { max-width: 83%; } }
@media (max-width: 760px) { .community-page { min-height: 320px; } .community-sidebar { position: fixed; top: 0; left: 0; bottom: 0; width: min(310px, calc(100vw - 46px)); padding: 25px; z-index: 80; transform: translateX(-100%); visibility: hidden; transition: transform .25s, visibility .25s; box-shadow: 0 0 60px #0c061d55; } .community-sidebar.is-open { visibility: visible; transform: translateX(0); } .sidebar-overlay { display: block; position: fixed; inset: 0; z-index: 79; border: 0; background: #0b031aaa; } .mobile-only { display: grid; } .brand-row .icon-button { color: #bea8d5; } .conversation-header { min-height: 76px; padding: 13px 14px; gap: 8px; } .header-hash { display: none; } .room-heading h1 { font-size: 19px; } .room-heading p { font-size: 10px; margin-top: 5px; } .header-actions { gap: 4px; } .conversation-notice { padding: 10px 20px; gap: 10px; } .conversation-notice p { font-size: 10px; } .conversation-notice strong { display: block; } .notice-icon { font-size: 23px; } .message-search { padding: 8px 18px; gap: 8px; } .message-search input { font-size: 16px; } .message-search > span { display: none; } .messages-area { padding: 24px 20px 8px; } .welcome-state { padding: 0 0 26px; } .welcome-illustration { width: 270px; height: 170px; margin-bottom: 10px; transform: scale(.9); } .welcome-illustration > img { right: 20px; } .bubble { font-size: 11px; min-width: 210px; padding: 13px; } .bubble-one { left: -5px; } .bubble-two { right: -5px; top: 122px; } .welcome-state h2 { font-size: clamp(34px, 7.3vw, 48px); margin: 18px 0; } .welcome-state > p { max-width: 350px; font-size: 12px; line-height: 1.8; margin-bottom: 23px; } .welcome-kicker { font-size: 8px; } .preview-label { max-width: 280px; font-size: 8px; } .composer-area { padding: 13px 15px max(16px, env(safe-area-inset-bottom)); } .guest-composer { padding: 13px; gap: 10px; } .guest-composer > span { max-width: 180px; font-size: 10px; line-height: 1.6; } .guest-composer a { font-size: 10px; } .guest-composer a span { margin-left: 6px; } .room-introduction { gap: 12px; } .room-introduction h2 { font-size: 21px; } .room-introduction p { font-size: 10px; } .room-intro-symbol { width: 40px; height: 40px; font-size: 24px; } .history-notice { font-size: 9px; line-height: 1.5; } .message { gap: 8px; } .message-avatar { width: 28px; height: 28px; font-size: 9px; } .message-content { max-width: 85%; } .message-bubble { padding: 11px 13px; } .message-text { font-size: 13px; } .message-meta { gap: 7px; } .message-meta strong { font-size: 10px; } .message-meta time { font-size: 8px; } .message-footer { gap: 7px; } .file-attachment { min-width: 0; } .composer textarea { padding: 13px; font-size: 16px; } .composer-toolbar { padding-inline: 7px; } .composer-hint { font-size: 8px; } .composer-hint > span:first-child { max-width: 240px; } .attachment-limit { font-size: 8px; margin-left: 1px; } .emoji-picker { left: 15px; max-width: calc(100% - 30px); padding: 8px; gap: 0; } .emoji-picker button { min-width: 33px; font-size: 20px; padding: 4px; } .send-button { padding: 9px 11px; gap: 11px; } .state-panel { padding: 20px; } .state-panel h2 { font-size: 28px; } .state-panel p { font-size: 12px; } .scroll-bottom-button { bottom: 170px; white-space: nowrap; } }
@media (max-height: 650px) { .welcome-illustration { display: none; } .welcome-state { padding-top: 24px; } .welcome-state h2 { font-size: 34px; } .sidebar-note { display: none; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
.mini-chat .community-sidebar { display:none!important; }
.mini-chat .conversation { width:100%!important; min-width:0!important; height:100%!important; border:0!important; background:#0a141a!important; }
.mini-chat .conversation-header { min-height:43px!important; height:43px!important; padding:0 10px!important; background:#0e1a20!important; border-bottom:1px solid #6ed4d94e!important; }
.mini-chat .room-heading h1 { font-size:13px!important; color:#e8f7f3!important; }
.mini-chat .room-heading p { font-size:7px!important; color:#91b3b6!important; }
.mini-chat .header-hash { font-size:20px!important; color:#ffad72!important; }
.mini-chat .header-actions { gap:6px!important; }
.mini-chat .header-actions .connection-status { font-size:6px!important; color:#87bbb9!important; }
.mini-chat .header-actions .icon-button { width:26px!important; height:26px!important; }
.mini-chat .conversation-notice,.mini-chat .room-introduction,.mini-chat .history-notice,.mini-chat .composer-hint,.mini-chat .message-footer { display:none!important; }
.mini-chat .messages-area { flex:1!important; min-height:0!important; padding:9px!important; }
.mini-chat .welcome-state { min-height:100%!important; display:flex!important; justify-content:center!important; padding:10px!important; }
.mini-chat .welcome-illustration { height:72px!important; min-height:72px!important; margin-bottom:3px!important; transform:scale(.8)!important; }
.mini-chat .welcome-illustration>img { width:60px!important; height:60px!important; }
.mini-chat .welcome-illustration .bubble { font-size:6px!important; padding:4px 6px!important; }
.mini-chat .welcome-kicker { font-size:6px!important; }
.mini-chat .welcome-state h2 { font-size:18px!important; margin:8px 0!important; }
.mini-chat .welcome-state>p { font-size:9px!important; line-height:1.5!important; max-width:230px!important; margin-bottom:9px!important; }
.mini-chat .primary-link { font-size:8px!important; padding:8px 10px!important; }
.mini-chat .preview-label { font-size:6px!important; }
.mini-chat .message { gap:6px!important; margin:8px 0!important; }
.mini-chat .message-avatar { width:22px!important; height:22px!important; font-size:8px!important; }
.mini-chat .message-meta { font-size:7px!important; }
.mini-chat .message-bubble { padding:7px!important; font-size:9px!important; }
.mini-chat .composer-area { padding:7px!important; background:#0d191f!important; border-top:1px solid #70d4d845!important; }
.mini-chat .composer { padding:6px!important; }
.mini-chat .composer textarea { min-height:36px!important; font-size:9px!important; }
.mini-chat .composer-toolbar { padding-top:5px!important; }
.mini-chat .composer-toolbar .icon-button { width:26px!important; height:26px!important; }
.mini-chat .attachment-limit { font-size:6px!important; }
.mini-chat .send-button { font-size:7px!important; padding:7px!important; }
.mini-chat .guest-composer { font-size:7px!important; padding:8px!important; }
.mini-chat .guest-composer a { font-size:7px!important; }
.mini-chat .state-panel { padding:12px!important; }
.mini-chat .state-panel h2 { font-size:15px!important; }
.mini-chat .state-panel p { font-size:8px!important; }
</style>







