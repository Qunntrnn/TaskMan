// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-23a4b.firebaseapp.com",
  projectId: "taskmanager-23a4b",
  storageBucket: "taskmanager-23a4b.appspot.com",
  messagingSenderId: "1005885018355",
  appId: "1:1005885018355:web:da10ce4c18e7782a176786"
};

// Initialize Firebase
export const {app} = initializeApp(firebaseConfig);