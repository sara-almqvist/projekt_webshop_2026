import { FolderHeart } from 'lucide-react';
import useFavorite from '../hooks/useFavorite';

const FavoriteSymbol = () => {
  const { favoriteList } = useFavorite();
  return (
    <div className="relative group">
      <FolderHeart className="w-8 h-8 group-hover:text-white" />

      {favoriteList.length > 0 && (
        <span className="absolute -top-1.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white group-hover:bg-[#ed6b35] group-hover:text-white text-[#ed6b35] text-[10px] lg:text-[14px] font-bold ring-2 ring-white">
          {favoriteList.length}
        </span>
      )}
    </div>
  );
};

export default FavoriteSymbol;
