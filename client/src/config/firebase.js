
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-b8ce5.firebaseapp.com",
    projectId: "mern-estate-b8ce5",
    storageBucket: "mern-estate-b8ce5.appspot.com",
    messagingSenderId: "126725282879",
    appId: "1:126725282879:web:3af73a551548f914ac2c8a"
};

export const app = initializeApp(firebaseConfig);
