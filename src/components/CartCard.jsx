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
        className="w-full p-4 bg-white/50 text-[#ed6b35] text-xl md:text-base lg:text-xl font-semibold rounded-xl shadow-xl flex flex-col md:flex-row gap-2 xl:justify-evenly"
      >
        <div className="flex flex-row gap-2 justify-around">
          <Link to={`/productpage/${id}`} className="cursor-pointer max-w-1/4">
            <img src={src} className="w-full h-full object-cover" />
          </Link>

          <div className="flex flex-col justify-evenly">
            <h3 className="text-[#32033a] font-bold sm:text-2xl">{title}</h3>
            <p className="text-base"> Pris: {price} kr/st</p>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap items-center justify-evenly gap-4 w-full lg:basis-1/2 xl:basis-1/3">
          <div className="flex flex-row flex-nowrap place-items-center gap-3">
            <Button
              text=" - "
              action={quantity === 1 ? removeFunction : removeOne}
            />
            <p>{quantity} st</p>
            <Button text=" + " action={addOne} />
          </div>
          <p className="text-[#db4e14] font-bold">
            Totalt: {(price * quantity).toFixed(2)} kr
          </p>
          <div className="text-sm">
            <Button text="Ta bort" action={removeFunction} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
