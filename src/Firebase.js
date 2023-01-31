import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH97C-bIPhPf6XL8VhR6aEDSt8BMDQ_aY",
  authDomain: "testchat-ffa2f.firebaseapp.com",
  projectId: "testchat-ffa2f",
  storageBucket: "testchat-ffa2f.appspot.com",
  messagingSenderId: "630823761526",
  appId: "1:630823761526:web:960206e4aeeb52eec79157",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

