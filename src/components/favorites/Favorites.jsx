// Favorites.jsx
import React from 'react';

const FavoriteList = ({ favorites, showList }) => {
  if (!favorites) {
    console.log("Favorites is undefined or null");
    return <p>Loading favorites...</p>;
  }
  
  if (showList) {
    console.log("Favorites:", favorites);
    return (
      <div>
        <h2>Favorite Movies</h2>
        <ul>
          {favorites.map((movie, index) => (
            <li key={movie.id || index}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    console.log("Favorites:", favorites);
    return null; // Return null to avoid rendering the list visually
  }
};

export default FavoriteList;