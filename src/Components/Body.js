import ResturantCard from './RestaurantCard';
import { restaurantData } from '../config';
import { useState } from 'react';

const Body = () => {
  const [searchText, setSearchText] =
    useState('');
  const [foodList, setFoodList] = useState(
    restaurantData
  );

  const filterRestaurantData = () => {
    const filteredData = restaurantData.filter(
      (restaurant) => {
        return restaurant.data.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
    );
    setFoodList(filteredData);
  };

  return (
    <div className='body'>
      <h2>Food Lists</h2>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
           filterRestaurantData();
          }}
        />
        <button
          className='search-btn'
          onClick={() => {
            console.log('search1', searchText);
            filterRestaurantData();
          }}
        >
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {foodList.map((restaurant) => {
          return (
            <ResturantCard
              {...restaurant.data}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
