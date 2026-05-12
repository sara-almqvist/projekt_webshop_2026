import { useState } from 'react';
import CartContext from '../contexts/CartContext.js';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((obj) => obj.id === product.id)) {
      increment(product.id);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => setCart([]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((obj) => obj.id !== productId));
  };

  const increment = (productId) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity += 1;
    setCart([...restOfCart, ...productToChange]);
  };

  const decrement = (productId) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity -= 1;
    setCart([...restOfCart, ...productToChange]);
  };

  const addNewQuantity = (productId, newQuantity) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity = newQuantity;
    setCart([...restOfCart, ...productToChange]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        increment,
        decrement,
        addNewQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
