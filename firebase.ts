// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Use your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyA3sLe9ZShuJM0oJURs3sb_ch9GEFRpuHc",
  authDomain: "pantrix-f546d.firebaseapp.com",
  projectId: "pantrix-f546d",
  storageBucket: "pantrix-f546d.appspot.com",
  messagingSenderId: "565169016029",
  appId: "1:565169016029:web:a5054d1013907af90f1f34",
  measurementId: "G-J4M7PHZXZR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);