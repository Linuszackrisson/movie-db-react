import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css'; // Importera CSS-filen för stilar
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import defaultmoviejpg from '../../assets/default-movie.jpg'; // Importera en standardbild

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
  removeFromWatchlist,
  showDetails
}) => {
  const altText = "Movie poster";

  return (
    <div className="movie-card">
      <Link to={`/movie-details/${movie.imdbID}`}>
        <img src={movie.Poster} alt={altText} onError={(e) => { e.target.onerror = null; e.target.src = defaultmoviejpg; }} />
        <div className="movie-details">
          <p className="movie-title">{movie.Title}</p>
        </div>
      </Link>
      <div className="movie-buttons">
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
      {showDetails && (
        <div>
          <p>Plot: {movie.Plot}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>Year: {movie.Year}</p>
        </div>
      )}

    </div>
  );
};

export default MovieCard;
