import Cart from '../Model/cartMdl'



export const addProductToCart = async (req: any, res: any) => {

    try {
        const {productName, productImage, price, rating} = req.body;
        

        

  const cart = await Cart.insertMany({ productName, productImage, price, rating });

    } catch (err: any) {
        res.json({message: err.message});
    }
};