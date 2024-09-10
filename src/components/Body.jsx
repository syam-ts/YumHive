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

    getRestaurants()
  }, [])

      async function getRestaurants() {
    
        try{
          const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
          const json = await data.json()
          setAllRestaurent(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setFilteredRestaurent(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch(err) {
            console.log(err)
        }
      }
 

    // if(offline) {
    //   return <h1> 🔴 Offline, please check your internet connection!</h1>
    // }
      
  //search
        return filteredRestaurant.length === 0 ? <Shimmer /> :
           ( <>
              <div className="w-56 h-10 rounded-md mt-1 border-2 border-black">
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
                  className="bg-black w-28 text-white rounded-md mt-5"
                  onClick={() => {
                    const filteredData = filterData(searchText, allRestaurant)
                    setFilteredRestaurent(filteredData)
                  }}
                >
                  Search
                </button>
              </div>
              <div className="flex flex-wrap gap-24 px-24 mt-28">
                {filteredRestaurant.map((restraunt) => { 
                   return (
                    <Link 
                    to={"/restraunt/"+ restraunt?.info?.id}
                    key={restraunt?.id}
                   >  
            <ResturarntCard {...restraunt} /> 
                 </Link>
                   )        
                })}
          </div>
      </>)
}



export default Body
