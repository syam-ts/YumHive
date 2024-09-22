import { useSelector } from 'react-redux'
import CartMenu from '../components/CartMenu.jsx'


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) 

    return (
        <div>
            {
                cartItems.map((item) => (
                    <CartMenu key={item.id} {...item} />
                ))
            } 
        </div>
    )
}

export default Cart