// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyilPbdDSVujo3X_8CdDRY7g718_jyWyw",
  authDomain: "ecommerceyt-52b7f.firebaseapp.com",
  projectId: "ecommerceyt-52b7f",
  storageBucket: "ecommerceyt-52b7f.appspot.com",
  messagingSenderId: "474410345903",
  appId: "1:474410345903:web:f8a7302e8d21c2d67c3b5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
