import ResturantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);

  const filterRestaurantData = () => {
    const filteredData = foodList.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredFoodList(filteredData);
    console.log('searchText', searchText);
  };

  useEffect(() => {
    try {
      async function getFoodList() {
        try {
          const response = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4461342&lng=77.0645413&page_type=DESKTOP_WEB_LISTING'
          );
          const json = await response.json();
          setFoodList(json?.data?.cards[2]?.data?.data?.cards);
          setFilteredFoodList(json?.data?.cards[2]?.data?.data?.cards);
        } catch (err) {
          console.log(err);
        }
      }
      getFoodList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return foodList.length === 0 ? (
    <Shimmer />
  ) : (
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
            filterRestaurantData();
          }}
        >
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {filteredFoodList.map((restaurant) => {
          return <ResturantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
        {filteredFoodList.length === 0 ? (
          <div className='no-results'>
            <h3>No Results Found</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Body;
