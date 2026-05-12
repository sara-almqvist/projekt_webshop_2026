import { Link } from 'react-router-dom';
import Button from './Button';

const CartCard = ({
  id,
  title,
  src,
  price,
  quantity,
  removeFunction,
  addOne,
  removeOne,
}) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-row flex-nowrap w-full p-4 bg-gray-100 gap-2 place-items-center justify-evenly"
      >
        <h3 className="text-purple-500 font-bold text-xl">{title}</h3>
        <Link to={`/productpage/${id}`} className="bg-white order-first">
          <img src={src} className="max-w-1/3" />
        </Link>
        <p>{price} kr</p>
        <Button text="-" action={quantity === 1 ? removeFunction : removeOne} />
        <p>{quantity} st</p>
        <Button text="+" action={addOne} />
        <p>Totalt: {(price * quantity).toFixed(2)} kr</p>
        <Button text="Ta bort" action={removeFunction} />
      </div>
    </>
  );
};

export default CartCard;
