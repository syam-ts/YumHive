import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { IMG_CDN_URl } from '../constants.js'
import Shimmer from './Shimmer.jsx'
import useRestaurant from '../utils/useRestaurant.js'
import userContext from '../utils/userContex.js'

const RestaurantMenu = () => {
  
  const {user} = useContext( userContext )
   
    const { id } = useParams()
    const restaurant = useRestaurant(id)

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
             <div>
              { user.email }
             </div>
        </div>
        </div>
      
    )
}

export default RestaurantMenu