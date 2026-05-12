import useCart from './useCart';

const TotalSum = () => {
  const { cart } = useCart();

  return (
    <div className="text-red-500">
      Att betala:
      {' ' +
        cart.reduce((tot, obj) => {
          return tot + obj.quantity * obj.price;
        }, 0) +
        ' '}
      kr
    </div>
  );
};

export default TotalSum;
