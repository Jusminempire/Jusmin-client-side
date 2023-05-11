// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "jusmin-686c7.firebaseapp.com",
  projectId: "jusmin-686c7",
  storageBucket: "jusmin-686c7.appspot.com",
  messagingSenderId: "195029424556",
  messagingSenderId: process.env.FIREBASE_MESSAGIN_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const db2 = getFirestore(app);
const storage = getStorage();

export { app, db, storage, db2 };
