import ResturarntCard from "./ResturarntCard.js"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer.tsx"
import { Link, useNavigate } from "react-router-dom"
import { filterData } from "../utils/helper.js"
import React from 'react'
import { useSelector } from "react-redux"

let Body = () => {
  const [allRestaurant, setAllRestaurent] = useState([])
  const [filteredRestaurant, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState("")
  const userIn = useSelector((store: any) => store.cart.isUser)
  const navigate = useNavigate()
 

  useEffect(() => {
     if(!userIn) {
        navigate('/home')
     }
  },[])

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const [swiggyResponse, secondApiResponse, thirdApiResponse, fourthApiResponse, fifthApiResponse] =
        await Promise.all([
          fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ),
          fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.007849499999999&lng=76.5411712&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ),
          fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ),
          fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ),
          fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
        ]);

      const swiggyJson = await swiggyResponse.json();
      const secondApiJson = await secondApiResponse.json();
      const thirdApiJson = await thirdApiResponse.json();
      const fourthApiJson = await fourthApiResponse.json();
      const fifthApiJson = await fifthApiResponse.json();


      const swiggyRestaurants =
        swiggyJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const secondApiRestaurants =
        secondApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const thirdApiRestaurants =
        thirdApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const fourthApiRestaurants =
        fourthApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const fifthApiRestaurants =
        fifthApiJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      const combinedRestaurants: any = [
        ...swiggyRestaurants,
        ...secondApiRestaurants,
        ...thirdApiRestaurants,
        ...fourthApiRestaurants,
        ...fifthApiRestaurants,
      ];

      setAllRestaurent(combinedRestaurants);
      setFilteredRestaurent(combinedRestaurants);
    } catch (err) {
      console.log(err);
    }
  }

  // if(offline) {
  //   return <h1> 🔴 Offline, please check your internet connection!</h1>
  // }

  //search
  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
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

      <div className="max-w-md mx-auto mt-5 shadow-xl rounded-md">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div
            className="grid place-items-center h-full w-12 text-gray-300"
            onClick={() => {
              const filteredData = filterData(searchText, allRestaurant);
              setFilteredRestaurent(filteredData);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search something.."
          />
        </div>
      </div>

      {/* restaurant card */}
      <div className="flex flex-wrap gap-12 px-60 mt-12">
        {filteredRestaurant.map((restraunt: any) => {
          return (
            <Link to={"/restraunt/" + restraunt?.info?.id} key={restraunt?.id}>
              <div className="hover:scale-110 transition duration-500">
                <ResturarntCard {...restraunt} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
