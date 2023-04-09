import { imgCDN } from '../config';

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  slaString,
}) => {
  return (
    <div className='card'>
      <img
        className='card-img'
        src={imgCDN + cloudinaryImageId}
        alt='food-img'
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(' ,')}</h3>
      <h4>{slaString}</h4>
    </div>
  );
};

export default ResturantCard;
