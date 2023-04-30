import { useContext } from 'react';
import UserContext from '../utils/userContext';

const Footer = () => {
  const userData = useContext(UserContext);
  return <h5>This site is developed by :{userData.user.name}</h5>;
};
export default Footer;
