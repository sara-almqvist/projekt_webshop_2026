import useCart from './useCart';

const TotalSum = () => {
  const { cart } = useCart();

  return (
    <div className="text-[#ed6b35] text-xl font-semibold p-2">
      Totalt att betala:
      {' ' +
        cart
          .reduce((tot, obj) => {
            return tot + obj.quantity * obj.price;
          }, 0)
          .toFixed(2) +
        ' '}
      kr
    </div>
  );
};

export default TotalSum;
