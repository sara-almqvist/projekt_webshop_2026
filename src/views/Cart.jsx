import { Link } from 'react-router-dom';
import CartList from '../components/CartList.jsx';
import useCart from '../components/useCart.js';

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <h1>Din kundvagn</h1>
      {cart.length > 0 ? (
        <>
          <CartList products={cart} />
          <div className="text-red-500">
            Att betala:{' '}
            {cart.reduce((tot, obj) => {
              return tot + obj.quantity * obj.price;
            }, 0)}{' '}
            kr
          </div>
        </>
      ) : (
        <>
          <p>Kundvagnen är tom</p>
          <br />
          <Link to={'/categories'}>Här hittar du hela vårt utbud!</Link>
          <br />
        </>
      )}
    </>
  );
};

export default Cart;
