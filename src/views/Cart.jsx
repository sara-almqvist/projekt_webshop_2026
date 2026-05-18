import { Link } from 'react-router-dom';
import CartList from '../components/CartList.jsx';
import useCart from '../components/useCart.js';
import TotalSum from '../components/TotalSum.jsx';
import InspirationProducts from '../components/InspirationProducts.jsx';

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      {cart.length > 0 ? (
        <>
          <h1 className="text-[#ed6b35] text-xl font-semibold">
            Innehållet i din kundvagn
          </h1>
          <CartList products={cart} />
          <TotalSum />
          <Link
            to={'/checkout'}
            className="bg-[#32033a] p-3 rounded-full text-white text-lg font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 my-2"
          >
            Till kassan
          </Link>
        </>
      ) : (
        <div className="md:min-h-150">
          <p className="text-[#ed6b35] text-xl italic font-medium p-4 mt-6">
            Kundvagnen är tom
          </p>
          <br />
          <Link
            to={'/categories'}
            className="text-[#ed6b35] text-xl font-semibold cursor-pointer bg-white/50 rounded-xl p-2 hover:bg-[#32033a] hover:text-white"
          >
            Här hittar du något att fylla den med!
          </Link>
          <InspirationProducts />
          <br />
        </div>
      )}
    </>
  );
};

export default Cart;
