import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';

const BodyComponent = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async() => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true");
        const responseJSON =await response.json();

         console.log("restaurants:", responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        /*
        const swiggyresponse = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
        const swiggyresponseJSON =await swiggyresponse.json();

         console.log("swiggyresponse restaurants:", swiggyresponseJSON?.data);
       */
        
    }    

    if (listOfRestaurants?.length === 0) {
        return (
            <h1>Loading....</h1>
        )
    } else {
        return (
            <div className="body-container">
                <div className='container'>
                    <div className="restaurant-container"> 
                        {listOfRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    
}

export default BodyComponent
