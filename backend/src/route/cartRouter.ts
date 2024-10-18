import express from 'express';
import { addProductToCart, getProductInCarts, clearCart } from '../controllers/cartCtrl';


const router = express.Router();

router.get('/getProducts', getProductInCarts);
router.post('/addToCart', addProductToCart);
router.get('/clearCart', clearCart);


export default router;