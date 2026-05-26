import { useState } from 'react';
import { Heart } from 'lucide-react';
import useFavorite from '../hooks/useFavorite';

const FavoriteButton = (product) => {
  const { favoriteList, addFavorite, removeFavorite } = useFavorite();
  let status;
  if (favoriteList.some((obj) => obj.id === product.product.id)) {
    status = true;
  } else {
    status = false;
  }

  const [isFavorite, setIsFavorite] = useState(status);

  return (
    <button
      onClick={() => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
          addFavorite(product.product);
        } else {
          removeFavorite(product.product.id);
        }
      }}
      className="group p-2 rounded-full hover:bg-[#e6e6e6] transition-colors duration-200 focus:outline-none"
      aria-label={
        isFavorite ? 'Ta bort från favoriter' : 'Lägg till i favoriter'
      }
    >
      {' '}
      <Heart
        className={`w-6 h-6 transition-all duration-300 transform active:scale-75 ${
          isFavorite
            ? 'fill-[#ed6b35] stroke-[#32033a]'
            : 'stroke-[#32033a] fill-transparent group-hover:stroke-[#ed6b35]'
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
