import Title from "./Title.jsx"
import { useState , useContext } from "react"
import { Link } from 'react-router-dom'
import userContext from '../utils/userContex.js'
 
 
const loggedInUser = () => {
  return true;
}

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)

  
const  {user} = useContext( userContext )


  return (
    <div className="flex">
      <Title />
      <div>
        <ul className="flex gap-24 text-center pt-5 pl-96">
         <li className="hover:underline hover:text-blue-500"> <Link to="/"> Home</Link></li>
         <li className="hover:underline hover:text-blue-500"> <Link to="/about"> About </Link></li>
         <li className="hover:underline hover:text-blue-500"> <Link to="/contact"> Contact </Link></li>
         <li className="hover:underline hover:text-blue-500"> Cart </li> 
         <li className="hover:underline hover:text-blue-500"> <Link to="/instamart"> Instamart </Link></li> 
      {isloggedIn ? (
         <li className="hover:text-blue-500"> <button onClick={() => setIsLoggedIn(false)}> Logout </button> </li> 
        
      ) : (
        <li className="hover:text-blue-500"> <button onClick={() => setIsLoggedIn(true)}> Login </button> </li> 
      )}
            </ul> 
       </div>
    </div>
  )
}

export default Header

