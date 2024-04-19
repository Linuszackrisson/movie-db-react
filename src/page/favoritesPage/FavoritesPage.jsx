//FavoritesPage.jsx

import React from 'react';
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites Page</h1>
      <FavoriteList favorites={favorites} showList={true} /> {/* Pass props as needed */}
    </div>
  );
};

export default FavoritesPage;