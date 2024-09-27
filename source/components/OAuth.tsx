import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function OAuth() {

    const handleGoogle = async () => {

        try {
            const provider = new GoogleAuthProvider()


            const result = await signInWithPopup(auth, provider)

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