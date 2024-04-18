// FavoriteList.jsx
import React from 'react';

const FavoriteList = ({ favorites }) => {
  console.log("FavoriteList - Favorites:", favorites);
  
  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map((movie, index) => {
          const key = movie.id || index; // Use index as key if id is undefined
          console.log("FavoriteList - Movie ID:", key);
          return (
            <li key={key}>
              {movie.Title} ({movie.Year})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteList;