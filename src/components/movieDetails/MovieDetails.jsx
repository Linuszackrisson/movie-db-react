// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import AddToFavoritesButton from '../addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../addToWatchlistButton/AddToWatchlistButton';
import { fetchMovieDetails, fetchMovieLogo } from '../../../api';
import MovieCard from '../../components/movieCard/MovieCard';
import './movieDetails.css'
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
  handleAddToWatchlist
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

    <div className='page__wrapper'>
      <div className="movie-details-card">
      <MovieCard
      
        key={movie.id} movie={movie}
        handleAddToWatchlist={handleAddToWatchlist}
        handleAddToFavorites={handleAddToFavorites}
        watchlist={watchlist}
        favorites={favorites}
        addToFavorites={{ addToFavorites }}
        addToWatchlist={addToWatchlist}
        removeFromFavorites={removeFromFavorites}
        removeFromWatchlist={removeFromWatchlist}
        showDetails={true} // This will render the details
      />
      </div>
    </div>



  );
};

export default MovieDetails;