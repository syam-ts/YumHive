"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const CartMenu_jsx_1 = __importDefault(require("./CartMenu.jsx"));
const react_redux_2 = require("react-redux");
const cartSlice_js_1 = require("../utils/cartSlice.js");
const Cart = () => {
    const cartItems = (0, react_redux_1.useSelector)((store) => store.cart.items);
    const dispatch = (0, react_redux_2.useDispatch)();
    const handleClearCart = () => {
        dispatch((0, cartSlice_js_1.clearCart)());
    };
    return (<div className="text-center">
      <h1 className="font-bold text-3xl"> Cart Items</h1>
      <div className="grid">
        {cartItems.map((item) => (<CartMenu_jsx_1.default key={item.id} {...item}/>))}
      </div>

      <div>
        <button className="bg-gray-500 p-2 m-3" onClick={() => handleClearCart()}>
          Clear Cart
        </button>
      </div>
    </div>);
};
exports.default = Cart;
