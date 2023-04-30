import { useParams } from 'react-router-dom';
import { imgCDN } from '../config';
import { addItem } from '../utils/cartSlice';
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';

const FoodDetail = () => {
  const params = useParams();
  const resId = Number(params.id);
  const { restaurant, restaurantInfo } = useRestaurant(resId);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
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
      <div>
      </div>
      <div className='menu-item'>
        <h3>Menu List</h3>
        {Object.values(restaurant).map((item) => (
          <p className='food-name' key={item?.card?.info?.id}>
            {item?.card?.info.name} <button onClick={()=>{
              handleAddItem(item?.card?.info)
            }}>+</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default FoodDetail;
