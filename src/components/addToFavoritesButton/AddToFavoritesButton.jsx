// AddToFavoritesButton.jsx
import React from 'react';
import { Heart } from "@phosphor-icons/react";

const AddToFavoritesButton = ({
  handleAddToFavorites,
  isInFavorites,
  movie
}) => {
  return (
    <>
      <button className='FavoriteButton' onClick={() => handleAddToFavorites(movie)}>
        {isInFavorites ? (
            <Heart className='icon' size={22} color="#2160b7" weight="fill" /> 
        ) : (
            <Heart className='icon' size={22} weight='bold' /> 
        )}
      </button>
    </>
  );
};

export default AddToFavoritesButton;