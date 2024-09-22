const CartMenu = ({ id, name, imageId, description, price }) => {
  console.log("name: ", imageId);


  return (
    
      <div key={id} className=" flex gap-3 mx-96 my-6 bg-slate-300 rounded-2xl w-[1200px]">
        <img
          className="h-[150px] w-[300px] object-cover rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          alt={name}
        />
        <div className="m-12">
        <span className="text-xl font-mono">{name}</span>
        <h3 className="font-mono">{description}</h3>
        <h4 className="font-mono text-xs">{price}</h4>      
        </div>
    </div> 
  );
};

export default CartMenu;
