import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ({ id, title, src, price }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col flex-nowrap w-3xs p-4 bg-gray-100 gap-2 hover:bg-green-300/50"
      >
        <h3 className="text-purple-500 font-bold text-xl">{title}</h3>
        <img src={src} className="max-w-2xs" />
        <p>{price} kr</p>
        <Button
          text="Lägg i kundvagn"
          action={() => console.log('Varan ska läggas i cart')}
        />
        <Link to={`/productpage/${id}`}>Visa detaljer</Link>
      </div>
    </>
  );
};

export default Card;
