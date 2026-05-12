import { Link } from 'react-router-dom';
import CartList from '../components/CartList.jsx';
import useCart from '../components/useCart.js';
import TotalSum from '../components/TotalSum.jsx';

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <h1>Din kundvagn</h1>
      {cart.length > 0 ? (
        <>
          <CartList products={cart} />
          <TotalSum />
          <Link
            to={'/checkout'}
            className="bg-blue-300 text-black hover:bg-blue-500"
          >
            Till kassan
          </Link>
        </>
      ) : (
        <>
          <p>Kundvagnen är tom</p>
          <br />
          <Link to={'/categories'}>Här hittar du något att fylla den med!</Link>
          <br />
        </>
      )}
    </>
  );
};

export default Cart;
