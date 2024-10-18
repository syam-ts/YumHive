import { useSelector } from "react-redux";
import CartMenu from "./CartMenu.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice.js"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer.js";

const Cart = () => {
  
  interface Store {
    cart: SliceData,
    user: SliceData
  }

  type SliceData = {
    items: any,
    isUser: boolean
  }

  const cartItems = useSelector((store: Store) => store.cart.items);
  const user = useSelector((store: Store) => store.user.isUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
      
      // useEffect(() => {
      //   !user && navigate('/home')
      // }, [])

      useEffect( function () {

        const cartItems = async () => {
          try { 
            const res = await fetch('http://localhost:3000/getProducts', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            })
      
             
             const result = await res.json()
             const data = result.data
             
             setCart(data); 
      
          } catch (err: any) {
            console.log('cannot add items to cart');
          }
        }


        cartItems();
      }, [setCart]);



  const handleClearCart = async () => {
    try { 
      const res = await fetch('http://localhost:3000/clearCart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

        navigate('/')
      
       console.log('Cart Cleared!');

    } catch (err: any) {
      console.log(err.message);
    }
  };

  

  return (
    <div className="text-center">
 
      {
        cart.length > 0 ? 
        <div>
          <h1 className="font-bold text-3xl"> Cart Items</h1>
          <div className="grid">
      {cart.map((item: any) => (
        <CartMenu key={item._id} {...item} />
      ))}
    </div>
    <div className='flex gap-96 justify-center'>
      
  
        <div>
          <button
            className=" items-center justify-center px-2 py-3 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-sky-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1"
            onClick={() => handleClearCart()}
          >
             Clear Cart
          </button>
        </div>
        {/* checkout */}
        <div>
          <Link  to='/checkout'>
          <button
            className=" items-center justify-center px-2 py-3 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-sky-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1"
  
          >
           Checkout
          </button>
          </Link>
        </div> 
        
    </div>
        </div> :
       <Shimmer />
      }
    </div>
  );
};


export default Cart
