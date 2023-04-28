import { useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

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
            <Link to='cart'>Cart</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/instamart'>  Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline?'✅':'❌'}
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
