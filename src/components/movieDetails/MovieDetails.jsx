// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import { fetchMovieDetails, fetchMovieLogo } from '../../../api';
import MovieCard from '../../components/movieCard/MovieCard';

const MovieDetails = ({
  imdbID,
  movie,
  setMovie,
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  favorites,
  watchlist,
  handleAddToFavorites,
  handleAddToWatchlist,
}) => {
  const [logoURL, setLogoURL] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieDetails(imdbID);
        setMovie(movieData);

        const logoURL = await fetchMovieLogo(imdbID);
        setLogoURL(logoURL);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching movie details');
      }
    };

    fetchData();
  }, [imdbID]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }


  

  return (
    <div>
      <MovieCard key={movie.id} movie={movie} />
      <p>Plot: {movie.Plot}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Year: {movie.Year}</p>
      
      <AddToWatchlistButton
        movie={movie} 
        handleAddToWatchlist={handleAddToWatchlist}
        isInWatchlist={watchlist.some(m => m.imdbID === movie.imdbID)}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
      <AddToFavoritesButton
        movie={movie} 
        handleAddToFavorites={handleAddToFavorites}
        isInFavorites={favorites.some(m => m.imdbID === movie.imdbID)}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default MovieDetails;