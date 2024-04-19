//FavoritesPage.jsx
import React from 'react';
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <FavoriteList favorites={favorites} showList={true} />
    </div>
  );
};

export default FavoritesPage;