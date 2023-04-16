import logoImg from '../assests/logo.png';
const Title = () => {
  return (
    <a href='/'>
      <img
        src={logoImg} alt='logo'
        className='logo'
      />
    </a>
  );
};

export default Title;