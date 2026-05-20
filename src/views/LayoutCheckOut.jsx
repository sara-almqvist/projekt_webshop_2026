import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useCart from '../hooks/useCart';
import Nav from '../components/Nav';

const LayoutCheckOut = ({ children }) => {
  const { cart } = useCart();
  return (
    <>
      <div className="flex gap-4 justify-center sm:justify-start items-center bg-[#32033a]">
        <Link to={'/'} className=" w-1/2 sm:w-1/6 ">
          <img
            src="https://res.cloudinary.com/dfplwytwx/image/upload/v1778768249/Ska%CC%88rmavbild_2026-05-14_kl._16.16.03_nrcjds.png"
            alt="logga"
            className="w-full"
          />
        </Link>
        <h1 className="basis-2/3 text-white text-6xl font-medium hidden sm:block">
          Allt & Lite Till
        </h1>
      </div>
      {cart.length === 0 && <Nav />}
      {children}
      <Footer />
    </>
  );
};

export default LayoutCheckOut;
