import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const LayoutShop = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default LayoutShop;
