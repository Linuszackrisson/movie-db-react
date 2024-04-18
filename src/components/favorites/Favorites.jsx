//Favorites.jsx

import React from 'react';
import useFavorites from '../../hooks/useFavorites';

const FavoriteList = () => {
  const [favorites] = useFavorites();

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
