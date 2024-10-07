import { Schema, model } from 'mongoose';


const cartSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
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
    description: {
        type: String
    },
    Type: {
        type: String,
        default: 'VEG'
    }
});

 const Cart = model('Cart', cartSchema);

 export default Cart;