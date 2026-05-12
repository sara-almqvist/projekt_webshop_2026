import Button from './Button';
import CartCard from './CartCard';
import useCart from './useCart';

const CartList = ({ products }) => {
  const { cart, removeFromCart, clearCart, increment, decrement } = useCart();

  return (
    <>
      {products.map((product) => (
        <CartCard
          key={product.id}
          id={product.id}
          title={product.title}
          src={product.thumbnail}
          price={product.price}
          quantity={product.quantity}
          removeFunction={() => removeFromCart(product.id)}
          addOne={() => increment(product.id)}
          removeOne={() => decrement(product.id)}
        />
      ))}
      {cart.length > 0 && <Button text="Ta bort allt" action={clearCart} />}
    </>
  );
};

export default CartList;
