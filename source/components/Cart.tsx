import { useSelector } from "react-redux";
import CartMenu from "./CartMenu.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js"
import React from 'react'

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

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
