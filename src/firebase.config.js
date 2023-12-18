import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIbY4Ten49yzJp9VYJdiBOiOVb47xMvnU",
  authDomain: "furnituresopee.firebaseapp.com",
  projectId: "furnituresopee",
  storageBucket: "furnituresopee.appspot.com",
  messagingSenderId: "1057285822299",
  appId: "1:1057285822299:web:c9785db05bece53343ec7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
