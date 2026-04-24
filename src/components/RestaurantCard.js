import React from 'react'

const RestaurantCard = (props) => {
   const { resData } = props;
   console.log("resData:", resData);
   const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData;
    return (
        <div className='restaurant-card-tile restaurant-card'>
            <div className='restaurant-card-image'>
                <img alt="name" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <div className="restaurant-info">
                <h3 className='restaurant-card-name'>{name}</h3>
                <p className='restaurant-card-cuisines'>{cuisines.join(", ")}</p>
                <div className="restaurant-meta">
                    <div className='restaurant-card-avgRating rating'>{avgRating} stars</div>
                    <div className='restaurant-card-costForTwo'>{costForTwo}</div>
                    <div className='restaurant-card-deliveryTime'>{resData.sla.deliveryTime + "Minutes"}</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
