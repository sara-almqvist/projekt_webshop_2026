import { useState } from 'react';
import CartContext from '../contexts/CartContext.js';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const clearCart = () => setCart([]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((obj) => obj.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
