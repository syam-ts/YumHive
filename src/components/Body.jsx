import ResturarntCard from "./ResturarntCard.jsx"
import { useState, useEffect } from "react"
import Shimmer from './Shimmer.jsx'
import {Link} from 'react-router-dom'
import { filterData } from '../utils/helper.js'

let Body = () => {
  const [allRestaurant, setAllRestaurent] = useState([])
  const [filteredRestaurant, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    getRestaurants();
  }, []);
  
  async function getRestaurants() {
    try {
      const [swiggyResponse, secondApiResponse, thirdApiResponse] = await Promise.all([
        fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ),
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.007849499999999&lng=76.5411712&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        ,
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        )
      ])
  
      const swiggyJson = await swiggyResponse.json()
      const secondApiJson = await secondApiResponse.json()
      const thirdApiJson = await thirdApiResponse.json()
       
      const swiggyRestaurants = swiggyJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      const secondApiRestaurants = secondApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      const thirdApiRestaurants = thirdApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

      const combinedRestaurants = [...swiggyRestaurants, ...secondApiRestaurants,...thirdApiRestaurants]

      setAllRestaurent(combinedRestaurants)
      setFilteredRestaurent(combinedRestaurants)
    } catch (err) {
      console.log(err)
    }
  }
  
 
    // if(offline) {
    //   return <h1> 🔴 Offline, please check your internet connection!</h1>
    // }
      
  //search
        return filteredRestaurant.length === 0 ? <Shimmer /> :
           ( <>
              <div className="w-56 h-10 rounded-md mt-1 border-2 border-black ml-12">
                <input
                  type="text"
                  className="w-52 h-9 "
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value)
                  }}
                />
                <button
                  className="bg-black w-28 text-white rounded-full mt-2"
                  onClick={() => {
                    const filteredData = filterData(searchText, allRestaurant)
                    setFilteredRestaurent(filteredData)
                  }}
                >
                  Search
                </button>
              </div>
     {/* restaurant card */}
              <div className="flex flex-wrap gap-12 px-52 mt-28">
                {filteredRestaurant.map((restraunt) => { 
                   return (
                    <Link 
                    to={"/restraunt/"+ restraunt?.info?.id}
                    key={restraunt?.id}
                   >  
                   <div className="hover:scale-110 transition duration-500">
                   <ResturarntCard {...restraunt} /> 
                   </div>
          
                 </Link>
                   )        
                })}
          </div>
      </>)
}



export default Body
