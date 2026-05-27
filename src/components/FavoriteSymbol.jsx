import { FolderHeart } from 'lucide-react';
import useFavorite from '../hooks/useFavorite';

const FavoriteSymbol = () => {
  const { favoriteList } = useFavorite();
  return (
    <div className="relative">
      <FolderHeart className="w-8 h-8" />

      {favoriteList.length > 0 && (
        <span className="absolute -top-1.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] lg:text-[14px] font-bold ring-2 ring-white">
          {favoriteList.length}
        </span>
      )}
    </div>
  );
};

export default FavoriteSymbol;
