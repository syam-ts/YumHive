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
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
         <li> <Link to="/"> Home</Link></li>
         <li> <Link to="/about"> About </Link></li>
         <li> <Link to="/contact"> Contact </Link></li>
         <li> <Link to="/cart"> Cart </Link></li> 
         <li> <Link to="/instamart"> Instamart </Link></li> 
        </ul>
      </div>
      <div> {user.name} &  { user.email }</div>

      {isloggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}> Logout </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}> Login </button>
      )}
    </div>
  )
}

export default Header

