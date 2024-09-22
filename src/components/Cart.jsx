import { useSelector } from 'react-redux'
import CartMenu from '../components/CartMenu.jsx'


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) 

    return (
        <div className="flex flex-wrap gap-12 px-60 mt-12">
            {
                cartItems.map((item) => (
                    <CartMenu key={item.id} {...item} />
                ))
            } 
        </div>
    )
}

export default Cart