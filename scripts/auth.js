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
const authModeText = document.getElementById('authModeText');
const submitBtn = document.querySelector('#authForm button[type="submit"]');

if (authForm) {
    // Action 1: Connexion (via le bouton principal)
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        authError.textContent = "";
        if (submitBtn) submitBtn.disabled = true;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Connecté:", userCredential.user);
                window.location.assign("chat.html");
            })
            .catch((error) => {
                console.error("Erreur de connexion:", error);
                authError.textContent = "Erreur : Email ou mot de passe incorrect.";
                if (submitBtn) submitBtn.disabled = false;
            });
    });
}

if (switchAuthModeBtn) {
    // Action 2: Création de compte directe au clic sur "Créer un compte"
    switchAuthModeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = emailInput ? emailInput.value : '';
        const password = passwordInput ? passwordInput.value : '';
        
        if (!email || !password) {
            if (authError) authError.textContent = "Veuillez remplir l'email et le mot de passe avant de cliquer sur Créer un compte.";
            return;
        }

        if (authError) authError.textContent = "";
        if (submitBtn) submitBtn.disabled = true;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Compte créé:", userCredential.user);
                window.location.assign("chat.html");
            })
            .catch((error) => {
                console.error("Erreur de création:", error);
                // Traduction des erreurs Firebase courantes pour une meilleure UX
                if (error.code === 'auth/email-already-in-use') {
                    if (authError) authError.textContent = "Erreur : Cet email est déjà utilisé. Connectez-vous.";
                } else if (error.code === 'auth/weak-password') {
                    if (authError) authError.textContent = "Erreur : Le mot de passe doit faire au moins 6 caractères.";
                } else if (error.code === 'auth/invalid-email') {
                    if (authError) authError.textContent = "Erreur : L'adresse email n'est pas valide.";
                } else {
                    if (authError) authError.textContent = "Erreur : " + error.message;
                }
                if (submitBtn) submitBtn.disabled = false;
            });
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
        
        // Redirection automatique vers le chat si on est sur la page d'accueil ou de login
        const path = window.location.pathname;
        if (path.endsWith('index.html') || path.endsWith('login.html') || path === '/' || path.endsWith('/lycee-europe/')) {
            window.location.replace("chat.html");
        }
    } else {
        // Déconnecté
        if (loginLink) loginLink.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
