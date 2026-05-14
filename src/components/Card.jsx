import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ({ id, title, src, price, handleClick }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col flex-nowrap w-3xs h-110 p-4 bg-gray-100 gap-2 hover:bg-[#32033a]/25"
      >
        <h3 className="text-[#32033a] font-bold text-xl">{title}</h3>
        <img src={src} className="max-w-2xs h-full" />
        <p className="text-[#ed6b35] font-medium">{price} kr</p>
        <Button text="Lägg i kundvagn" action={handleClick} />
        <Link
          to={`/productpage/${id}`}
          className="text-[#ed6b35] font-medium hover:font-bold hover:text-[#db4e14]"
        >
          Visa detaljer
        </Link>
      </div>
    </>
  );
};

export default Card;
