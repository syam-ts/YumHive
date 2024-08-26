import { useState, useEffect } from 'react'
import { FETCH_MENU_URL } from '../constants.js'

const useRestaurant = ( resId ) => {
    const [restaurant , setRestaurant ] = useState(null)

    useEffect(() => {

        getRestrauntinfo()
     }, [])

 
    async function getRestrauntinfo() {
     const data = await fetch(
        FETCH_MENU_URL + resId
     )
 
     const json = await data.json()
     setRestaurant(json.data?.cards[2]?.card?.card?.info)
    }

    return restaurant
}

export default useRestaurant