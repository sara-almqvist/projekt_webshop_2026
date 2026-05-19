import { useState } from 'react';
import CartContext from '../contexts/CartContext.js';

function CartProvider({ children }) {
  let checkLocal = JSON.parse(localStorage.getItem('cart'));
  let status;
  if (checkLocal) {
    status = checkLocal;
  } else {
    status = [];
  }

  const [cart, setCart] = useState(status);

  const storeLocal = () => localStorage.setItem('cart', JSON.stringify(cart));

  const addToCart = (product) => {
    if (cart.some((obj) => obj.id === product.id)) {
      increment(product.id);
    } else {
      setCart([...cart, product].sort((a, b) => a.id - b.id));
      localStorage.setItem(
        'cart',
        JSON.stringify([...cart, product].sort((a, b) => a.id - b.id))
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((obj) => obj.id !== productId));
    localStorage.setItem(
      'cart',
      JSON.stringify(cart.filter((obj) => obj.id !== productId))
    );
  };

  const increment = (productId) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity += 1;
    setCart([...restOfCart, ...productToChange].sort((a, b) => a.id - b.id));
    storeLocal();
  };

  const decrement = (productId) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity -= 1;
    setCart([...restOfCart, ...productToChange].sort((a, b) => a.id - b.id));
    storeLocal();
  };

  const addNewQuantity = (productId, newQuantity) => {
    const productToChange = cart.filter((obj) => obj.id === productId);
    const restOfCart = cart.filter((obj) => obj.id !== productId);
    productToChange[0].quantity = newQuantity;
    setCart([...restOfCart, ...productToChange].sort((a, b) => a.id - b.id));
    storeLocal();
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
