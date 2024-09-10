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
              {/* <div className="flex gap-12 w-56 h-10 rounded-md mt-1 border-2 border-black ml-12">
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
                  className="w-28 text-black mt-2"
                  onClick={() => {
                    const filteredData = filterData(searchText, allRestaurant)
                    setFilteredRestaurent(filteredData)
                  }}
                >
                  Search
                </button>
              </div> */}

             
<div class='max-w-md mx-auto mt-5 shadow-xl rounded-md '>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300" onClick={() => {
                    const filteredData = filterData(searchText, allRestaurant)
                    setFilteredRestaurent(filteredData)
                  }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
        placeholder="Search something.." /> 
    </div>
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
