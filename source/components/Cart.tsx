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
      <h1 className="font-bold text-3xl"> Cart Items</h1>
      <div className="grid">
        {cartItems.map((item: any) => (
          <CartMenu key={item.id} {...item} />
       
        ))}
      </div>

      <div>
        <button
          className="bg-gray-400 p-2 m-3 rounded-2xl hover:opacity-60 hover:text-white"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart
