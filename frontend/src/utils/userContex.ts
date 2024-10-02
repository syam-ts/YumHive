import {  createContext } from 'react'

const userContext = createContext({
    user : {
        name:  "syam",
        email: "syamnandhu3@gamil.com"
    }
})


export default userContext