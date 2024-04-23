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
        <div className='movie-details-text'>
          <div className="movie-info">
          <h1>{movie.Title}</h1>
          <p><strong>Release year:</strong> {movie.Year}</p>
          <p><strong>Imdb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Length:</strong> {movie.Runtime}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Featured actors:</strong> {movie.Actors}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Type:</strong> {movie.Type}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          </div>

          <div className="movie-plot"><p>{movie.Plot}</p>
          </div>
          
          
        </div>
      )}

    </div>
  );
};

export default MovieCard;
