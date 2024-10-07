import Cart from "../Model/cartMdl";

export const getProductInCarts = async (req: any, res: any) => {
  try {
    const cart: any = await Cart.find();
 

    res.json({data: cart});
  } catch (err: any) {
    res.json({ message: err.message });
  }
};



export const addProductToCart = async (req: any, res: any) => {
  try {
    console.log("The body : ", req.body);
    const { id, name, imageId, price, description } = req.body;

    const cart = await Cart.insertMany({
      id: id,
      productName: name,
      productImage: imageId,
      price: price,
      description: description,
    });
  } catch (err: any) {
    res.json({ message: err.message });
  }
};
