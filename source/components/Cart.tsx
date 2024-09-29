import { useSelector } from "react-redux";
import CartMenu from "./CartMenu.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice.js"
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

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
      
      useEffect(() => {
        !user && navigate('/home')
      }, [])

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      {
        cartItems.length > 0 ? 
        <div>
          <h1 className="font-bold text-3xl"> Cart Items</h1>
        <div className="grid">
          {cartItems.map((item: any) => (
            <CartMenu key={item.id} {...item} />
         
          ))}
        </div>
  
        <div>
          <button
            className=" items-center justify-center px-2 py-3 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-green-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        </div> :
        <div className='my-72'>
          <h1 className='quicksand-bold'> Empty Cart </h1>
        </div>
      }
    </div>
  );
};


export default Cart
