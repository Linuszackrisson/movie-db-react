// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import { fetchMovieDetails, fetchMovieLogo } from '../../../api';

const MovieDetails = ({
  imdbID,
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  favorites,
  watchlist,
}) => {
  const [movie, setMovie] = useState(null);
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

  const handleAddToFavorites = () => {
    const isFavorite = favorites.some(m => m.imdbID === movie.imdbID);
    if (isFavorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  const handleAddToWatchlist = () => {
    const isInWatchlist = watchlist.some(m => m.imdbID === movie.imdbID);
    if (isInWatchlist) {
      removeFromWatchlist(movie.imdbID);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div>
      <img src={logoURL} alt="Movie Poster" />
      <h2>{movie.Title}</h2>
      <p>Plot: {movie.Plot}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Year: {movie.Year}</p>
      <AddToWatchlistButton
        onClick={handleAddToWatchlist}
        isInWatchlist={watchlist.some(m => m.imdbID === movie.imdbID)}
      />
      <AddToFavoritesButton
        onClick={handleAddToFavorites}
        isInFavorites={favorites.some(m => m.imdbID === movie.imdbID)}
      />
    </div>
  );
};

export default MovieDetails;