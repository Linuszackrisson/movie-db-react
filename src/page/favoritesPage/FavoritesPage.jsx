//FavoritesPage.jsx
import React from 'react';
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ 
  favorites,
  watchlist,
  removeFromFavorites,
  handleAddToFavorites,
  handleAddToWatchlist 
}) => {
  return (
    <div>
      <FavoriteList 
      favorites={favorites}
      watchlist={watchlist} 
      showList={true}
      removeFromFavorites={removeFromFavorites}
      handleAddToFavorites={handleAddToFavorites}
      handleAddToWatchlist={handleAddToWatchlist}
       />
    </div>
  );
};

export default FavoritesPage;