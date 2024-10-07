import { Schema, model } from 'mongoose';


const productSchema = new Schema({
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

 const Product = model('Product', productSchema);

 export default Product;