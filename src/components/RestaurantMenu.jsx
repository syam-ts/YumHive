import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { IMG_CDN_URl } from '../constants.js'
import Shimmer from './Shimmer.jsx'

const RestaurantMenu = () => {

    const { id } = useParams()
    const [restaurant   ,setRestaurant] = useState(null)

    useEffect(() => {

       getRestrauntinfo()
    }, [])

   async function getRestrauntinfo() {
    const data = await fetch(
     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id} `
    )

    const json = await data.json()
    console.log(json.data?.cards[2]?.card?.card?.info)
    setRestaurant(json.data?.cards[2]?.card?.card?.info)
   }

 
   return (!restaurant) ? <Shimmer /> :
        (
        <div className="menu">
          <div>
            <h1>Restraunt id: {id}</h1>
            <h2> {restaurant?.name} </h2>
            <img src={IMG_CDN_URl + restaurant?.cloudinaryImageId } /> 
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} start</h3>
            <h3>{restaurant?.constForTwoMsg}</h3>
        </div>

        <div>
             <h1> Menu </h1>
        </div>
        </div>
      
    )
}

export default RestaurantMenu