//WatchlistPage.jsx
import React from 'react';
import Watchlist from '../../components/watchlist/Watchlist' 

const WatchlistPage = ({ 
  favorites,
  watchlist,
  removeFromWatchlist, 
  handleAddToWatchlist,
  handleAddToFavorites
 }) => {
  return (
    <div className='page__wrapper'>
      <Watchlist 
      watchlist={watchlist}
      favorites={favorites} 
      showList={true}
      removeFromWatchlist={removeFromWatchlist}
      handleAddToWatchlist={handleAddToWatchlist}
      handleAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default WatchlistPage;