//FavoritesPage.jsx
import React from 'react';
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ 
  lists,
  handleOperations
}) => {
  return (
    <div className='page__wrapper'>
      <FavoriteList 
      lists={lists}
      {...lists}
      showList={true}
      handleOperations={handleOperations}
       />
    </div>
  );
};

export default FavoritesPage;