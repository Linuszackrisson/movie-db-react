// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import FavoriteList from '../../components/favorites/Favorites';
import Watchlist from '../../components/watchlist/Watchlist';

const MovieDetailsPage = () => {
  const { imdbID } = useParams();

  return (
    <div>
      <MovieDetails imdbID={imdbID} />
      <FavoriteList />
      <Watchlist />
    </div>
  );
};

export default MovieDetailsPage;
