import { Link } from 'react-router-dom';
import CartList from '../components/CartList.jsx';
import useCart from '../components/useCart.js';

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <h1>Din kundvagn</h1>
      {cart.length > 0 ? (
        <CartList products={cart} />
      ) : (
        <>
          <p>Kundvagnen är tom</p>
          <Link to={'/categories'}>Här hittar du hela vårt utbud!</Link>
        </>
      )}
    </>
  );
};

export default Cart;
