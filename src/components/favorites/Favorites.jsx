import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import './Favorites.css'
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
        <div className="movie-list">
          {/* Använd MovieCard för att rendera varje favoritfilm */}
          {favorites.map((movie, index) => (
            <MovieCard key={movie.id || index} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    console.log("Favorites:", favorites);
    return null; // Return null to avoid rendering the list visually
  }
};

export default FavoriteList;
