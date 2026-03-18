// firebase-config.js
// IMPORT SDK FIREBASE
// Nous utilisons les versions "module" (ESM) qui sont recommandées pour le développement moderne
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: REMPLACER CET OBJET PAR VOTRE CONFIGURATION FIREBASE
// Allez sur console.firebase.google.com -> Projet -> Paramètres -> Général -> Config
const firebaseConfig = {
  apiKey: "AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM",
  authDomain: "lycee-europe-private.firebaseapp.com",
  projectId: "lycee-europe-private",
  storageBucket: "lycee-europe-private.firebasestorage.app",
  messagingSenderId: "259168134432",
  appId: "1:259168134432:web:470f5536d9305b4cf86345"
};

// Initialisation de Firebase
let app;
let auth;
let db;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("🔥 Firebase Initialisé !");
} catch (error) {
    console.error("Erreur d'initialisation Firebase. Avez-vous rempli les clés API ?", error);
    alert("Erreur de connexion serveur. Consultez la console.");
}

export { app, auth, db };
