import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { IMG_CDN_URl } from '../constants.js'
import Shimmer from './Shimmer.jsx'
import useRestaurant from '../utils/useRestaurant.js' 
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice.js'

const RestaurantMenu = () => {

  const {id} = useParams()  
  const restaurant = useRestaurant(id)
  const [menus, setMenus] = useState([]) 
  const dispatch = useDispatch()


  const handleAddItem = (item) => {
      dispatch(addItem(item))
  }


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
      getMenus()
    }
  }, [restaurant])

  return (!restaurant && !menus) ? <Shimmer /> : (
    <div className="flex gap-44 pl-5 pt-12">
      <div className="grid p-5 border-gray-300 border-2 ">
        {/* <h1>Restraunt id: {id}</h1> */}
        <img className="w-96" src={IMG_CDN_URl + restaurant?.cloudinaryImageId} />
        <sapn className="font-mono text-2xl"> {restaurant?.name} </sapn>
        <span className="font-mono text-xl">{restaurant?.city}</span>
        <span className="font-mono text-lg">{restaurant?.avgRating} start</span>
        <span className="font-mono">{restaurant?.constForTwoMsg}</span>
      </div> 
     <div>
       <button className="bg-green-200 p-3 m-2"
         onClick={() => handleAddItem()}
       >
           Add Item
       </button>
     </div>
      <div className="grid decoration">
        <h1 className="text-3xl font-mono"> Menu </h1>
        { menus == undefined ? 
        <div> Empty </div> :
          menus.map((menu, index) => {
            return (
              <div key={menu?.card?.info?.id} 
              className="font-mono"
              >
                {index} {menu?.card?.info?.name}
                <button className="bg-green-100 p-1 mx-2"
                  onClick={() => handleAddItem(menu?.card?.info)}
                >
                  Add
                </button>
                {console.log(menu?.card?.info)}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default RestaurantMenu

