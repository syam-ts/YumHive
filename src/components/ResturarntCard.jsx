const ResturarntCard = res => {
   
  return (
    <div key={res?.info?.id}> 
      <img className="h-[220px] w-[330px] rounded-md" 
      src={res.image ? res.image : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
       /> 
      <span 
      className="text-xl font-bold font-mono"
      > 
        {res.name ? res.name : res?.info?.name } 
        </span>
      <h3 className="font-mono"> 
        {res.cuisine ? res.cuisine.slice(0,2).join(', ') : res?.info?.cuisines?.slice(0,2).join(", ") }
         </h3>
      <h4 className="font-mono">
         {res.rating ? res.rating : res?.info?.avgRating } ⭐
         </h4> 
    </div>
  )
}

export default ResturarntCard
