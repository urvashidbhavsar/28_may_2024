import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvb-W9nrd5D4EowTcgvC2tybP64o4OfVU",
    authDomain: "data-auth-7c192.firebaseapp.com",
    projectId: "data-auth-7c192",
    storageBucket: "data-auth-7c192.firebasestorage.app",
    messagingSenderId: "773979425732",
    appId: "1:773979425732:web:774f2db6da60919d41b291",
    measurementId: "G-T9V8WYXYVT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
// export default app;