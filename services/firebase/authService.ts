// src/services/firebase/authService.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig"; // adjust path if needed

// Sign up a new user
export const signup = (email: string, password: string): Promise<any> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log in an existing user
export const login = (email: string, password: string): Promise<any> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log out current user
export const logout = (): Promise<void> => {
  return signOut(auth);
};