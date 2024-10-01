import React, { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import OAuth from "./OAuth"

const Header =() => {
 
    const cartItems = useSelector((store: any )=> store.cart.items) 
    const userImage = useSelector((store: any ) => store.user.currentUser)
    const userIn = useSelector((store: any) => store.user.isUser)
    const navigate = useNavigate()

    useEffect(() => {
        const checkUserIn = () => {
          if (!userIn) {
            navigate('/home');  
          }
        };
    
        checkUserIn();
      }, [userIn, navigate]);
    
      
    
 

    return(
        <header className="header sticky top-0 bg-white shadow-md z-0 flex items-center py-02">
 
        <h1 className="w-3/12">
            <a href="/">
            <img 
            className="w-24 p-2"
            src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-98-580x386.jpg" alt="logo-yumgive"/>
            </a>
        </h1>
       
       
        <nav className="nav quicksand-regular text-sm">
            <ul className="flex items-center gap-12">
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-400 duration-200 cursor-pointer active">
                <Link to='/'> HOME </Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-400 duration-200 cursor-pointer">
                  <Link to="/about">ABOUT</Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-400 duration-200 cursor-pointer">
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-400 duration-200 cursor-pointer">
                  <Link to="/instamart">INSTAMART</Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-400 duration-200 cursor-pointer">
       
       
                 <Link to="/cart">  
                 <div className="flex flex-wrap">
                  <span > CART </span>
                  <svg className="h-4 ml-2 hover:text-green-500 opacity-55 duration-200" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">
                  </path>
                  </svg>
                 <span className="pl-2"> - {cartItems.length}</span>
                 </div> 
                  </Link> 
                </li>
              {userIn}
                 {userIn ? (
                      <li>
                      <OAuth method='sign-out'/>
                    </li>
                 ) : (
                   <li>
                   <OAuth method='sign-in'/>
                 </li>
                 )
               }
                 <li className='pl-96'>
          
                   <img className='w-8 rounded-full' src={userImage} />
                 </li>
            </ul>
        </nav>
       
       
       </header>

            
    )
 
}


export default Header