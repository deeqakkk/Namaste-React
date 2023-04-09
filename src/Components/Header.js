import Title from './Title';

const Header = () => {
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
    </div>
  );
};

export default Header;
