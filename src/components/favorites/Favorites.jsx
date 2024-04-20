import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import './Favorites.css'

const FavoriteList = ({ 
  favorites,
  watchlist,
  showList, 
  handleAddToFavorites,
  handleAddToWatchlist
}) => {

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
            <div key={movie.id || index}>
            <MovieCard movie={movie} 
            />
            <AddToFavoritesButton
              handleAddToFavorites={handleAddToFavorites}
              isInFavorites={true}
              movie={movie}
            />
            <AddToWatchlistButton
            handleAddToWatchlist={handleAddToWatchlist}
            isInWatchlist={watchlist.some(m => m.imdbID === movie.imdbID)}
            movie={movie} 
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
