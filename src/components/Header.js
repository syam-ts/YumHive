import Title from './Title.js'
import { useState } from 'react'

const loggedInUser = () => {
   
  return true
}
 
const Header = () => {

  const [isloggedIn, setIsLoggedIn] = useState(false) 

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
            <li> Cart </li>
          </ul>
        </div>

 
    { 
    (isloggedIn ?  
    <button onClick={() => setIsLoggedIn(false)}> Logout </button> :
    <button onClick={() => setIsLoggedIn(true)}> Login </button>)
     }


      </div>
    )
  }

  export default Header