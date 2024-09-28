import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../Firebase/firebase.ts'

function OAuth() {

    const handleGoogle = async () => {

        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth()


            const result = await signInWithPopup(auth, provider)
            console.log('The result : ', result)

            console.log(result)
        } catch (err: any) {
            console.log(err)
        }
    }
    
  return (
    <div>
          <button  type='button'
         onClick={handleGoogle}
     className=" p-3 uppecase">
      Log In
     </button>
    </div>
  )
}

export default OAuth