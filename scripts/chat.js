// chat.js - Logique du tchat en temps réel
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { 
    collection, 
    addDoc, 
    serverTimestamp, 
    query, 
    orderBy, 
    onSnapshot,
    limit
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Sécurisation de la page : Si pas connecté, redirection vers /login.html
onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("Utilisateur non connecté, redirection vers l'accueil...");
        window.location.assign("index.html");
    } else {
        // Affichage de l'email de l'utilisateur
        document.getElementById('userEmailDisplay').textContent = user.email;
        // Init chat
        initChat(user);
    }
});

// Déconnexion
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.assign("index.html");
    });
});

function initChat(currentUser) {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesList = document.getElementById('messagesList');
    
    // 1. Envoyer un message
    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = messageInput.value.trim();
        
        if (text === "") return;
        if (!db) {
            alert("Erreur: Firebase n'est pas configuré.");
            return;
        }

        try {
            await addDoc(collection(db, "messages"), {
                text: text,
                uid: currentUser.uid,
                email: currentUser.email,
                createdAt: serverTimestamp()
            });
            messageInput.value = "";
            // Le scroll vers le bas se fera automatiquement via l'écouteur onSnapshot
        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error);
        }
    });

    // 2. Écouter les messages en temps réel
    if (db) {
        const q = query(collection(db, "messages"), orderBy("createdAt", "asc"), limit(50));
        
        onSnapshot(q, (snapshot) => {
            messagesList.innerHTML = ''; // On vide et on recrée (pour la simpilcité)
            
            if (snapshot.empty) {
                messagesList.innerHTML = '<div class="message system">Aucun message pour le moment. Soyez le premier !</div>';
                return;
            }

            snapshot.forEach((doc) => {
                const msg = doc.data();
                const isMine = msg.uid === currentUser.uid;
                
                // Formatage de l'heure
                let timeString = "À l'instant";
                if (msg.createdAt) {
                    const date = msg.createdAt.toDate();
                    timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                }

                // Affichage du nom d'utilisateur (partie avant le @)
                const username = msg.email ? msg.email.split('@')[0] : "Anonyme";

                const messageEl = document.createElement('div');
                messageEl.className = `message ${isMine ? 'mine' : 'other'}`;
                
                messageEl.innerHTML = `
                    <div class="message-meta">${isMine ? '' : '<strong>' + username + '</strong> • '} ${timeString}</div>
                    <div class="message-inner">${escapeHTML(msg.text)}</div>
                `;
                
                messagesList.appendChild(messageEl);
            });

            // Scroll tout en bas
            messagesList.scrollTop = messagesList.scrollHeight;
        });
    }
}

// Utilitaire de sécurité pour éviter les injections XSS simples
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
