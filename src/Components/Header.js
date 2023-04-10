import { useState } from 'react';
import Title from './Title';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Career</li>
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
    </div>
  );
};

export default Header;
