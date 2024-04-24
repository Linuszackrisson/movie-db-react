import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import './Favorites.css'

const FavoriteList = ({ 
  favorites,
  lists,
  showList, 
  handleOperations
}) => {

  if (!favorites) {
    console.log("Favorites is undefined or null");
    return <p>Loading favorites...</p>;
  }
  
  if (showList) {
    console.log("Favorites:", favorites);

    return (
      <div>
        <h1>Favorite movies</h1>
        <div className="movie-grid-container">
          {/* Använd MovieCard för att rendera varje favoritfilm */}
          {favorites.map((movie, index) => (
            <div key={movie.id || index}>
            <MovieCard 
            movie={movie}
            {...lists}
            {...handleOperations}
            
            />
          </div>
            
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
