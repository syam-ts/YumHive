const ResturarntCard = (res) => {
  
  return (
    <div className="card">
         <img className="card-img" src={res.image ? res.image : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`} /> 
      <h2> {res.name ? res.name : res?.info?.name } </h2>
      <h3>  {res.cuisine ? res.cuisine.join(', ') : res?.info?.cuisines?.join(", ") } </h3>
      <h4>  {res.rating ? res.rating  : res?.info?.avgRating } </h4> 
    </div>
  )
}

export default ResturarntCard
