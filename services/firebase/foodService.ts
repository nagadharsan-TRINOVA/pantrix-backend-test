// src/services/firebase/foodService.ts
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Reference to "foodItems" collection
const foodCollection = collection(db, "foodItems");

// Add a new food item
export const addFoodItem = async (item: {
  name: string;
  quantity: number;
  expiryDate: string;
  ownerId: string;
}) => {
  return await addDoc(foodCollection, item);
};

// Get all food items for a user
export const getUserFoodItems = async (ownerId: string) => {
  const q = query(foodCollection, where("ownerId", "==", ownerId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Update a food item
export const updateFoodItem = async (id: string, data: any) => {
  const docRef = doc(db, "foodItems", id);
  return await updateDoc(docRef, data);
};

// Delete a food item
export const deleteFoodItem = async (id: string) => {
  const docRef = doc(db, "foodItems", id);
  return await deleteDoc(docRef);
};