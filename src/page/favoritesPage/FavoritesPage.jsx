//FavoritesPage.jsx
import React from 'react';
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <FavoriteList favorites={favorites} showList={true} /> {/* Pass props as needed */}
    </div>
  );
};

export default FavoritesPage;