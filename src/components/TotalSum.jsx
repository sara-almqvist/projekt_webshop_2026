import useCart from '../hooks/useCart';
import formatSEK from '../format';

const TotalSum = () => {
  const { cart } = useCart();

  return (
    <div className="text-[#db4e14] bg-[#e6e6e6] rounded-xl text-xl font-bold p-4 shadow-lg">
      Totalt att betala:
      {' ' +
        formatSEK(
          cart.reduce((tot, obj) => {
            return tot + obj.quantity * obj.price * 5;
          }, 0)
        )}
    </div>
  );
};

export default TotalSum;
