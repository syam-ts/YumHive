import React from 'react'

const ResturarntCard = (res: any) => {
    

  return (
    <div key={res?.info?.id} className="overflow-hidden">
    <img
      className="h-[200px] w-[300px] object-cover rounded-md"
      src={
        res.image
          ? res.image
          : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`
      }
      alt={res.name ? res.name : res?.info?.name}
    />
    <span className="text-xl font-mono">
      {res.name ? res.name : res?.info?.name}
    </span>
    <h3 className="font-mono">
      {res.cuisine
        ? res.cuisine.slice(0, 2).join(', ')
        : res?.info?.cuisines?.slice(0, 2).join(', ')}
    </h3>
    <h4 className="font-mono text-xs">
       {res?.info.areaName}
    </h4>
    <h4 className="font-mono">
      {res.rating ? res.rating : res?.info?.avgRating} ⭐
    </h4>
  </div> 
  
  )
}
 
export default ResturarntCard
