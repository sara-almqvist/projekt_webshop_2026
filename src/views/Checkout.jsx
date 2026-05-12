import CartList from '../components/CartList';
import OrderForm from '../components/OrderForm';
import TotalSum from '../components/TotalSum';
import useCart from '../components/useCart';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  return (
    <>
      <h1>Betala och få dina varor</h1>
      <p>
        Skapa formulär för att fylla i leveransadress alt kunna logga in och
        uppgifterna hämtas automatiskt
      </p>
      <OrderForm />
      <CartList products={cart} />
      <TotalSum />
      {cart.length > 0 && (
        <Link to={'/thanks'} onClick={() => clearCart()}>
          Betala och beställ
        </Link>
      )}
    </>
  );
};

export default Checkout;
