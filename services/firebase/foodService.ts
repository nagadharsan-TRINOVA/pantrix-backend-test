import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export interface FoodItem {
  id?: string;
  name: string;
  quantity: number;
  expiryDate: string;
  ownerId: string;
  createdAt?: any;
}

const foodCollection = collection(db, "foodItems");

export const addFoodItem = async (item: FoodItem) => {
  return await addDoc(foodCollection, {
    ...item,
    createdAt: serverTimestamp(),
  });
};

export const getMyFoodItems = async (userId: string) => {
  const q = query(foodCollection, where("ownerId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FoodItem[];
};

export const updateFoodItem = async (
  itemId: string,
  data: Partial<FoodItem>
) => {
  return await updateDoc(doc(db, "foodItems", itemId), data);
};

export const deleteFoodItem = async (itemId: string) => {
  return await deleteDoc(doc(db, "foodItems", itemId));
};