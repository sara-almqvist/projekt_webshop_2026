import { useState } from 'react';
import FavoriteContext from '../contexts/FavoriteContext.js';

function FavoriteProvider({ children }) {
  let checkLocal = JSON.parse(localStorage.getItem('favorite'));
  let status;
  if (checkLocal) {
    status = checkLocal;
  } else {
    status = [];
  }

  const [favoriteList, setFavoriteList] = useState(status);

  const addFavorite = (product) => {
    setFavoriteList([...favoriteList, product]);
    localStorage.setItem(
      'favorite',
      JSON.stringify([...favoriteList, product])
    );
  };

  const removeFavorite = (productId) => {
    setFavoriteList(favoriteList.filter((obj) => obj.id !== productId));
    localStorage.setItem(
      'favorite',
      JSON.stringify(favoriteList.filter((obj) => obj.id !== productId))
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteList, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
