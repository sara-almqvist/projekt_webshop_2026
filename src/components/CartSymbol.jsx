import useCart from './useCart';

const CartSymbol = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="relative inline-block max-w-1/2 max-h-1/2">
        <img
          src="https://res.cloudinary.com/dfplwytwx/image/upload/v1778773515/shopping-cart_1_hgq5fn.png"
          className="max-w-full h-auto block"
        />
        <p className="absolute bottom-[30px] right-[15px] text-[#ed6b35] text-4xl font-bold bg-white/70 rounded-full px-2">
          {cart.length}
        </p>
      </div>
    </>
  );
};

export default CartSymbol;
