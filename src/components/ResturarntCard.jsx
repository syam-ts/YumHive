const ResturarntCard = res => {
   
  return (
    <div className="" key={res?.info?.id}> 
      <img className="h-[250px] w-[350px] rounded-md" 
      src={res.image ? res.image : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
       /> 
      <span 
      className="text-xl font-bold font-mono"
      > 
        {res.name ? res.name : res?.info?.name } 
        </span>
      <h3 className="font-mono"> 
        {res.cuisine ? res.cuisine.join(', ') : res?.info?.cuisines?.join(", ") }
         </h3>
      <h4 className="font-mono">
         {res.rating ? res.rating : res?.info?.avgRating } ⭐
         </h4> 
    </div>
  )
}

export default ResturarntCard
