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
/* ── Base ─────────────────────────────────────────────────────── */
.community-page{display:flex;height:100svh;min-height:520px;overflow:hidden;background:var(--void);color:var(--white);font-family:var(--font-body)}
.community-page *{box-sizing:border-box}
.community-page button,.community-page input,.community-page textarea{font:inherit}
.community-page button{cursor:pointer}
.community-page button:disabled{opacity:.5;cursor:not-allowed}
.community-page a{color:inherit;text-decoration:none}
.community-page :focus-visible{outline:2px solid var(--acid);outline-offset:3px;border-radius:2px}

/* ── Sidebar ──────────────────────────────────────────────────── */
.community-sidebar{
  width:272px;background:var(--onyx);border-right:1px solid rgba(250,250,250,.07);
  display:flex;flex-direction:column;flex-shrink:0;padding:24px 20px 20px;overflow-y:auto;
}
.brand-row{display:flex;justify-content:space-between;align-items:center}
.community-brand{display:flex;gap:10px;align-items:center;width:fit-content}
.brand-mark{
  width:40px;height:40px;border-radius:4px;
  background:var(--acid);color:var(--void);
  font-family:var(--font-display);font-size:24px;font-weight:800;
  display:grid;place-items:center;line-height:1;flex-shrink:0;position:relative;
}
.brand-mark>span{font-size:14px;position:absolute;right:4px;top:3px;color:var(--void);opacity:.6}
.community-brand>span{font-family:var(--font-display);font-size:14px;letter-spacing:-.04em;line-height:1.1}
.community-brand strong{display:block;font-size:18px;font-weight:800}
.back-to-site{
  display:flex;align-items:center;gap:8px;
  font-family:var(--font-mono);font-size:9px;letter-spacing:.15em;text-transform:uppercase;
  color:var(--white-muted);margin-top:20px;transition:color var(--t-fast);
}
.back-to-site:hover{color:var(--white)}
.back-to-site>span{font-size:14px}
.sidebar-divider{height:1px;background:rgba(250,250,250,.07);margin:20px 0}
.workspace-label{display:flex;gap:10px;align-items:center}
.workspace-symbol{
  display:grid;place-items:center;width:34px;height:34px;
  border:1px solid rgba(250,250,250,.1);border-radius:6px;
  font-size:20px;color:var(--acid);flex-shrink:0;
}
.workspace-label strong{font-family:var(--font-display);font-size:12px;font-weight:700;display:block}
.workspace-label div>span{display:block;font-size:9px;color:var(--white-muted);margin-top:3px}
.workspace-dot{width:5px;height:5px;background:var(--acid);border-radius:50%;margin-left:auto;animation:pulse-dot 2s ease infinite}
@keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:.3}}
.section-label{
  font-family:var(--font-mono);font-size:8px;letter-spacing:.2em;text-transform:uppercase;
  color:var(--white-muted);margin:28px 0 12px;
  display:flex;justify-content:space-between;align-items:center;
}
.section-label>span{
  border:1px solid rgba(250,250,250,.1);padding:2px 6px;border-radius:2px;letter-spacing:0;font-size:8px;
}
.room-list{display:flex;flex-direction:column;gap:4px}
.room-list>button{
  display:flex;align-items:center;width:100%;text-align:left;
  border:1px solid transparent;border-radius:var(--r-sm);
  background:transparent;padding:11px 10px;gap:10px;
  color:var(--white-muted);transition:all var(--t-fast);
}
.room-list>button.active{background:rgba(204,255,0,.08);border-color:rgba(204,255,0,.2);color:var(--white)}
.room-list>button:hover:not(.active){background:rgba(250,250,250,.05);color:var(--white)}
.room-hash{font-size:18px;color:var(--acid);opacity:.7}
.room-list>button.active .room-hash{opacity:1}
.room-list>button>span:nth-child(2){font-family:var(--font-display);font-size:12px;font-weight:700}
.room-list small{font-size:9px;font-weight:400;display:block;margin-top:2px;color:var(--white-muted)}
.room-arrow{margin-left:auto;opacity:0;font-size:15px;color:var(--acid)}
.room-list button.active .room-arrow{opacity:1}

.sidebar-note{
  position:relative;background:var(--acid);color:var(--void);
  padding:20px 18px 16px;margin-top:28px;border-radius:var(--r-sm);overflow:hidden;
}
.note-symbol{position:absolute;top:10px;right:12px;font-size:24px;opacity:.5}
.note-eyebrow{font-family:var(--font-mono);font-size:7px;letter-spacing:.18em;text-transform:uppercase;font-weight:700}
.sidebar-note h2{font-family:var(--font-display);font-size:20px;line-height:1.1;letter-spacing:-.04em;font-weight:800;margin:14px 0 10px}
.sidebar-note p{font-size:9px;line-height:1.7;opacity:.7;max-width:140px;margin-bottom:14px}
.sidebar-note button{
  display:flex;justify-content:space-between;gap:12px;border:0;background:rgba(0,0,0,.15);
  padding:8px 12px;border-radius:var(--r-sm);font-size:9px;font-weight:700;color:var(--void);
  width:100%;
}
.sidebar-note button:hover{background:rgba(0,0,0,.25)}

.sidebar-bottom{margin-top:auto;padding-top:20px}
.clubs-link{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;
  display:flex;justify-content:space-between;padding-bottom:16px;
  border-bottom:1px solid rgba(250,250,250,.07);color:var(--white-muted);
  transition:color var(--t-fast);
}
.clubs-link:hover{color:var(--acid)}
.clubs-link>span{font-size:14px}
.account-row{padding-top:14px;display:flex;gap:9px;align-items:center}
.avatar{
  display:grid;place-items:center;width:32px;height:32px;
  border-radius:50%;font-family:var(--font-mono);font-size:10px;font-weight:700;flex-shrink:0;
  background:var(--onyx-3);color:var(--white-dim);border:1px solid rgba(250,250,250,.1);
}
.own-avatar{background:rgba(204,255,0,.15);color:var(--acid);border-color:rgba(204,255,0,.3)}
.account-copy{min-width:0;flex:1}
.account-copy strong{font-size:11px;font-weight:700;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.account-copy span{display:block;font-size:8px;color:var(--white-muted);margin-top:3px}
.account-row .icon-button{flex-shrink:0}
.account-login{
  font-family:var(--font-display);font-size:11px;font-weight:700;
  display:flex;justify-content:space-between;gap:10px;padding-top:16px;color:var(--acid);
  transition:opacity var(--t-fast);
}
.account-login:hover{opacity:.7}

/* ── Conversation ─────────────────────────────────────────────── */
.conversation{display:flex;flex-direction:column;min-width:0;flex:1;position:relative;background:var(--void)}
.conversation-header{
  height:72px;display:flex;align-items:center;gap:12px;padding:0 28px;
  border-bottom:1px solid rgba(250,250,250,.07);flex-shrink:0;
  background:var(--onyx);
}
.header-hash{
  width:36px;height:36px;display:grid;place-items:center;
  background:rgba(204,255,0,.1);border:1px solid rgba(204,255,0,.2);
  border-radius:var(--r-sm);font-size:20px;color:var(--acid);
}
.room-heading h1{font-family:var(--font-display);font-size:16px;font-weight:800;margin:0;letter-spacing:-.03em}
.room-heading p{font-size:10px;color:var(--white-muted);margin:4px 0 0}
.header-actions{display:flex;align-items:center;gap:16px;margin-left:auto}
.connection-status{
  font-family:var(--font-mono);font-size:9px;color:var(--white-muted);
  display:flex;align-items:center;gap:7px;white-space:nowrap;
}
.connection-status>span{width:5px;height:5px;background:var(--onyx-3);border-radius:50%}
.connection-status>span.connected{background:var(--success);box-shadow:0 0 6px rgba(0,230,118,.5)}
.icon-button{
  border:0;background:transparent;color:var(--white-muted);width:32px;height:32px;
  display:grid;place-items:center;font-size:20px;
  border-radius:var(--r-sm);flex-shrink:0;transition:all var(--t-fast);
}
.icon-button:hover{background:rgba(250,250,250,.07);color:var(--white)}
.icon-button svg{width:18px;height:18px}
.mobile-only{display:none}

.conversation-notice{
  display:flex;align-items:center;gap:10px;padding:12px 28px;
  background:rgba(204,255,0,.04);border-bottom:1px solid rgba(204,255,0,.1);flex-shrink:0;
}
.notice-icon{font-size:16px;color:var(--acid)}
.conversation-notice p{font-size:9px;line-height:1.6;color:var(--white-muted);margin:0}
.conversation-notice strong{font-weight:700;color:var(--white-dim)}
.notice-tag{
  margin-left:auto;white-space:nowrap;
  font-family:var(--font-mono);font-size:7px;letter-spacing:.15em;color:var(--white-muted);
}

.message-search{
  display:flex;align-items:center;gap:10px;padding:8px 28px;
  background:var(--onyx);border-bottom:1px solid rgba(250,250,250,.07);
}
.message-search>svg{width:16px;height:16px;color:var(--white-muted);flex-shrink:0}
.message-search input{border:0;background:transparent;color:var(--white);outline:none;flex:1;min-width:0;font-size:13px;padding:6px 0}
.message-search input::placeholder{color:var(--white-muted)}
.message-search>span{font-size:9px;color:var(--white-muted)}

.messages-area{flex:1;overflow-y:auto;padding:24px 28px 8px;scrollbar-width:thin;scrollbar-color:var(--onyx-3) transparent;overscroll-behavior:contain}

/* ── States ───────────────────────────────────────────────────── */
.welcome-state{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 0 32px}
.welcome-illustration{width:310px;height:180px;position:relative;margin-bottom:24px}
.welcome-star{position:absolute;right:0;top:0;font-size:100px;line-height:1;transform:rotate(12deg);color:var(--acid);opacity:.3}
.bubble{position:absolute;border-radius:var(--r-sm);padding:14px 18px;font-size:12px;font-weight:700;min-width:210px;text-align:left;display:flex;justify-content:space-between;gap:16px;box-shadow:0 8px 24px rgba(0,0,0,.4)}
.bubble i{font-size:16px;font-style:normal;line-height:1}
.bubble-one{background:var(--acid);color:var(--void);top:5px;left:0;transform:rotate(-6deg)}
.bubble-two{background:var(--onyx-3);border:1px solid rgba(250,250,250,.1);color:var(--white);top:63px;left:65px;transform:rotate(4deg)}
.bubble-three{background:var(--onyx-2);border:1px solid rgba(204,255,0,.2);color:var(--white);top:121px;left:9px;transform:rotate(-3deg)}
.welcome-kicker{font-family:var(--font-mono);font-size:8px;color:var(--white-muted);letter-spacing:.18em;text-transform:uppercase}
.welcome-state h2{font-family:var(--font-display);font-size:38px;line-height:1.05;font-weight:800;letter-spacing:-.05em;margin:18px 0 14px}
.welcome-state h2 em{font-style:normal;color:var(--acid)}
.welcome-state>p{max-width:380px;font-size:12px;line-height:1.85;color:var(--white-muted);margin:0 0 24px}
.primary-link{
  display:flex;align-items:center;justify-content:space-between;gap:28px;
  background:var(--acid);color:var(--void);border:0;border-radius:var(--r-sm);
  padding:13px 18px;font-family:var(--font-display);font-size:12px;font-weight:800;
  letter-spacing:.02em;text-transform:uppercase;transition:box-shadow var(--t-base);
}
.primary-link:hover{box-shadow:var(--glow-acid)}
.primary-link>span{font-size:18px}
.preview-label{font-family:var(--font-mono);font-size:8px;color:var(--white-muted);margin-top:14px;letter-spacing:.1em}

.state-panel{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;padding:40px}
.state-panel h2{font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:-.04em;margin:6px 0 0}
.state-panel p{font-size:13px;max-width:380px;line-height:1.8;color:var(--white-muted);margin:0 0 8px}
.loading-ring{width:30px;height:30px;border:2px solid rgba(250,250,250,.1);border-top-color:var(--acid);border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.state-symbol{font-size:36px;color:var(--acid)}
.error-state .state-symbol{color:var(--error)}

.room-introduction{display:flex;gap:14px;padding:6px 0 22px;align-items:center}
.room-intro-symbol{
  display:grid;place-items:center;width:44px;height:44px;
  background:rgba(204,255,0,.08);border:1px solid rgba(204,255,0,.2);
  border-radius:var(--r-sm);font-size:22px;color:var(--acid);flex-shrink:0;
}
.room-introduction h2{font-family:var(--font-display);font-size:19px;letter-spacing:-.04em;font-weight:800;margin:0 0 6px}
.room-introduction p{font-size:11px;line-height:1.7;color:var(--white-muted);max-width:520px;margin:0}
.history-notice{font-family:var(--font-mono);font-size:8px;color:var(--white-muted);margin:0 0 14px;letter-spacing:.1em}

.date-divider{
  display:flex;gap:14px;align-items:center;margin:22px 0;
  font-family:var(--font-mono);color:var(--white-muted);font-size:8px;text-transform:uppercase;letter-spacing:.12em;
}
.date-divider::before,.date-divider::after{content:'';height:1px;background:rgba(250,250,250,.07);flex:1}

/* ── Messages ─────────────────────────────────────────────────── */
.message{display:flex;align-items:flex-start;gap:10px;margin:0 0 16px}
.message-avatar{margin-top:2px;width:30px;height:30px}
.message-content{max-width:min(78%,640px);min-width:0}
.message-meta{display:flex;align-items:center;gap:10px;margin:0 0 6px}
.message-meta strong{font-family:var(--font-display);font-size:12px;font-weight:700;max-width:280px;overflow-wrap:anywhere}
.message-meta time{font-family:var(--font-mono);font-size:9px;color:var(--white-muted);white-space:nowrap}
.message-bubble{
  padding:11px 14px;background:var(--onyx-2);
  border:1px solid rgba(250,250,250,.07);border-radius:2px 10px 10px 10px;overflow:hidden;
}
.message-text{margin:0;font-size:13px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--white-dim)}
.message.mine{flex-direction:row-reverse}
.message.mine .message-content{display:flex;align-items:flex-end;flex-direction:column}
.message.mine .message-bubble{
  background:rgba(204,255,0,.08);border-color:rgba(204,255,0,.15);
  border-radius:10px 2px 10px 10px;
}
.message.mine .message-bubble .message-text{color:var(--white)}
.message.mine .message-meta{flex-direction:row-reverse}

.message-footer{display:flex;align-items:center;gap:12px;margin-top:4px;min-height:22px}
.message-reactions{display:flex;gap:4px;flex-wrap:wrap}
.reaction{
  border:1px solid rgba(250,250,250,.1);background:var(--onyx);
  border-radius:20px;padding:2px 8px;font-size:10px;
  display:flex;gap:4px;align-items:center;min-height:22px;color:var(--white-muted);
  transition:all var(--t-fast);
}
.reaction.reacted{background:rgba(204,255,0,.1);border-color:rgba(204,255,0,.3);color:var(--acid)}
.reaction span{font-size:9px}
.add-reaction{opacity:.2;font-size:9px}
.message:hover .add-reaction,.add-reaction:focus-visible{opacity:.7}
.delete-message{background:none;border:0;padding:2px 0;font-size:9px;color:var(--white-muted);opacity:.3}
.message:hover .delete-message,.delete-message:focus-visible{opacity:.7}
.delete-message:hover{color:var(--error)}

.delete-confirm{
  display:flex;align-items:center;gap:8px;padding:10px;
  background:rgba(255,61,87,.08);border:1px solid rgba(255,61,87,.2);
  border-radius:var(--r-sm);margin-top:6px;font-size:10px;flex-wrap:wrap;
  color:var(--white-muted);
}
.delete-confirm button{
  padding:5px 10px;background:var(--onyx-2);border:1px solid rgba(250,250,250,.1);
  border-radius:var(--r-sm);font-size:9px;color:var(--white-muted);transition:all var(--t-fast);
}
.delete-confirm .confirm-danger{color:var(--error);background:rgba(255,61,87,.1);border-color:rgba(255,61,87,.3)}

.message-image-link{display:block;margin-top:8px}
.message-image{max-width:100%;width:auto;max-height:280px;border-radius:var(--r-sm);display:block;object-fit:contain;border:1px solid rgba(250,250,250,.1)}
.file-attachment{display:flex;gap:12px;align-items:center;min-width:200px;max-width:320px;padding:4px 0}
.file-attachment>span:first-child{font-size:22px;color:var(--acid)}
.file-attachment>span:nth-child(2){overflow:hidden;flex:1}
.file-attachment strong{display:block;font-size:11px;overflow-wrap:anywhere;color:var(--white)}
.file-attachment small{display:block;font-size:9px;color:var(--white-muted);margin-top:4px}
.file-attachment>span:last-child{font-size:16px;color:var(--acid)}

.empty-state{padding:48px 12px;text-align:center}
.empty-state>span{font-size:32px;color:var(--white-muted)}
.empty-state h3{font-family:var(--font-display);font-size:18px;font-weight:800;letter-spacing:-.04em;margin:14px 0 8px}
.empty-state p{font-size:12px;color:var(--white-muted)}
.text-button{border:0;background:none;padding:8px;color:var(--acid);font-size:12px;transition:opacity var(--t-fast)}
.text-button:hover{opacity:.7}

.messages-bottom{height:4px}
.scroll-bottom-button{
  position:absolute;bottom:160px;left:50%;transform:translateX(-50%);
  border:1px solid rgba(204,255,0,.3);border-radius:20px;
  background:rgba(204,255,0,.1);color:var(--acid);
  padding:9px 16px;font-size:10px;white-space:nowrap;
  box-shadow:0 4px 20px rgba(0,0,0,.4);
  font-family:var(--font-mono);letter-spacing:.08em;
}
.scroll-bottom-button span{margin-left:8px}

/* ── Composer ─────────────────────────────────────────────────── */
.composer-area{position:relative;padding:14px 24px 16px;background:var(--onyx);border-top:1px solid rgba(250,250,250,.07);flex-shrink:0}
.composer{
  border:1px solid rgba(250,250,250,.1);border-radius:var(--r-md);
  background:var(--onyx-2);overflow:hidden;transition:border-color var(--t-fast),box-shadow var(--t-fast);
}
.composer:focus-within{border-color:rgba(204,255,0,.4);box-shadow:0 0 0 3px rgba(204,255,0,.08)}
.composer textarea{
  display:block;min-height:44px;max-height:150px;width:100%;border:0;background:transparent;
  resize:none;padding:13px 16px;outline:none;color:var(--white);font-size:13px;line-height:1.6;
}
.composer textarea::placeholder{color:var(--white-muted)}
.composer-toolbar{display:flex;justify-content:space-between;align-items:center;padding:4px 10px 8px}
.composer-toolbar>div{display:flex;align-items:center;gap:2px}
.attachment-limit{font-family:var(--font-mono);font-size:8px;color:var(--white-muted);margin-left:6px;letter-spacing:.08em}
.send-button{
  border:0;background:var(--acid);color:var(--void);border-radius:var(--r-sm);
  padding:8px 14px;font-family:var(--font-display);font-size:11px;font-weight:800;
  letter-spacing:.04em;text-transform:uppercase;
  display:flex;align-items:center;gap:10px;transition:box-shadow var(--t-fast);
}
.send-button>span{font-size:16px}
.send-button:hover:not(:disabled){box-shadow:var(--glow-acid)}
.send-button:disabled{opacity:.4}
.composer-hint{
  font-family:var(--font-mono);font-size:8px;color:var(--white-muted);
  display:flex;justify-content:space-between;gap:10px;margin-top:8px;letter-spacing:.06em;
}
.composer-hint strong{font-weight:600;color:var(--white-dim)}

.selected-file{
  padding:8px 10px;margin-bottom:8px;display:flex;align-items:center;gap:10px;
  background:var(--onyx-3);border:1px solid rgba(250,250,250,.1);border-radius:var(--r-sm);
}
.selected-file img{width:36px;height:36px;object-fit:cover;border-radius:var(--r-sm)}
.selected-file-icon{font-size:22px;color:var(--acid)}
.selected-file>span:nth-last-child(2){flex:1;min-width:0}
.selected-file strong{font-size:11px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--white)}
.selected-file small{font-size:9px;color:var(--white-muted);display:block;margin-top:4px}
.selected-file .icon-button{margin-left:auto}

.emoji-picker{
  position:absolute;bottom:calc(100% - 8px);left:24px;display:flex;gap:4px;padding:10px;
  background:var(--onyx-2);border:1px solid rgba(250,250,250,.1);
  border-radius:var(--r-md);box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:3;
}
.emoji-picker button{border:0;border-radius:var(--r-sm);background:transparent;font-size:20px;padding:5px;transition:background var(--t-fast)}
.emoji-picker button:hover{background:rgba(250,250,250,.08)}
.emoji-picker .emoji-close{font-size:14px;color:var(--white-muted)}

.action-error{
  font-size:11px;line-height:1.6;background:rgba(255,61,87,.08);
  border:1px solid rgba(255,61,87,.2);color:var(--error);
  display:flex;gap:14px;justify-content:space-between;
  padding:10px 12px;border-radius:var(--r-sm);margin:0 0 10px;
}
.action-error>button{background:none;border:0;font-size:16px;color:inherit}

.guest-composer{
  border:1px solid rgba(250,250,250,.08);border-radius:var(--r-sm);
  padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:14px;
  background:var(--onyx-2);
}
.guest-composer>span{font-size:12px;color:var(--white-muted)}
.guest-composer a{
  font-family:var(--font-display);font-size:11px;font-weight:800;
  color:var(--acid);white-space:nowrap;letter-spacing:.02em;text-transform:uppercase;
  transition:opacity var(--t-fast);
}
.guest-composer a:hover{opacity:.7}
.guest-composer a span{font-size:14px;margin-left:10px}

.sidebar-overlay{display:none}
.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%)}

/* ── Responsive ──────────────────────────────────────────────── */
@media(min-width:1500px){
  .conversation-header,.conversation-notice,.message-search{padding-left:48px;padding-right:48px}
  .messages-area{padding-left:48px;padding-right:48px}
  .composer-area{padding-left:48px;padding-right:48px}
  .community-sidebar{width:300px}
  .welcome-state h2{font-size:44px}
}
@media(max-height:800px) and (min-width:761px){
  .sidebar-note{margin-top:20px;padding:14px}
  .sidebar-note h2{font-size:17px;margin-top:12px}
  .sidebar-note p{display:none}
  .community-sidebar{padding-top:18px}
  .section-label{margin-top:20px}
  .room-list>button{padding-top:8px;padding-bottom:8px}
  .sidebar-divider{margin:16px 0}
  .conversation-header{height:62px}
}
@media(max-width:1000px){
  .community-sidebar{width:240px;padding-left:16px;padding-right:16px}
  .conversation-header{padding:0 20px}
  .conversation-notice{padding:10px 20px}
  .notice-tag{display:none}
  .messages-area{padding:20px 20px 8px}
  .composer-area{padding:12px 20px 14px}
  .header-actions{gap:10px}
  .connection-status{display:none}
  .welcome-state h2{font-size:34px}
  .message-content{max-width:85%}
}
@media(max-width:760px){
  .community-page{min-height:420px}
  .community-sidebar{
    position:fixed;left:0;top:0;bottom:0;width:280px;z-index:80;
    transform:translateX(-100%);transition:transform var(--t-slow);
    box-shadow:0 0 60px rgba(0,0,0,.7);padding:20px;visibility:hidden;
  }
  .community-sidebar.is-open{transform:translateX(0);visibility:visible}
  .sidebar-overlay{
    display:block;position:fixed;inset:0;background:rgba(0,0,0,.6);
    z-index:79;border:0;backdrop-filter:blur(4px);
  }
  .mobile-only{display:grid}
  .conversation-header{height:64px;padding:0 14px;gap:8px}
  .header-hash{display:none}
  .room-heading h1{font-size:14px}
  .room-heading p{font-size:9px}
  .header-actions{gap:4px}
  .conversation-notice{padding:10px 16px;gap:8px}
  .conversation-notice p{font-size:9px}
  .message-search{padding:8px 16px}
  .messages-area{padding:18px 16px 8px}
  .welcome-state h2{font-size:30px;letter-spacing:-.05em;margin:14px 0 12px}
  .welcome-state>p{font-size:11px;max-width:300px;margin-bottom:20px}
  .welcome-illustration{width:280px;height:160px;margin-bottom:8px}
  .composer-area{padding:10px 12px 14px}
  .guest-composer{padding:11px 14px}
  .message{gap:8px}
  .message-avatar{width:26px;height:26px;font-size:9px}
  .message-content{max-width:88%}
  .message-bubble{padding:10px 12px}
  .message-text{font-size:12px}
  .emoji-picker{left:12px}
  .scroll-bottom-button{bottom:150px}
  .delete-message{opacity:.7}
}
@media(max-height:650px){
  .welcome-illustration{display:none}
  .welcome-state{padding-top:20px}
  .welcome-state h2{font-size:28px}
  .sidebar-note{display:none}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
