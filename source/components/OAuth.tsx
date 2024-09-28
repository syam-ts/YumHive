import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import app from "../Firebase/firebase.ts";
import { signInUser, signOutUser } from "../utils/userSlice.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app)

const OAuth = (method: any) => { 

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {

      const provider = new GoogleAuthProvider()
      setPersistence(auth, browserLocalPersistence)
      const result: any = await signInWithPopup(auth, provider)
 
      const user = result.user;
    const userData = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    };

      dispatch(signInUser(userData.image))
      navigate('/')
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
      navigate('/home')
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
        LOG IN
      </button>
    </div>
  ) : (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignOut}
        className=" p-3 uppecase"
      >
  
        LOG OUT
      </button>
    </div>
  )
}


export default OAuth
