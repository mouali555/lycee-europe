<template>
  <div class="h-screen overflow-hidden bg-[#03000a] text-gray-200 flex flex-col font-sans selection:bg-violet-500/30 relative">
    
    <!-- Arrière-plan Vidéo Espace / Galaxie -->
    <div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#03000a] z-0 pointer-events-none">
      <!-- Dégradé violet en fond de secours -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/30 via-black to-[#020005]"></div>
      
      <video 
        class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 mix-blend-screen blur-[1px]"
        muted 
        playsinline
        autoplay
        loop
        src="/video-galaxie.mp4"
      ></video>
      
      <!-- Dégradé par dessus la vidéo pour assombrir et teinter en violet profond -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#03000a]/60 to-[#03000a]"></div>
      
      <!-- Orbes lumineuses pour l'effet nébuleuse additionnel -->
      <div class="absolute top-[10%] left-[15%] w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div class="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] bg-fuchsia-800/10 rounded-full blur-[150px] mix-blend-screen"></div>
    </div>

    <!-- Écran de verrouillage -->
    <div v-if="!isAuthenticated" class="flex-1 flex flex-col items-center justify-center p-4 z-10 relative">
      <div class="max-w-md w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
        <div class="text-violet-400 text-sm mb-8 text-center font-mono uppercase tracking-[0.2em] flex items-center justify-center gap-3">
          <span class="w-2 h-2 rounded-full bg-violet-500 animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
          Astra.Link_
        </div>
        <form @submit.prevent="checkPassword" class="flex flex-col gap-5 relative">
          <input 
            v-model="passwordInput" 
            type="password" 
            autofocus
            :disabled="isAuthenticating"
            placeholder="Clé d'accès..." 
            class="w-full bg-black/20 border border-violet-500/20 rounded-xl py-4 px-5 text-xl text-white focus:border-violet-400 focus:bg-white/5 outline-none transition-all disabled:opacity-50 text-center tracking-[0.2em]"
          />
          <p v-if="isAuthenticating" class="text-violet-400 text-xs text-center mt-2 absolute -bottom-8 w-full animate-pulse">Synchronisation quantique...</p>
          <p v-if="error" class="text-red-400 text-xs text-center mt-2 absolute -bottom-8 w-full">{{ error }}</p>
        </form>
      </div>
    </div>

    <!-- Interface du Tchat -->
    <div v-else class="flex-1 flex flex-col max-w-5xl w-full mx-auto p-4 md:p-6 z-10 relative h-screen">
      <div class="flex-1 flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        <header class="px-6 py-5 border-b border-white/5 bg-black/20 flex justify-between items-center shrink-0">
          <div class="flex items-center gap-4">
            <div class="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-pulse"></div>
            <div>
              <h1 class="text-xl font-bold text-white tracking-wide">NEXUS<span class="text-violet-500">_COMMS</span></h1>
              <p class="text-xs text-violet-300/60 mt-0.5 font-mono">Réseau chiffré. <span class="text-violet-400">/help</span> pour l'aide.</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink to="/nexus" class="text-xs px-3.5 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-fuchsia-500/20 flex items-center gap-1.5 font-mono">
              <span class="relative flex h-1.5 w-1.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-500"></span>
              </span>
              Visual Lab
            </NuxtLink>
            <button @click="disconnect" class="text-xs font-mono text-violet-300/50 hover:text-red-400 transition-colors uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-white/5">
              Déconnexion
            </button>
          </div>
      </header>

        <div class="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-6 p-6 custom-scrollbar" ref="messagesContainer">
        <div 
          v-for="msg in messages" 
          :key="msg.id"
            class="max-w-[80%] flex flex-col group"
            :class="msg.isMine ? 'self-end items-end' : 'self-start items-start'"
        >
            <div class="text-[11px] mb-1.5 uppercase tracking-wider px-1 font-mono" :class="msg.isAdmin ? 'text-fuchsia-400 font-bold' : 'text-violet-300/60'">
              <span v-if="msg.isAdmin" class="bg-fuchsia-500/20 px-1.5 py-0.5 rounded mr-1 text-[9px] border border-fuchsia-500/30">ADMIN</span>
              {{ msg.author }} <span class="opacity-40 lowercase ml-1">{{ msg.time }}</span>
          </div>
          <div 
              class="text-sm md:text-base break-words p-4 rounded-2xl shadow-lg leading-relaxed relative group"
              :class="msg.isAdmin 
                ? 'bg-gradient-to-br from-fuchsia-900/60 to-violet-900/60 text-fuchsia-50 border border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.2)] rounded-tl-sm' 
                : (msg.isMine 
                  ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-violet-900/20 rounded-tr-sm' 
                  : 'bg-white/10 text-gray-100 backdrop-blur-md border border-white/5 rounded-tl-sm')"
          >
            <!-- Affichage de l'image si elle existe -->
              <img v-if="msg.imageUrl && msg.imageUrl.startsWith('https://')" :src="msg.imageUrl" class="max-w-sm w-full rounded-xl mb-3 border border-white/10 shadow-md" alt="Média" />
            <span v-if="msg.text">{{ msg.text }}</span>
            <!-- Bouton de suppression pour l'Admin -->
            <button 
              v-if="isAdmin" 
              @click="deleteMessage(msg.id)"
              class="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110 z-20 cursor-pointer"
              title="Supprimer le message"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

        <form @submit.prevent="sendMessage" class="p-4 bg-black/20 border-t border-white/5 flex gap-3 shrink-0 items-center">
          <button type="button" @click="triggerFileInput" class="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-violet-300 hover:bg-violet-500/30 hover:text-white transition-all border border-white/5" title="Joindre une image">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
          </button>
        <input 
          v-model="newMessage" 
          type="text" 
          maxlength="500"
            placeholder="Écrire un message..." 
            class="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-violet-500 focus:bg-white/10 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder-violet-300/30"
        />
        <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" class="hidden" />
          <button type="submit" class="h-11 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] flex items-center gap-2">
            <span class="hidden md:inline">Envoyer</span>
            <svg class="w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
      </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getStorage, ref as fbRef, uploadBytes, getDownloadURL } from 'firebase/storage'

// Configuration Firebase (récupérée de ton ancien projet)
const firebaseConfig = {
  apiKey: "AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM",
  authDomain: "lycee-europe-private.firebaseapp.com",
  projectId: "lycee-europe-private",
  storageBucket: "lycee-europe-private.firebasestorage.app",
  messagingSenderId: "259168134432",
  appId: "1:259168134432:web:470f5536d9305b4cf86345"
}

let db;
let auth;
let storage;
// Initialisation côté client pour éviter les erreurs Nuxt liées au Server-Side Rendering (SSR)
if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  auth = getAuth(app)
  storage = getStorage(app)
}

// Système de mot de passe simple
const isAuthenticated = ref(false)
const passwordInput = ref('')
const error = ref('')
const isAuthenticating = ref(false)
const SECRET_PASSWORD = 'matrix' 

const isAdmin = ref(false)
const fileInput = ref(null)

const checkPassword = () => {
  if (isAuthenticating.value) return
  
  isAuthenticating.value = true
  error.value = ''
  
  // Récupère le pseudo sauvegardé s'il existe
  const savedNick = localStorage.getItem('matrix_nick')
  if (savedNick) myPseudo.value = savedNick

  // Simule un délai de décryptage pour le style
  setTimeout(() => {
    if (passwordInput.value === SECRET_PASSWORD) {
      isAuthenticated.value = true
      error.value = ''
      initChat() // Démarre la connexion Firebase une fois authentifié
    } else {
      error.value = 'ACCÈS REFUSÉ. L\'IP a été loggée.'
      passwordInput.value = ''
    }
    isAuthenticating.value = false
  }, 1200)
}

// Logique Tchat (Firebase)
const messages = ref([])
const newMessage = ref('')
const messagesContainer = ref(null)
const mySessionId = ref(Math.random().toString(36).substring(2, 10)) // ID unique pour différencier "mes" messages
let unsubscribe = null
const myPseudo = ref('NEO') // Pseudo par défaut
const localClearTime = ref(0) // Permet d'ignorer les messages avant un /clear

// Surveillance automatique des messages pour forcer le scroll en bas
watch(messages, async () => {
  await nextTick() // Attend la fin du rendu HTML de Vue.js
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
  // Double sécurité (pour les ralentissements réseaux du chargement initial)
  setTimeout(() => {
    if (messagesContainer.value) messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }, 150)
}, { deep: true })

// Fonction utilitaire pour envoyer un message système uniquement sur mon écran
const pushSystemMessage = (text) => {
  const now = new Date()
  messages.value.push({
    id: Date.now() + Math.random(),
    text: text,
    author: "SYSTEM",
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isMine: false
  })
}

const initChat = () => {
  if (!db) return
  
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50))
  
  unsubscribe = onSnapshot(q, (snapshot) => {
    const newMessages = []
    
    snapshot.forEach((doc) => {
      const msg = doc.data()
      
      // Si le message est plus vieux que notre dernier /clear, on l'ignore
      const msgTimeMs = msg.createdAt ? msg.createdAt.toMillis() : Date.now()
      if (msgTimeMs < localClearTime.value) return

      let timeString = "Transmission..."
      if (msg.createdAt) {
        const date = msg.createdAt.toDate()
        timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      newMessages.push({
        id: doc.id,
        text: msg.text,
        imageUrl: msg.imageUrl,
        author: msg.author || msg.email?.split('@')[0] || "ANONYMOUS",
        isAdmin: msg.isAdmin || false,
        time: timeString,
        isMine: msg.uid === mySessionId.value || msg.uid === mySessionId.value // Ajuste selon si tu remets l'Auth Firebase
      })
    })
    
    // On inverse le tableau pour afficher du plus ancien au plus récent chronologiquement
    messages.value = newMessages.reverse()
  }, (err) => {
    pushSystemMessage("Erreur de connexion Firebase : " + err.message)
    console.error("Erreur de connexion Firebase :", err)
  })
}

// Logique d'upload d'image
const triggerFileInput = () => {
  if (fileInput.value) fileInput.value.click()
}

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file || !storage || !db) return
  
  // SÉCURITÉ : Limite la taille du fichier à 5 Mo maximum
  if (file.size > 5 * 1024 * 1024) {
    pushSystemMessage("Erreur : Fichier trop volumineux (Max 5 Mo).")
    if (fileInput.value) fileInput.value.value = ''
    return
  }

  pushSystemMessage("Upload sécurisé en cours...")
  
  try {
    const storageReference = fbRef(storage, `chat_images/${Date.now()}_${file.name}`)
    await uploadBytes(storageReference, file)
    const url = await getDownloadURL(storageReference)
    
    await addDoc(collection(db, "messages"), {
      text: "",
      imageUrl: url,
      uid: auth?.currentUser?.uid || mySessionId.value,
      author: myPseudo.value,
      isAdmin: isAdmin.value,
      createdAt: serverTimestamp()
    })
  } catch (err) {
    pushSystemMessage("Erreur d'upload : " + err.message)
  } finally {
    if (fileInput.value) fileInput.value.value = '' // Reset de l'input
  }
}

const deleteMessage = async (msgId) => {
  if (!confirm("Voulez-vous vraiment supprimer ce message ?")) return
  
  try {
    await deleteDoc(doc(db, "messages", msgId))
    pushSystemMessage("Message supprimé de la base de données.")
  } catch (err) {
    pushSystemMessage("Erreur de suppression : " + err.message)
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || !db) return
  
  const textToSend = newMessage.value.trim().substring(0, 500) // SÉCURITÉ : Coupe à 500 caractères max
  newMessage.value = '' // On vide l'input immédiatement pour l'UX
  
  // Commande d'aide /help
  if (textToSend === '/help') {
    pushSystemMessage("Commandes Nexus disponibles :")
    pushSystemMessage("/nick <pseudo> : Modifier votre identifiant visible")
    pushSystemMessage("/login <email> <mot_de_passe> : Connexion administrateur")
    pushSystemMessage("/clear : Effacer localement les messages de l'écran")
    return
  }

  // Commande d'effacement local /clear
  if (textToSend === '/clear') {
    localClearTime.value = Date.now()
    messages.value = []
    pushSystemMessage("Écran nettoyé localement.")
    return
  }

  // Système de commandes cachées
  if (textToSend.startsWith('/login ')) {
    const parts = textToSend.split(' ')
    if (parts.length === 3 && auth) {
      signInWithEmailAndPassword(auth, parts[1], parts[2]).then((cred) => {
        isAdmin.value = true
        myPseudo.value = "ADMIN"
        mySessionId.value = cred.user.uid // Synchronise avec Firebase Auth
        pushSystemMessage("Accès Administrateur accordé.")
      }).catch(err => {
        pushSystemMessage("Erreur réseau : " + err.message)
      })
    } else {
      pushSystemMessage("Usage: /login <email> <mot_de_passe>")
    }
    return
  }

  if (textToSend.startsWith('/nick ')) {
    const newName = textToSend.replace('/nick ', '').trim().substring(0, 15)
    if (newName) {
      myPseudo.value = newName
      // Message système local
      const now = new Date()
      messages.value.push({
        id: Date.now(),
        text: `Identifiant mis à jour : ${myPseudo.value}`,
        author: "SYSTEM",
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMine: false
      })
    }
    return
  }

  try {
    await addDoc(collection(db, "messages"), {
      text: textToSend,
      uid: auth?.currentUser?.uid || mySessionId.value,
      author: myPseudo.value,
      isAdmin: isAdmin.value,
      createdAt: serverTimestamp()
    })
  } catch (err) {
    pushSystemMessage("Erreur d'envoi : " + err.message)
    console.error("Erreur lors de l'envoi :", err)
  }
}

const disconnect = () => {
  if (auth && auth.currentUser) signOut(auth)
  isAuthenticated.value = false
  passwordInput.value = ''
  isAdmin.value = false
  messages.value = []
  if (unsubscribe) unsubscribe()
}

onUnmounted(() => {
  if (unsubscribe) unsubscribe() // Coupe l'écouteur si on quitte la page
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(139, 92, 246, 0.3);
  border-radius: 4px;
}
</style>