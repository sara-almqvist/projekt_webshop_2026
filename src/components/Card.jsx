import { Link } from 'react-router-dom';
import Button from './Button';
import FavoriteButton from './FavoriteButton';
import { useState } from 'react';

const Card = ({ id, title, src, price, description, handleClick, favvo }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        key={id}
        className="flex flex-col flex-nowrap w-3xs h-110 p-4 bg-gray-100 hover:bg-[#32033a]/25"
      >
        <h3 className="text-[#32033a] font-bold text-xl">{title}</h3>
        <Link to={`/productpage/${id}`}>
          <div className="group relative inline-block max-w-2xs h-full">
            <img
              src={src}
              alt={title}
              className="object-cover cursor-pointer transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-[#32033a]/90 text-white text-xs py-2 px-4 rounded-md shadow-xl transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 z-10 w-max max-w-[80%] text-center">
              {description}
            </div>
          </div>
        </Link>
        <div className="flex flex-row gap-2 place-items-center self-center">
          <p className="text-[#ed6b35] font-medium">{price}</p>
          <FavoriteButton product={favvo} />
        </div>
        <Button
          text={!isClicked ? 'Lägg i kundvagn' : 'Lagd i kundvagnen'}
          action={() => {
            handleClick();
            setIsClicked(true);
          }}
        />
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
