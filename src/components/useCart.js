import { useContext } from 'react';
import CartContext from '../contexts/CartContext.js';

function useCart() {
  const { cart, addToCart, clearCart, removeFromCart } =
    useContext(CartContext);
  return { cart, addToCart, clearCart, removeFromCart };
}

export default useCart;
