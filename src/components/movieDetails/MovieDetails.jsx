//MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchMovieLogo } from '../../../api'; // Adjust the import path based on your folder structure
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import useFavorites from '../../hooks/useFavorites';
import useWatchlist from '../../hooks/useWatchlist';

const MovieDetails = ({ imdbID }) => {
  const [movie, setMovie] = useState(null);
  const [logoURL, setLogoURL] = useState('');
  const [error, setError] = useState(null);
  const [favorites, addToFavorites] = useFavorites();
  const [watchlist, addToWatchlist] = useWatchlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movie details
        const movieData = await fetchMovieDetails(imdbID);
        setMovie(movieData);

        // Fetch movie logo
        const logoURL = await fetchMovieLogo(imdbID);
        setLogoURL(logoURL);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching movie details');
      }
    };

    fetchData();
  }, [imdbID]);

  useEffect(() => {
    console.log('Favorites:', favorites);
    console.log('Watchlist:', watchlist);
  }, [favorites, watchlist]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  return (
    <div>
      <img src={logoURL} alt="Movie Poster" />
      <h2>{movie.Title}</h2>
      <p>Plot: {movie.Plot}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Year: {movie.Year}</p>
      {/* Display other relevant movie details */}
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
