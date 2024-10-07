import express from 'express';
import { addProductToCart, getProductInCarts } from '../controllers/cartCtrl';


const router = express.Router();

router.get('/getProducts', getProductInCarts);
router.post('/addToCart', addProductToCart);


export default router;