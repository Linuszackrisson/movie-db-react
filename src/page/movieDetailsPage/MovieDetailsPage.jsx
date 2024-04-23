// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import FavoriteList from '../../components/favorites/Favorites';
import Watchlist from '../../components/watchlist/Watchlist';

const MovieDetailsPage = ({
  movieState,
  lists,
  watchlist,
  favorites,
  handleOperations
  
  
}) => {
  const { imdbID } = useParams();

  return (
    <div className='page__wrapper'>
      <MovieDetails
        imdbID={imdbID}
        {...movieState} 
        lists={lists}
        handleOperations={handleOperations}
      />
      {/* Render FavoriteList with showList prop set to false */}
      <FavoriteList favorites={favorites} showList={false} />
      {/* Render Watchlist with showList prop set to false */}
      <Watchlist watchlist={watchlist} showList={false} />
    </div>
  );
};

export default MovieDetailsPage;