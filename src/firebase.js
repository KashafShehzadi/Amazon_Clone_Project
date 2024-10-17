// Import the functions you need from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAECiFkQ7mCJASlySgjRErB0jCgGt13mgQ",
  authDomain: "clone-a9026.firebaseapp.com",
  projectId: "clone-a9026",
  storageBucket: "clone-a9026.appspot.com",
  messagingSenderId: "690569050078",
  appId: "1:690569050078:web:d4d412f400ad893aeecf4f",
  measurementId: "G-WBTZRC1HLG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Exporting the initialized instances
export { db, auth };
