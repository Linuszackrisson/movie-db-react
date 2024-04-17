// AddToFavoritesButton.jsx
import React from 'react';

const AddToFavoritesButton = ({ onClick, isInFavorites }) => {
  return (
    <button onClick={onClick}>
      {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavoritesButton;