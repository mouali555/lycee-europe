// js/services/firebase.js
// Initialisation Firebase (App, Auth, Firestore)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Config projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM",
  authDomain: "lycee-europe-private.firebaseapp.com",
  projectId: "lycee-europe-private",
  // Firebase Storage bucket name uses the *.appspot.com form.
  // Using a web download domain (firebasestorage.app) breaks Storage SDK operations (upload/download).
  storageBucket: "lycee-europe-private.appspot.com",
  messagingSenderId: "259168134432",
  appId: "1:259168134432:web:470f5536d9305b4cf86345",
  measurementId: "G-X323CMQRZR",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
