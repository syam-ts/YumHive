const CartMenu = ({ id, name, imageId, description, price }) => {
  console.log("name: ", imageId);


  return (
    
      <div key={id} className="grid gap-12 p-12 flex-wrap">
        <img
          className="h-[100px] w-[200px] object-cover rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          alt={name}
        />
        <span className="text-xl font-mono">{name}</span>
        <h3 className="font-mono">{description}</h3>
        <h4 className="font-mono text-xs">{price}</h4>
      </div> 
  );
};

export default CartMenu;
