import { useContext, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const userData = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  if (!isOnline) {
    return <h1>Please Check your internet connection!!!</h1>;
  }

  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/instamart'> Instamart</Link>
          </li>
          <li>
            <Link to='cart'>Cart-{cartItems.length} Items</Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button
          className='log-out'
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Log out
        </button>
      ) : (
        <button
          className='login-btn'
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      <span>
        {isOnline ? '✅' : '❌'}
        {userData.user.name}
      </span>
    </div>
  );
};

export default Header;
