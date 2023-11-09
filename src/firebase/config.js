import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTUK0E1RXtjLbbMmFLLo2f5tQesRi5EeQ",
  authDomain: "wedding-flor-mauri.firebaseapp.com",
  projectId: "wedding-flor-mauri",
  storageBucket: "wedding-flor-mauri.appspot.com",
  messagingSenderId: "809127052668",
  appId: "1:809127052668:web:d454b1c1bc4e551300d0f9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
