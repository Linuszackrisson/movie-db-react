// useFavorites.js
import { useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(m => m.imdbID === movie.imdbID)) {
        return prevFavorites.filter(m => m.imdbID !== movie.imdbID);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return [favorites, addToFavorites];
};

export default useFavorites;