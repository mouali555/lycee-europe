// auth.js - Gestion de l'authentification
import { auth } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// DOM Elements
const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const authError = document.getElementById('authError');
const switchAuthModeBtn = document.getElementById('switchAuthMode');
const submitBtn = document.querySelector('#authForm button[type="submit"]');

// Mode: true = login (connexion), false = signup (inscription)
let isLoginMode = true; 

if (switchAuthModeBtn) {
    switchAuthModeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            submitBtn.textContent = "Se connecter";
            switchAuthModeBtn.parentElement.innerHTML = 'Pas encore de compte ? <a href="#" id="switchAuthMode">Créer un compte</a>';
            document.querySelector('.auth-header p').textContent = "Connectez-vous à votre espace BTS";
        } else {
            submitBtn.textContent = "Créer mon compte";
            switchAuthModeBtn.parentElement.innerHTML = 'Déjà un compte ? <a href="#" id="switchAuthMode">Se connecter</a>';
            document.querySelector('.auth-header p').textContent = "Rejoignez l'espace de votre promotion";
        }
        
        // Ré-attacher l'event listener sur le nouveau lien généré
        document.getElementById('switchAuthMode').addEventListener('click', arguments.callee);
        authError.textContent = "";
    });
}

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        
        authError.textContent = "";
        submitBtn.disabled = true;

        if (isLoginMode) {
            // Connexion
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Connecté:", userCredential.user);
                    window.location.href = "chat.html";
                })
                .catch((error) => {
                    console.error("Erreur de connexion:", error);
                    authError.textContent = "Erreur : Email ou mot de passe incorrect.";
                    submitBtn.disabled = false;
                });
        } else {
            // Inscription
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Compte créé:", userCredential.user);
                    window.location.href = "chat.html";
                })
                .catch((error) => {
                    console.error("Erreur de création:", error);
                    authError.textContent = "Erreur : Le mot de passe doit faire 6 caractères minimum, ou l'email est déjà utilisé.";
                    submitBtn.disabled = false;
                });
        }
    });
}

// Observation globale de l'état de connexion (Appelé sur index.html et toutes les pages)
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
                    window.location.href = "index.html";
                });
            });
        }
    } else {
        // Déconnecté
        if (loginLink) loginLink.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
});
