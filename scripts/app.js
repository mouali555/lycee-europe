// app.js - Logique d'interface globale
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    // Petit effet d'apparition pour certaines cartes
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // Protection des liens "Rejoindre le Tchat" si non connecté
    const chatLinks = document.querySelectorAll('a[href="chat.html"]');
    
    onAuthStateChanged(auth, (user) => {
        const loginLink = document.getElementById('loginLink');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (user) {
            // Utilisateur connecté
            if (loginLink) loginLink.style.display = 'none';
            if (logoutBtn) {
                logoutBtn.style.display = 'inline-block';
                logoutBtn.addEventListener('click', () => {
                    signOut(auth).then(() => {
                        window.location.reload();
                    });
                });
            }
        } else {
            // Déconnecté: rediriger vers login si on clique sur un lien de tchat
            if (loginLink) loginLink.style.display = 'inline-block';
            if (logoutBtn) logoutBtn.style.display = 'none';
            
            chatLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = "login.html";
                });
            });
        }
    });
});

