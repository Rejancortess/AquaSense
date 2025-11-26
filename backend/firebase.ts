import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aquasense-2ae31.firebaseapp.com",
  projectId: "aquasense-2ae31",
  storageBucket: "aquasense-2ae31.firebasestorage.app",
  messagingSenderId: "783379053872",
  appId: "1:783379053872:web:1ded3cba64679de21e9cf5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
