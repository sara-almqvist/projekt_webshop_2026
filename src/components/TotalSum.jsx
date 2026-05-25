import useCart from '../hooks/useCart';

const TotalSum = () => {
  const { cart } = useCart();

  return (
    <div className="text-[#db4e14] bg-[#e6e6e6] rounded-xl text-xl font-bold p-4 shadow-lg">
      Totalt att betala:
      {' ' +
        cart
          .reduce((tot, obj) => {
            return tot + obj.quantity * obj.price * 5;
          }, 0)
          .toFixed(2) +
        ' '}
      kr
    </div>
  );
};

export default TotalSum;
