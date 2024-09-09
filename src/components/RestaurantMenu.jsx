import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { IMG_CDN_URl } from '../constants.js'
import Shimmer from './Shimmer.jsx'
import useRestaurant from '../utils/useRestaurant.js'

const RestaurantMenu = () => {

 const {id} = useParams()
 
  
  const restaurant = useRestaurant(id)
  const [menus, setMenus] = useState([])

  useEffect(() => {
    const menuId = restaurant?.id;
    if (menuId === undefined) {
      console.log('wait');
    } else {
      async function getMenus() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${menuId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json()
        setMenus(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
      }
      getMenus();
    }
  }, [restaurant]);

  return (!restaurant && !menus) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2> {restaurant?.name} </h2>
        <img src={IMG_CDN_URl + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} start</h3>
        <h3>{restaurant?.constForTwoMsg}</h3>
      </div>

      <div className="menu-res">
        <h1> Menu </h1>
        { menus == undefined ? 
        <div>hold</div> :
          menus.map((menu) => {
            return (
              <div key={menu?.card?.info?.id}>
                {menu?.card?.info?.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RestaurantMenu;