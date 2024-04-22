// AddToFavoritesButton.jsx
import React from 'react';
import { Heart } from "@phosphor-icons/react";

const AddToFavoritesButton = ({
  handleAddToFavorites,
  isInFavorites,
  movie,
}) => {
  return (
    <>
      <button onClick={() => handleAddToFavorites(movie)}>
        {isInFavorites ? (
          <>
            <Heart size={16} color="#2160b7" weight="fill" /> 
          </>
        ) : (
          <>
            <Heart size={16} weight='bold' /> 
          </>
        )}
      </button>
    </>
  );
};

export default AddToFavoritesButton;