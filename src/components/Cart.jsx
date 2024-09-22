import { useSelector } from 'react-redux'
import CartMenu from '../components/CartMenu.jsx'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice.js'


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) 
    const dispatch = useDispatch()

   const handleClearCart = () => {

    dispatch(clearCart())
   }

    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl"> Cart Items</h1>
            <div className="grid">
            {
                 cartItems.map((item) => (
                    <CartMenu key={item.id} {...item} />
                ))
            } 
            </div>
          
        <div>
          <button className="bg-gray-500 rounded-xl p-2 m-3"
           onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        </div>
    )
}

export default Cart