// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3sLe9ZShuJM0oJURs3sb_ch9GEFRpuHc",
  authDomain: "pantrix-f546d.firebaseapp.com",
  projectId: "pantrix-f546d",
  storageBucket: "pantrix-f546d.firebasestorage.app",
  messagingSenderId: "565169016029",
  appId: "1:565169016029:web:a5054d1013907af90f1f34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;