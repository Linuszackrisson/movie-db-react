// AddToWatchlistButton.jsx
import React from 'react';
import { Bookmark } from "@phosphor-icons/react";

const AddToWatchlistButton = ({
  handleAddToWatchlist,
  isInWatchlist,
  movie,
}) => {
  return (
    <>
      <button onClick={() => handleAddToWatchlist(movie)}>
        {isInWatchlist ? (
          <>
            <Bookmark size={16} color="#2160b7" weight="fill" /> 
          </>
        ) : (
          <>
            <Bookmark size={16} weight='bold' /> 
          </>
        )}
      </button>
    </>
  );
};

export default AddToWatchlistButton;
