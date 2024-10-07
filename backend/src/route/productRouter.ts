import express from 'express';
import { addProduct } from '../controllers/productCtrl';


const router = express.Router();


router.post('/addProduct', addProduct);


export default router;