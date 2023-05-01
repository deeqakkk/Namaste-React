import logoImg from '../assests/logo.png';
const Title = () => {
  return (
    <a href='/'>
      <img data-testid='logo' src={logoImg} alt='logo' className='logo' />
    </a>
  );
};

export default Title;
