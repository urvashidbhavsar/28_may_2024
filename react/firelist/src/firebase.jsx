// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);