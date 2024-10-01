import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log('firebse : ',process.env.VITE_FIREBASE_API_KEY)
 
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "yumhive-5d9cb.firebaseapp.com",
  projectId: "yumhive-5d9cb",
  storageBucket: "yumhive-5d9cb.appspot.com",
  messagingSenderId: "954755685522",
  appId: "1:954755685522:web:aa2443985ce1d09e541a4b"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app