// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB53orekwZoDTJJHvXfnzVT3hEuNN1pw0A",
  authDomain: "netflx-gpt-99dbc.firebaseapp.com",
  projectId: "netflx-gpt-99dbc",
  storageBucket: "netflx-gpt-99dbc.firebasestorage.app",
  messagingSenderId: "674742679677",
  appId: "1:674742679677:web:8e07c7f9db02436372d914",
  measurementId: "G-36HYJQ2PDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // 🔥 export auth for use elsewhere