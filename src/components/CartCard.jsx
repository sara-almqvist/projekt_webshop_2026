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
        className="flex flex-row flex-wrap sm:flex-nowrap w-full p-4 bg-white/50 text-[#ed6b35] font-semibold gap-2 place-items-center justify-evenly rounded-xl"
      >
        <h3 className="text-[#32033a] font-bold text-xl">{title}</h3>
        <Link
          to={`/productpage/${id}`}
          className="max-w-1/8 order-first cursor-pointer"
        >
          <img src={src} className="max-w-full" />
        </Link>
        <p>{price} kr/st</p>
        <Button
          text=" - "
          action={quantity === 1 ? removeFunction : removeOne}
        />
        <p>{quantity} st</p>
        <Button text=" + " action={addOne} />
        <p>Totalt: {(price * quantity).toFixed(2)} kr</p>
        <Button text=" Ta bort " action={removeFunction} />
      </div>
    </>
  );
};

export default CartCard;
