import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css'; // Importera CSS-filen för stilar
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';

const MovieCard = ({ 
  movie,
  handleAddToWatchlist,
  handleAddToFavorites,
  isInWatchlist,
  isInFavorites,
  watchlist,
  favorites,
  addToFavorites,
  addToWatchlist,
  removeFromFavorites,
  removeFromWatchlist
 }) => {


  return (
    <div>
      <Link to={`/movie-details/${movie.imdbID}`} className="movie-card">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        <div className="movie-details">
          <p className="movie-title">{movie.Title}</p>
        </div>     
      </Link>
      <div>
      <AddToWatchlistButton
          movie={movie} 
          handleAddToWatchlist={handleAddToWatchlist}
          isInWatchlist={watchlist && watchlist.some(m => m.imdbID === movie.imdbID)}
          watchlist={watchlist}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
        <AddToFavoritesButton
          movie={movie} 
          handleAddToFavorites={handleAddToFavorites}
          isInFavorites={favorites && favorites.some(m => m.imdbID === movie.imdbID)}
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
      
    </div>
  );
};

export default MovieCard;
