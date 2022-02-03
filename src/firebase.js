// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsi4ETZzGSm-gHFF9ZsN6ViOmizcY1Sus",
  authDomain: "react-w2.firebaseapp.com",
  projectId: "react-w2",
  storageBucket: "react-w2.appspot.com",
  messagingSenderId: "652121283593",
  appId: "1:652121283593:web:9a5d16b0cb530994832cd8",
  measurementId: "G-B71NG24JQL"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();