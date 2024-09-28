import { initializeApp } from "firebase/app"
 
 
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "yumhive-5d9cb.firebaseapp.com",
  projectId: "yumhive-5d9cb",
  storageBucket: "yumhive-5d9cb.appspot.com",
  messagingSenderId: "954755685522",
  appId: "1:954755685522:web:aa2443985ce1d09e541a4b"
}


export const app = initializeApp(firebaseConfig)