// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_iBnllQABlWJ7mWCKek9HrOiBSyM7S7o",
  authDomain: "login-signup-react-1002.firebaseapp.com",
  projectId: "login-signup-react-1002",
  storageBucket: "login-signup-react-1002.firebasestorage.app",
  messagingSenderId: "1022511106561",
  appId: "1:1022511106561:web:e20946041969e30760ce00",
  measurementId: "G-44WS4JF74N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };