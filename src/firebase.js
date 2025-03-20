// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Añadido createUserWithEmailAndPassword
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZKW72aeOgxzCJPDiThemEnq7ZAjYHq8",
  authDomain: "quickbookerone.firebaseapp.com",
  projectId: "quickbookerone",
  storageBucket: "quickbookerone.appspot.com",
  messagingSenderId: "667907909735",
  appId: "1:667907909735:web:9790ab6d405ef9dc6e0cc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export auth, firestore, and createUserWithEmailAndPassword for use in other files
export { auth, firestore, createUserWithEmailAndPassword };
