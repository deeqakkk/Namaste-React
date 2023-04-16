import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgCDN } from '../config';
import Shimmer from './Shimmer';
const FoodDetail = () => {
  const params = useParams();
  const resId = Number(params.id);
  const [restaurant, setRestaurant] = useState({});
  const [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    async function getRestaurantInfo() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4461342&lng=77.0645413&restaurantId=` +
          resId +
          `&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
      setRestaurant(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      );
    }
    getRestaurantInfo();
  });
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className='food-detail'>
        <h3>{restaurantInfo.name} </h3>
        <p>City: {restaurantInfo.city}</p>
        <p>Average Rating: {restaurantInfo.avgRating}</p>
        <p>Cost for Two: {restaurantInfo.costForTwo}</p>
        <img className='card-img' src={imgCDN + restaurantInfo.cloudinaryImageId} alt='food-img' />
      </div>
      <div className='menu-item'>
        <h3>Menu List</h3>
        {Object.values(restaurant).map((item) => (
          <p className='food-name' key={item?.card?.info?.id}>
            {item?.card?.info.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default FoodDetail;
