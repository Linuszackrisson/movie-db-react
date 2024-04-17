// useFavorites.js

import { useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (favorites.some(m => m.imdbID === movie.imdbID)) {
      const updatedFavorites = favorites.filter(m => m.imdbID !== movie.imdbID);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
    }
  };

  return [favorites, addToFavorites];
};

export default useFavorites;