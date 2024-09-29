import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { IMG_CDN_URl } from '../utils/constants.js'
import Shimmer from './Shimmer.js'
import useRestaurant from '../utils/useRestaurant.js' 
import { useDispatch } from 'react-redux'
import { addItem } from '../slices/cartSlice.js'

const RestaurantMenu = () => {

  
 

  const {id}: any = useParams()  
  const restaurant: any = useRestaurant(id)
  const [menus, setMenus] = useState([]) 
  const dispatch = useDispatch()


  const handleAddItem = (item: any)  => {
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


  // resturant card
  return (!restaurant && !menus) ? <Shimmer /> : (
    <div className="grid pl-5 pt-5">
      <div className="flex mx-72 my-20">  
      <div>
      <img className="w-96 rounded-lg" src={IMG_CDN_URl + restaurant?.cloudinaryImageId} /> 
       
      </div>
       <div className='flex text-end my-44'>
       <span className="font-mono ml-20 text-2xl"> {restaurant?.name} </span>
       <span className="font-mono ml-20 text-xl"> {restaurant?.locality} </span>
        <span className="font-mono ml-20 text-xl">{restaurant?.city}</span>
    
                  <span className="font-mono ml-20 text-md">{restaurant?.avgRating} </span>
 
       <span className="font-mono ml-20">{restaurant?.costForTwo}</span>
        <span className="font-mono ml-20">{restaurant?.isOpen ? 'Open' : 'Closed'}</span>
       </div>
        
      </div> 




    {/* menu */}
      <div className="grid decoration">
        <h1 className="text-3xl font-mono text-center border-b p-2 "> Menu Card </h1>
     
        { menus == undefined ? 
        <div> Empty </div> :
          menus.map((menu: any, index: number) => { 
            return (
              
              <div className='h-[217px] w-[800px] border-b flex justify-between m-4 mx-auto ' key={menu?.card?.info?.id}>
                <div className='grid p-10'>
                <img className='h-7' src='https://packagingguruji.com/wp-content/uploads/2022/09/New-Non-Logo.png' />
              <h1 className='font-semibold  quicksand-regular'> {menu?.card?.info?.name} </h1>
                  <span className='quicksand-regular'> ₹ {menu?.card?.info?.price}</span>
                  <span className='quicksand-regular text-green-600 flex'> <img className='h-5' src='data:image/jpeg;base64,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' /> {menu?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                  <span className='quicksand-regular'> {menu?.card?.info?.itemAttribute?.vegClassifier} </span> 
                    </div>
                <div className=''> 
                   <img className='h-[140px] w-[160px] transition duration-300 ease-in-out hover:scale-110 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menu?.card?.info?.imageId}`} />
              
       
         <div className='grid'>
         <button className="bg-white border transition duration-300 ease-in-out hover:scale-110 font-bold border-gray-700 mx-5 text-green-500 p-1 h-[34px] w-[119px] rounded-lg "
                  onClick={() => handleAddItem(menu?.card?.info)}
                >
                  ADD
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

