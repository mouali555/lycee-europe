<template>
  <main class="community-page">
    <button v-if="sidebarOpen" class="sidebar-overlay" aria-label="Fermer les salons" @click="sidebarOpen = false"></button>
    <aside id="community-sidebar" class="community-sidebar" :class="{ 'is-open': sidebarOpen }">
      <div class="brand-row"><NuxtLink to="/" class="community-brand" aria-label="Lycée Europe — Accueil"><span class="brand-mark" aria-hidden="true">e<span>↗</span></span><span>lycée<br><strong>europe.</strong></span></NuxtLink><button class="icon-button mobile-only" aria-label="Fermer les salons" @click="sidebarOpen = false">×</button></div>
      <NuxtLink to="/" class="back-to-site"><span aria-hidden="true">←</span> Retour au site</NuxtLink>
      <div class="sidebar-divider"></div>
      <div class="workspace-label"><span class="workspace-symbol" aria-hidden="true">✳</span><div><strong>Le collectif</strong><span>L’espace des élèves</span></div><span class="workspace-dot" aria-hidden="true"></span></div>
      <p class="section-label">VOS SALONS <span>03</span></p>
      <nav class="room-list" aria-label="Salons de discussion">
        <button v-for="room in rooms" :key="room.id" :class="{ active: currentRoom === room.id }" :aria-current="currentRoom === room.id ? 'page' : undefined" @click="joinRoom(room.id)"><span class="room-hash" aria-hidden="true">#</span><span>{{ room.name }}<small>{{ room.short }}</small></span><span class="room-arrow" aria-hidden="true">↗</span></button>
      </nav>
      <div class="sidebar-note"><span class="note-symbol" aria-hidden="true">↗</span><span class="note-eyebrow">ON AVANCE ENSEMBLE</span><h2>Une question ?<br>Il y a un salon<br>pour ça.</h2><p>Les petites questions font aussi les grandes conversations.</p><button @click="joinRoom('entraide')">Trouver de l’entraide <span aria-hidden="true">↗</span></button></div>
      <div class="sidebar-bottom">
        <NuxtLink to="/clubs" class="clubs-link">Découvrir les clubs <span aria-hidden="true">↗</span></NuxtLink>
        <div v-if="currentUser" class="account-row"><span class="avatar own-avatar">{{ initials(userName) }}</span><div class="account-copy"><strong>{{ userName }}</strong><span>Votre espace personnel</span></div><button class="icon-button" :disabled="isSigningOut || isSending" aria-label="Se déconnecter" title="Se déconnecter" @click="handleLogout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 4H4v16h6m4-13 5 5-5 5m-6-5h11"/></svg></button></div>
        <NuxtLink v-else to="/login" class="account-login">Rejoindre la communauté <span aria-hidden="true">↗</span></NuxtLink>
      </div>
    </aside>

    <section class="conversation" aria-labelledby="room-title">
      <header class="conversation-header">
        <button class="icon-button mobile-only" aria-label="Ouvrir les salons" aria-controls="community-sidebar" :aria-expanded="sidebarOpen" @click="sidebarOpen = true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        <span class="header-hash" aria-hidden="true">#</span><div class="room-heading"><h1 id="room-title">{{ activeRoom.name }}</h1><p>{{ activeRoom.description }}</p></div>
        <div class="header-actions"><span class="connection-status"><span :class="{ connected: currentUser && !messagesError }"></span>{{ !authReady ? 'Chargement' : currentUser ? (messagesError ? 'Connexion interrompue' : 'Espace connecté') : 'Aperçu de l’espace' }}</span><button class="icon-button" aria-label="Rechercher dans les messages" :aria-expanded="showSearch" @click="toggleSearch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button></div>
      </header>
      <div v-if="showSearch" class="message-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg><input ref="searchInput" v-model="search" aria-label="Rechercher un message ou un fichier" placeholder="Rechercher un message ou un fichier…" @keydown.esc="closeSearch" /><span v-if="search && currentUser">{{ displayedMessages.length }} résultat{{ displayedMessages.length > 1 ? 's' : '' }}</span><button class="icon-button" aria-label="Fermer la recherche" @click="closeSearch">×</button></div>
      <div class="conversation-notice"><span class="notice-icon" aria-hidden="true">↗</span><p><strong>Un espace qui nous ressemble.</strong> Partageons nos idées avec respect, curiosité et bienveillance.</p><span class="notice-tag">LE COLLECTIF EUROPE</span></div>

      <div ref="messagesArea" class="messages-area" @scroll="handleScroll">
        <div v-if="!authReady || messagesLoading" class="state-panel" role="status"><span class="loading-ring" aria-hidden="true"></span><h2>On vous ouvre la porte…</h2><p>Chargement de votre espace.</p></div>
        <div v-else-if="!currentUser" class="welcome-state">
          <div class="welcome-illustration" aria-hidden="true"><span class="welcome-star">✳</span><span class="bubble bubble-one">Bonjour, le collectif.<i>↗</i></span><span class="bubble bubble-two">Une idée à partager ?<i>✧</i></span><span class="bubble bubble-three">On en parle ensemble.<i>↗</i></span></div>
          <span class="welcome-kicker">BIENVENUE DANS #{{ activeRoom.name.toUpperCase() }}</span><h2>{{ activeRoom.welcome }}<br><em>ensemble.</em></h2><p>{{ activeRoom.intro }} Connectez-vous pour retrouver les messages et rejoindre la conversation.</p><NuxtLink to="/login" class="primary-link">Rejoindre les échanges <span aria-hidden="true">↗</span></NuxtLink><span class="preview-label">Aperçu de l’espace · Aucun message affiché hors connexion</span>
        </div>
        <div v-else-if="messagesError" class="state-panel error-state" role="alert"><span class="state-symbol" aria-hidden="true">↻</span><h2>La conversation fait une pause.</h2><p>{{ messagesError }}</p><button class="primary-link" @click="subscribeToMessages">Réessayer <span aria-hidden="true">↻</span></button></div>
        <template v-else>
          <div class="room-introduction"><span class="room-intro-symbol" aria-hidden="true">#</span><div><h2>Bienvenue dans {{ activeRoom.name }}.</h2><p>{{ activeRoom.intro }}</p></div></div>
          <p class="history-notice">Historique récent · Les 150 dernières publications du collectif</p>
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
        <div v-else class="guest-composer"><span>Votre prochaine conversation commence ici.</span><NuxtLink to="/login">Se connecter <span aria-hidden="true">↗</span></NuxtLink></div>
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
const { $firebase, $firebaseConfigured } = useNuxtApp()
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
const messagesLoading = ref(false)
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

const displayedMessages = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('fr')
  return allMessages.value.filter(message => (message.room || 'general') === currentRoom.value && (!term || [message.text, message.fileName, authorName(message)].some(value => String(value || '').toLocaleLowerCase('fr').includes(term))))
})

onMounted(() => {
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
      else { messagesLoading.value = false; messagesError.value = ''; draft.value = ''; clearSelectedFile() }
    }, () => {
      subscriptionVersion++
      unsubscribeMessages?.()
      currentUser.value = null
      allMessages.value = []
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
  clearSelectedFile()
})

function subscribeToMessages() {
  unsubscribeMessages?.()
  if (!currentUser.value || !$firebase) return
  const version = ++subscriptionVersion
  messagesLoading.value = true
  messagesError.value = ''
  let firstSnapshot = true
  const messagesQuery = query(collection(getFirestore($firebase), 'messages'), orderBy('createdAt', 'desc'), limit(150))
  unsubscribeMessages = onSnapshot(messagesQuery, snapshot => {
    if (disposed || version !== subscriptionVersion) return
    const shouldScroll = firstSnapshot || !showScrollButton.value
    allMessages.value = snapshot.docs.map(item => ({ ...item.data(), id: item.id })).filter(message => !message.isPresence && message.room !== '__presence__').reverse()
    messagesLoading.value = false
    firstSnapshot = false
    if (shouldScroll && !search.value) nextTick(scrollToBottom)
  }, error => {
    if (disposed || version !== subscriptionVersion) return
    messagesLoading.value = false
    messagesError.value = error.code === 'permission-denied' ? 'Votre compte ne peut pas encore accéder aux échanges. Contactez l’équipe du lycée pour vérifier votre accès.' : 'Impossible de charger les messages pour le moment. Vérifiez votre connexion, puis réessayez.'
  })
}

function joinRoom(roomId) {
  if (!rooms.some(room => room.id === roomId)) return
  currentRoom.value = roomId
  sidebarOpen.value = false
  pendingDelete.value = null
  search.value = ''
  nextTick(scrollToBottom)
}
async function toggleSearch() { showSearch.value = !showSearch.value; if (showSearch.value) { await nextTick(); searchInput.value?.focus() } else search.value = '' }
function closeSearch() { showSearch.value = false; search.value = '' }
function authorName(message) { return message.displayName || message.author || message.email?.split('@')[0] || 'Élève' }
function initials(name) { return String(name || 'E').trim().split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase() }
function avatarColor(uid) { const palette = ['#dce5ff', '#e6ecc5', '#f3decf', '#d6e9e3', '#e8dff4']; const hash = Array.from(uid || '').reduce((value, char) => value + char.charCodeAt(0), 0); return palette[hash % palette.length] }
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
function handleMessageKeydown(event) { if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); sendMessage() } if (event.key === 'Escape') emojiOpen.value = false }
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
      await new Promise((resolve, reject) => uploadTask.on('state_changed', snapshot => { uploadProgress.value = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100) }, reject, resolve))
      payload.fileUrl = await getDownloadURL(uploadedRef)
      payload.fileName = file.name; payload.fileSize = file.size; payload.fileType = file.type
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
  try { await deleteDoc(doc(getFirestore($firebase), 'messages', message.id)); pendingDelete.value = null }
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
.community-page{display:flex;height:100svh;min-height:520px;overflow:hidden;background:#fff;color:#162b32;font-family:'Manrope',sans-serif}.community-page *{box-sizing:border-box}.community-page button,.community-page input,.community-page textarea{font:inherit}.community-page button{cursor:pointer}.community-page button:disabled{opacity:.5;cursor:not-allowed}.community-page a{color:inherit;text-decoration:none}.community-page :focus-visible{outline:3px solid #91a4ff;outline-offset:3px}.community-sidebar{width:270px;background:#f5f5ed;border-right:1px solid #e4e7df;display:flex;flex-direction:column;flex-shrink:0;padding:29px 24px 20px;overflow-y:auto}.brand-row{display:flex;justify-content:space-between;align-items:center}.community-brand{display:flex;gap:10px;align-items:center;width:fit-content;font-size:14px;line-height:1.03;letter-spacing:-.4px}.community-brand strong{font-size:22px;font-weight:750}.brand-mark{width:43px;height:43px;display:flex;align-items:center;justify-content:center;font-size:40px;line-height:1;font-weight:800;letter-spacing:-5px;color:#fff;background:#2748df;border-radius:5px;position:relative;padding:0 8px 6px 0}.brand-mark span{font-size:18px;letter-spacing:-3px;position:absolute;right:5px;top:4px}.back-to-site{display:flex;align-items:center;gap:9px;font-size:10px;color:#728078!important;margin-top:26px}.back-to-site span{font-size:16px}.sidebar-divider{height:1px;background:#dde2d6;margin:23px 0}.workspace-label{display:flex;gap:11px;align-items:center}.workspace-symbol{display:grid;place-items:center;width:36px;height:36px;border:1px solid #dce3d2;border-radius:9px;background:#fff;font-size:27px;color:#2748df}.workspace-label strong{font-size:12px;display:block;font-weight:750}.workspace-label div>span{display:block;font-size:9px;color:#788377;margin-top:4px}.workspace-dot{width:5px;height:5px;background:#2748df;border-radius:50%;margin-left:auto}.section-label{font-size:9px;font-weight:750;color:#929c8d;letter-spacing:1.3px;margin:35px 0 15px;display:flex;justify-content:space-between}.section-label>span{font-size:8px;border:1px solid #dce2d4;padding:1px 5px;border-radius:3px;letter-spacing:0}.room-list{display:flex;flex-direction:column;gap:7px;margin:0 -8px}.room-list>button{display:flex;align-items:center;width:100%;text-align:left;border:1px solid transparent;border-radius:7px;background:transparent;padding:13px 12px;gap:11px;color:#637367}.room-list>button.active{background:#e7eccf;border-color:#dae3b7;color:#28391c}.room-list>button:hover{background:#ebeedf}.room-hash{font-size:20px;font-weight:450;color:#8b9880}.room-list>button>span:nth-child(2){font-size:12px;font-weight:700}.room-list small{font-size:9px;font-weight:400;display:block;margin-top:3px;color:#849078}.room-arrow{margin-left:auto;opacity:0;font-size:17px}.room-list button.active .room-arrow{opacity:1}.sidebar-note{position:relative;background:#e5ef97;padding:22px 19px 18px;margin-top:37px;border-radius:5px;overflow:hidden}.note-symbol{position:absolute;top:12px;right:14px;font-size:30px}.note-eyebrow{font-size:7px;letter-spacing:1px;font-weight:800}.sidebar-note h2{font-size:23px;line-height:1.15;letter-spacing:-.7px;font-weight:600;margin:21px 0 12px}.sidebar-note p{font-size:9px;color:#667440;line-height:1.7;max-width:145px;margin-bottom:18px}.sidebar-note button{display:flex;justify-content:space-between;gap:14px;border:0;background:none;padding:0;font-size:9px;font-weight:750;color:#162b32}.sidebar-bottom{margin-top:auto;padding-top:25px}.clubs-link{font-size:10px;display:flex;justify-content:space-between;padding-bottom:21px;border-bottom:1px solid #dde2d6}.clubs-link>span{font-size:14px}.account-row{padding-top:18px;display:flex;gap:9px;align-items:center}.avatar{display:grid;place-items:center;width:35px;height:35px;border-radius:50%;font-size:10px;font-weight:750;flex-shrink:0;color:#354a49}.own-avatar{background:#dee5fc}.account-copy{min-width:0;flex:1}.account-copy strong{font-size:10px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-copy span{display:block;font-size:8px;color:#89937f;margin-top:4px}.account-row .icon-button{width:25px;height:30px}.account-login{font-size:10px;display:flex;justify-content:space-between;gap:10px;padding-top:21px;font-weight:700;color:#2748df!important}.conversation{display:flex;flex-direction:column;min-width:0;flex:1;position:relative;background:#fff}.conversation-header{height:96px;display:flex;align-items:center;gap:15px;padding:0 35px;border-bottom:1px solid #e9ece5;flex-shrink:0}.header-hash{width:39px;height:39px;display:grid;place-items:center;background:#f1f3e9;border-radius:10px;font-size:24px;color:#77866e}.room-heading h1{font-size:18px;font-weight:750;margin:0;letter-spacing:-.5px}.room-heading p{font-size:10px;color:#849184;margin:7px 0 0}.header-actions{display:flex;align-items:center;gap:22px;margin-left:auto}.connection-status{font-size:9px;color:#8c978b;display:flex;align-items:center;gap:7px;white-space:nowrap}.connection-status>span{width:5px;height:5px;background:#b4bcae;border-radius:50%}.connection-status>span.connected{background:#67884e}.icon-button{border:0;background:transparent;color:#7b897d;width:33px;height:33px;display:grid;place-items:center;font-size:23px;border-radius:5px;padding:6px;flex-shrink:0}.icon-button:hover{background:#edf0e6;color:#2748df}.icon-button svg{width:19px;height:19px}.conversation-notice{display:flex;align-items:center;gap:11px;padding:14px 34px;background:#fafbf6;border-bottom:1px solid #edf0e5;flex-shrink:0}.notice-icon{font-size:18px;color:#81954b}.conversation-notice p{font-size:9px;line-height:1.6;color:#89927e;margin:0}.conversation-notice strong{font-weight:700;color:#526345}.notice-tag{margin-left:auto;white-space:nowrap;color:#9aa28e;font-size:7px;letter-spacing:1px}.message-search{display:flex;align-items:center;gap:12px;padding:10px 34px;background:#f8fafb;border-bottom:1px solid #e1e7eb}.message-search>svg{width:18px;height:18px;color:#8b96a2;flex-shrink:0}.message-search input{border:0;background:transparent;color:#162b32;outline:none;flex:1;min-width:0;font-size:12px;padding:7px 0}.message-search>span{font-size:9px;color:#849184}.messages-area{flex:1;overflow-y:auto;padding:28px 35px 10px;scrollbar-width:thin;scrollbar-color:#d8dfd0 transparent;overscroll-behavior:contain}.welcome-state{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:15px 0 36px}.welcome-illustration{width:310px;height:180px;position:relative;margin-bottom:27px}.welcome-star{position:absolute;right:0;top:0;color:#e5ef97;font-size:118px;line-height:1;transform:rotate(12deg)}.bubble{position:absolute;border-radius:9px;padding:15px 19px;font-size:12px;font-weight:650;min-width:226px;text-align:left;display:flex;justify-content:space-between;gap:18px;box-shadow:0 10px 18px #162b3208}.bubble i{font-size:18px;font-style:normal;line-height:1}.bubble-one{background:#2748df;color:#fff;top:5px;left:0;transform:rotate(-6deg)}.bubble-two{background:#f1f3e8;color:#5d6c4c;top:63px;left:65px;transform:rotate(4deg)}.bubble-three{background:#e5ef97;color:#344921;top:121px;left:9px;transform:rotate(-3deg)}.welcome-kicker{font-size:8px;color:#8b977c;letter-spacing:1.7px;font-weight:700}.welcome-state h2{font-size:42px;line-height:1.08;font-weight:550;letter-spacing:-1.9px;margin:20px 0 16px}.welcome-state h2 em{font-family:Georgia,serif;font-weight:400;color:#2748df}.welcome-state>p{max-width:390px;font-size:11px;line-height:1.85;color:#819080;margin:0 0 26px}.primary-link{display:flex;align-items:center;justify-content:space-between;gap:30px;background:#2748df;color:white!important;border:0;border-radius:5px;padding:14px 18px;font-size:11px;font-weight:650}.primary-link:hover{background:#1b39c0}.primary-link>span{font-size:18px}.preview-label{font-size:8px;color:#a2aa9b;margin-top:17px}.state-panel{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:12px;padding:45px}.state-panel h2{font-size:24px;font-weight:550;letter-spacing:-.7px;margin:7px 0 0}.state-panel p{font-size:12px;max-width:390px;line-height:1.8;color:#82907e;margin:0 0 10px}.loading-ring{width:33px;height:33px;border:2px solid #e2e8db;border-top-color:#2748df;border-radius:50%;animation:spin 1s linear infinite}.state-symbol{font-size:39px;color:#2748df}.room-introduction{display:flex;gap:17px;padding:7px 0 25px;align-items:center}.room-intro-symbol{display:grid;place-items:center;width:49px;height:49px;background:#edf1dc;border-radius:13px;font-size:27px;color:#869967;flex-shrink:0}.room-introduction h2{font-size:21px;letter-spacing:-.6px;font-weight:650;margin:0 0 8px}.room-introduction p{font-size:10px;line-height:1.7;color:#8a9783;max-width:520px;margin:0}.history-notice{font-size:8px;color:#acb4a5;margin:0 0 15px}.date-divider{display:flex;gap:15px;align-items:center;margin:26px 0 25px;color:#9aa78d;font-size:8px;text-transform:uppercase;letter-spacing:1px}.date-divider:before,.date-divider:after{content:'';height:1px;background:#eef1e7;flex:1}.message{display:flex;align-items:flex-start;gap:11px;margin:0 0 18px}.message-avatar{margin-top:3px;width:32px;height:32px}.message-content{max-width:min(78%,650px);min-width:0}.message-meta{display:flex;align-items:center;gap:10px;margin:0 0 7px}.message-meta strong{font-size:10px;font-weight:750;max-width:280px;overflow-wrap:anywhere}.message-meta time{font-size:8px;color:#a3ad9b;white-space:nowrap}.message-bubble{padding:12px 16px;background:#f2f4ed;border:1px solid #edf0e6;border-radius:0 11px 11px 11px;overflow:hidden}.message-text{margin:0;font-size:12px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere}.message.mine{flex-direction:row-reverse}.message.mine .message-content{display:flex;align-items:flex-end;flex-direction:column}.message.mine .message-bubble{background:#edf1ff;border-color:#e6ebff;border-radius:11px 0 11px 11px;color:#283e79}.message.mine .message-meta{flex-direction:row-reverse}.message-footer{display:flex;align-items:center;gap:14px;margin-top:5px;min-height:24px}.message-reactions{display:flex;gap:5px;flex-wrap:wrap}.reaction{border:1px solid #e6ebdf;background:#fff;border-radius:10px;padding:2px 7px;font-size:10px!important;display:flex;gap:5px;align-items:center;min-height:24px;color:#7c8a70}.reaction.reacted{background:#e9edff;border-color:#b7c5f7;color:#2748df}.reaction span{font-size:9px}.add-reaction{opacity:.3;font-size:9px!important}.message:hover .add-reaction,.add-reaction:focus-visible{opacity:1}.delete-message{background:none;border:0;padding:3px 0;font-size:8px!important;color:#a8afa2;opacity:.5}.message:hover .delete-message,.delete-message:focus-visible{opacity:1}.delete-message:hover{color:#ba4b37}.delete-confirm{display:flex;align-items:center;gap:9px;padding:10px;background:#fff2ed;border-radius:5px;margin-top:7px;font-size:9px;flex-wrap:wrap}.delete-confirm button{padding:5px 8px;background:#fff;border:1px solid #ecd3cb;border-radius:3px;font-size:9px}.delete-confirm .confirm-danger{color:#fff;background:#ac462e;border-color:#ac462e}.message-image-link{display:block;margin-top:7px}.message-image{max-width:100%;width:auto;max-height:280px;border-radius:6px;display:block;object-fit:contain}.file-attachment{display:flex;gap:13px;align-items:center;min-width:200px;max-width:320px;padding:4px 0}.file-attachment>span:first-child{font-size:25px;color:#718054}.file-attachment>span:nth-child(2){overflow:hidden;flex:1}.file-attachment strong{display:block;font-size:10px;overflow-wrap:anywhere}.file-attachment small{display:block;font-size:8px;color:#8e9b81;margin-top:5px}.file-attachment>span:last-child{font-size:18px}.empty-state{padding:50px 10px;text-align:center}.empty-state>span{font-size:34px;color:#a6b682}.empty-state h3{font-size:19px;font-weight:550;letter-spacing:-.4px;margin:16px 0 10px}.empty-state p{font-size:11px;color:#8b9981}.text-button{border:0;background:none;padding:8px;color:#2748df;font-size:11px!important}.messages-bottom{height:4px}.scroll-bottom-button{position:absolute;bottom:165px;left:50%;transform:translateX(-50%);border:1px solid #d8e1c9;border-radius:20px;background:#f3f7e8;color:#536a38;padding:10px 16px;font-size:10px;box-shadow:0 5px 15px #162b3210}.scroll-bottom-button span{margin-left:10px}.composer-area{position:relative;padding:18px 34px 19px;background:#fff;flex-shrink:0}.composer{border:1px solid #dfe6d5;border-radius:9px;background:#fff;overflow:hidden;transition:border-color .2s,box-shadow .2s}.composer:focus-within{border-color:#a7b4e7;box-shadow:0 0 0 3px #2748df08}.composer textarea{display:block;min-height:48px;max-height:150px;width:100%;border:0;background:transparent;resize:none;padding:15px 17px;outline:none;color:#162b32;font-size:12px;line-height:1.6}.composer textarea::placeholder{color:#a0ab95}.composer-toolbar{display:flex;justify-content:space-between;align-items:center;padding:4px 10px 10px}.composer-toolbar>div{display:flex;align-items:center;gap:3px}.attachment-limit{font-size:8px;color:#a6af9d;margin-left:5px}.send-button{border:0;background:#2748df;color:#fff;border-radius:5px;padding:9px 14px;font-size:10px!important;font-weight:650!important;display:flex;align-items:center;gap:15px}.send-button>span{font-size:17px}.send-button:hover{background:#1839c6}.composer-hint{font-size:8px;color:#a3ad9a;display:flex;justify-content:space-between;gap:10px;margin-top:10px}.composer-hint strong{font-weight:600;color:#869579}.selected-file{padding:10px 12px;margin-bottom:10px;display:flex;align-items:center;gap:12px;background:#f3f5ed;border:1px solid #e4eadb;border-radius:7px}.selected-file img{width:38px;height:38px;object-fit:cover;border-radius:4px}.selected-file-icon{font-size:24px;color:#8f9e75}.selected-file>span:nth-last-child(2){flex:1;min-width:0}.selected-file strong{font-size:10px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.selected-file small{font-size:8px;color:#8c9a7e;display:block;margin-top:5px}.selected-file .icon-button{margin-left:auto}.emoji-picker{position:absolute;bottom:calc(100% - 10px);left:34px;display:flex;gap:5px;padding:10px;background:#fff;border:1px solid #e1e8d8;border-radius:9px;box-shadow:0 8px 30px #162b3212;z-index:3}.emoji-picker button{border:0;border-radius:5px;background:transparent;font-size:20px;padding:5px}.emoji-picker button:hover{background:#eff3e6}.emoji-picker .emoji-close{font-size:16px;color:#8c987e}.action-error{font-size:10px;line-height:1.6;background:#fff2ed;border:1px solid #f0d5c9;color:#9c4a34;display:flex;gap:15px;justify-content:space-between;padding:10px 13px;border-radius:6px;margin:0 0 12px}.action-error>button{background:none;border:0;font-size:18px;color:inherit}.guest-composer{border:1px solid #e3e9db;border-radius:8px;padding:15px 18px;display:flex;align-items:center;justify-content:space-between;gap:15px;background:#fafbf6}.guest-composer>span{font-size:11px;color:#94a084}.guest-composer a{font-size:10px;font-weight:700;color:#2748df;white-space:nowrap}.guest-composer a span{font-size:16px;margin-left:15px}.mobile-only,.sidebar-overlay{display:none}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%)}@keyframes spin{to{transform:rotate(360deg)}}
@media(min-width:1500px){.conversation-header,.conversation-notice,.message-search{padding-left:55px;padding-right:55px}.messages-area{padding-left:55px;padding-right:55px}.composer-area{padding-left:55px;padding-right:55px}.community-sidebar{width:290px;padding-left:30px;padding-right:30px}.welcome-state h2{font-size:49px}.welcome-illustration{transform:scale(1.1);margin-bottom:40px}}
@media(max-height:800px) and (min-width:761px){.sidebar-note{margin-top:25px;padding:16px}.sidebar-note h2{font-size:20px;margin-top:14px}.sidebar-note p{display:none}.sidebar-note button{margin-top:13px}.community-sidebar{padding-top:22px}.section-label{margin-top:24px}.room-list>button{padding-top:10px;padding-bottom:10px}.sidebar-divider{margin:18px 0}.welcome-illustration{height:151px;transform:scale(.85);margin-bottom:10px}.welcome-state h2{font-size:37px;margin:16px 0 13px}.welcome-state>p{margin-bottom:20px}.welcome-state{padding-top:0}.conversation-header{height:82px}}
@media(max-width:1000px){.community-sidebar{width:235px;padding-left:20px;padding-right:20px}.conversation-header{padding:0 24px}.conversation-notice{padding:13px 24px}.notice-tag{display:none}.messages-area{padding:22px 24px 10px}.composer-area{padding:16px 24px}.header-actions{gap:12px}.connection-status{display:none}.welcome-state h2{font-size:38px}.welcome-state>p{max-width:350px}.message-content{max-width:83%}}
@media(max-width:760px){.community-page{min-height:420px}.community-sidebar{position:fixed;left:0;top:0;bottom:0;width:275px;z-index:80;transform:translateX(-100%);transition:transform .25s ease;box-shadow:0 0 50px #162b321a;padding:25px}.community-sidebar.is-open{transform:translateX(0)}.sidebar-overlay{display:block;position:fixed;inset:0;background:#162b3259;z-index:79;border:0}.mobile-only{display:grid}.conversation-header{height:76px;padding:0 15px;gap:10px}.header-hash{display:none}.room-heading h1{font-size:16px}.room-heading p{font-size:9px;margin-top:5px}.header-actions{gap:5px}.conversation-notice{padding:11px 19px;gap:9px}.conversation-notice p{font-size:8px}.conversation-notice strong{display:block}.notice-icon{font-size:22px}.message-search{padding:8px 18px;gap:8px}.message-search input{font-size:10px}.message-search>span{display:none}.messages-area{padding:22px 19px 8px}.welcome-state{padding:0 0 25px;min-height:100%}.welcome-illustration{transform:scale(.85);height:160px;margin-bottom:8px;width:300px}.welcome-state h2{font-size:35px;letter-spacing:-1.4px;margin:16px 0 13px}.welcome-state>p{font-size:10px;line-height:1.8;max-width:315px;margin-bottom:22px}.preview-label{font-size:7px;max-width:290px;line-height:1.5}.welcome-kicker{font-size:7px}.primary-link{font-size:10px;padding:12px 16px}.composer-area{padding:11px 14px 15px}.guest-composer{padding:12px 14px}.guest-composer>span{font-size:9px;max-width:150px;line-height:1.6}.guest-composer a{font-size:9px}.guest-composer a span{margin-left:5px}.room-introduction h2{font-size:18px}.room-introduction p{font-size:9px}.room-intro-symbol{width:40px;height:40px;font-size:23px}.room-introduction{gap:11px}.message{gap:8px}.message-avatar{width:27px;height:27px;font-size:8px}.message-content{max-width:85%}.message-text{font-size:11px}.message-bubble{padding:10px 12px}.message-meta strong{font-size:9px}.message-footer{gap:10px}.delete-message{opacity:1}.add-reaction{opacity:.75}.composer textarea{font-size:11px;padding:13px}.composer-hint{font-size:7px}.composer-hint>span:first-child{max-width:240px;line-height:1.5}.emoji-picker{left:14px;gap:1px;padding:8px}.emoji-picker button{font-size:18px;padding:4px}.attachment-limit{font-size:7px}.state-panel{padding:20px}.state-panel h2{font-size:21px}.state-panel p{font-size:11px}.file-attachment{min-width:0}.scroll-bottom-button{bottom:155px;white-space:nowrap}}
@media(max-height:650px){.welcome-illustration{display:none}.welcome-state{padding-top:18px}.welcome-state h2{font-size:32px}.sidebar-note{display:none}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
@media(max-width:760px){.community-sidebar{visibility:hidden}.community-sidebar.is-open{visibility:visible}}
</style>
