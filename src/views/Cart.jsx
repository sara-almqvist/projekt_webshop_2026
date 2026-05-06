import ProductList from '../components/ProductList';
import useCart from '../components/useCart.js';

const Cart = () => {
  const { cart, addToCart, clearCart, removeFromCart } = useCart();
  return (
    <>
      <h1>Din kundvagn</h1>
      {cart.length > 0 ? <ProductList data={cart} /> : <p>Kundvagnen är tom</p>}
    </>
  );
};

export default Cart;
