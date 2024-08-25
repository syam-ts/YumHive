import Title from './Title.js'

const loggedInUser = () => {
   
  return true
}
 
const Header = () => {
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

{ (loggedInUser() ?  <button> Logout </button> : <button> Login </button>) }


      </div>
    )
  }

  export default Header