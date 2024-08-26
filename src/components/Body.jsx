import { restrauntList } from "../config.js"
import ResturarntCard from "./ResturarntCard.jsx"
import { useState, useEffect } from "react"
import Shimmer from './Shimmer.jsx'
import Error from './Error.jsx'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

// const { id } = useParams()

// console.log('The id ', id)

let Body = () => {

  const [allRestaurant, setAllRestaurent] = useState([])
  const [filteredRestaurant, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState("")

  const filterData = (searchText, allRestaurant) => {
    const founded = allRestaurant.filter((restaurant) =>
      restaurant?.info?.name.includes(searchText)
    )
    return founded
  }


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

        useEffect(() => {

          getRestaurants()
        }, [])

      
        if( filteredRestaurant.length === 0 ) {
          <Shimmer />
        } else {
          
        }


        return filteredRestaurant.length === 0 ? <Shimmer />  :
            <>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value)
                  }}
                />
                <button
                  className="search-btn"
                  onClick={() => {
                    const filteredData = filterData(searchText, allRestaurant)
                    setFilteredRestaurent(filteredData)
                  }}
                >
                  Search
                </button>
              </div>
            
              <div className="res">
                {filteredRestaurant.map((restraunt) => {
                   console.log(restraunt.info.id)
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
          
            </>
          


}

export default Body
