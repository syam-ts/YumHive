import Product from '../Model/productMdl'



export const addProduct = async (req: any, res: any) => {

    try {

        const {productName, productImage, price, rating} = req.body;
        

  console.log('The body : ', productName, productImage, price, rating)

    } catch (err: any) {
        res.json({message: err.message});
    }
};