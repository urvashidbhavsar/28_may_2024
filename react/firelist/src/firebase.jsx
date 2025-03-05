import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC1K-Q4t9mS0ttam1EKm8xrPBADtSc_abQ",
  authDomain: "todo-app-707be.firebaseapp.com",
  projectId: "todo-app-707be",
  storageBucket: "todo-app-707be.firebasestorage.app",
  messagingSenderId: "938538781413",
  appId: "1:938538781413:web:45f5cf86ee4b5a5319a20c",
  measurementId: "G-WLXQH6WK6S"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
