import { useEffect, useState } from 'react';
import { FETCH_RESTAURANTS } from '../config';
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantInfo, setRestaurantInfo] = useState({});
  useEffect(() => {
    async function getRestaurantInfo() {
      const data = await fetch(FETCH_RESTAURANTS + resId + `&submitAction=ENTER`);
      const json = await data.json();
      setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
      setRestaurant(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      );
    }
    getRestaurantInfo();
  },[resId]);

  console.log(restaurant, restaurantInfo);

  return { restaurant, restaurantInfo };
};
export default useRestaurant;
