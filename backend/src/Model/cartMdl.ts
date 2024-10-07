import { Schema, model } from 'mongoose';


const cartSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 100
    },
    rating: {
        type: Number
    },
    Type: {
        type: String,
        default: 'VEG'
    }
});

 const Cart = model('Cart', cartSchema);

 export default Cart;