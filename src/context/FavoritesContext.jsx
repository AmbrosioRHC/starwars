// FavoritesContext.js

import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.url === item.url)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter((fav) => fav.url !== item.url);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.url === item.url);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
