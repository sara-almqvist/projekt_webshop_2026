import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CartSymbol from '../components/CartSymbol';
//Standardlayout to wrapp webbsitecontent
const LayoutShop = ({ children }) => {
  return (
    <>
      <div className="flex gap-4 justify-start items-center bg-[#32033a]">
        <Link to={'/'} className="w-1/6 ">
          <img
            src="https://res.cloudinary.com/dfplwytwx/image/upload/v1778768249/Ska%CC%88rmavbild_2026-05-14_kl._16.16.03_nrcjds.png"
            alt="logga"
            className="w-full"
          />
        </Link>
        <h1 className="basis-2/3 text-white text-6xl">Allt & Lite Till</h1>
        <Link to={'/cart'} className="max-w-40">
          <CartSymbol />
        </Link>
      </div>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default LayoutShop;
