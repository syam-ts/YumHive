import express from 'express';
import { addProductToCart } from '../controllers/cartCtrl';


const router = express.Router();


router.post('/addToCart', addProductToCart);


export default router;