// AddToFavoritesButton.jsx
import React from 'react';

const AddToFavoritesButton = ({
  handleAddToFavorites,
  isInFavorites,
  movie,
}) => {
  return (
    <button onClick={() => handleAddToFavorites(movie)}>
      {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavoritesButton;