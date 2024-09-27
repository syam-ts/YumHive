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
    <div className="grid gap-44 pl-5 pt-12">
      <div className="grid p-5 border-gray-300 border-2 ">
        {/* <h1>Restraunt id: {id}</h1> */}
        <img className="w-96" src={IMG_CDN_URl + restaurant?.cloudinaryImageId} />
        <sapn className="font-mono text-2xl"> {restaurant?.name} </sapn>
        <span className="font-mono text-xl">{restaurant?.city}</span>
        <span className="font-mono text-lg">{restaurant?.avgRating} start</span>
        <span className="font-mono">{restaurant?.constForTwoMsg}</span>
      </div> 




    {/* menu */}
      <div className="grid decoration">
        <h1 className="text-3xl font-mono"> Menu </h1>
     
        { menus == undefined ? 
        <div> Empty </div> :
          menus.map((menu, index) => {
           {console.log(menu?.card?.info)}
            return (
              
              <div className='h-[217px] w-[800px] border-b flex justify-between m-4 mx-auto ' key={menu?.card?.info?.id}>
                <div className='grid p-10'>
                <img className='h-7' src='https://packagingguruji.com/wp-content/uploads/2022/09/New-Non-Logo.png' />
              <h1> {menu?.card?.info?.name} </h1>
                  <span className='font-bold'> {menu?.card?.info?.defaultPrice}</span>
                  <span className='font-bold'> {menu?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                  <span className='font-bold'> {menu?.card?.info?.itemAttribute?.vegClassifier} </span> 
                    </div>
                <div className=''> 
                   <img className='h-[140px] w-[160px] rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menu?.card?.info?.imageId}`} />
              
       
         <div className='grid'>
         <button className="bg-white border font-bold border-gray-700 mx-5 p-1 h-[34px] w-[119px] rounded-lg "
                  onClick={() => handleAddItem(menu?.card?.info)}
                >
                  Add
                </button>
                <span className='text-xs mx-11'>
                Customisable
                </span>
         </div>
                </div>
             
              </div>
            )
          })
        }
      </div>
    
    </div>
  )
}


export default RestaurantMenu

