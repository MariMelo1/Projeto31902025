// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYSrQAYBnsf1hzhxJpWgy0LzvbLcMdw8",
  authDomain: "mobile3190-90426.firebaseapp.com",
  projectId: "mobile3190-90426",
  storageBucket: "mobile3190-90426.firebasestorage.app",
  messagingSenderId: "929605492598",
  appId: "1:929605492598:web:04fc2820f46617c1cea457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);