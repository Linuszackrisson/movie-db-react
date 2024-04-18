// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import FavoriteList from '../../components/favorites/Favorites';
import Watchlist from '../../components/watchlist/Watchlist';

const MovieDetailsPage = ({
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
  favorites,
  watchlist,
}) => {
  const { imdbID } = useParams();

  return (
    <div>
      <MovieDetails
        imdbID={imdbID}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        favorites={favorites}
        watchlist={watchlist}
      />
      <FavoriteList favorites={favorites} />
      <Watchlist watchlist={watchlist} />
    </div>
  );
};

export default MovieDetailsPage;