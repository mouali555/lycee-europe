/**
 * Shared Firebase Configuration
 * Lycée de l'Europe - NEXUS 3026
 */

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM",
  authDomain: "lycee-europe-private.firebaseapp.com",
  projectId: "lycee-europe-private",
  storageBucket: "lycee-europe-private.firebasestorage.app",
  messagingSenderId: "259168134432",
  appId: "1:259168134432:web:470f5536d9305b4cf86345",
  measurementId: "G-X323CMQRZR"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Export Firestore instance
const db = firebase.firestore();
