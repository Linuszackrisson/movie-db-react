// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import FavoriteList from '../../components/favorites/Favorites';
import Watchlist from '../../components/watchlist/Watchlist';
import AddToFavoritesButton from '../../components/addToFavoritesButton/AddToFavoritesButton';
import AddToWatchlistButton from '../../components/addToWatchlistButton/AddToWatchlistButton';

const MovieDetailsPage = ({
  movie,
  setMovie,
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  favorites,
  watchlist,
  handleAddToWatchlist, // Ensure this prop is passed down
  handleAddToFavorites, // Ensure this prop is passed down
  
}) => {
  const { imdbID } = useParams();

  return (
    <div>
      <MovieDetails
        imdbID={imdbID}
        movie={movie}
        setMovie={setMovie} 
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        favorites={favorites}
        watchlist={watchlist}
        handleAddToFavorites={handleAddToFavorites}
        handleAddToWatchlist={handleAddToWatchlist}
      />
      {/* Render FavoriteList with showList prop set to false */}
      <FavoriteList favorites={favorites} showList={false} />
      {/* Render Watchlist with showList prop set to false */}
      <Watchlist watchlist={watchlist} showList={false} />
    </div>
  );
};

export default MovieDetailsPage;