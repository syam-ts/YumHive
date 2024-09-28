import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.ts";
import { signInUser, signOutUser } from "../utils/cartSlice.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app)

const OAuth = (method: any) => { 

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {

      const provider = new GoogleAuthProvider()
      const result: any = await signInWithPopup(auth, provider)
 
      const user = result.user;
    const userData = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    };

      dispatch(signInUser(userData))
      console.log("Logged in successfully")
      navigate('/em')
    } catch (err: any) {
      console.error("Sign-in error:", err)
    }
  };


  const handleGoogleSignOut = async () => {
    try {
      console.log('Signout')
      const auth = getAuth();
      await auth.signOut();
      dispatch(signOutUser());  
      console.log("Signed out successfully");
    } catch (err: any) {
      console.log(err);
    }
  }



  return method.method === "sign-in" ? (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className=" p-3 uppecase"
      >
        Log In
      </button>
    </div>
  ) : (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignOut}
        className=" p-3 uppecase"
      >
  
        Log Out
      </button>
    </div>
  )
}


export default OAuth
