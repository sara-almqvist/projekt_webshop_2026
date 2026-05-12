import { useContext } from 'react';
import CartContext from '../contexts/CartContext.js';

function useCart() {
  const {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    increment,
    decrement,
    addNewQuantity,
  } = useContext(CartContext);
  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    increment,
    decrement,
    addNewQuantity,
  };
}

export default useCart;
