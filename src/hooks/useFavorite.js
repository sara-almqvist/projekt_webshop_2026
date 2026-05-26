import { useContext } from 'react';
import FavoriteContext from '../contexts/FavoriteContext';

function useFavorite() {
  const { favoriteList, addFavorite, removeFavorite } =
    useContext(FavoriteContext);
  return { favoriteList, addFavorite, removeFavorite };
}

export default useFavorite;
