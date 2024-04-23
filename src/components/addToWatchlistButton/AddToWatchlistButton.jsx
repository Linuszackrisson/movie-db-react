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
      <button className='WatchlistButton' onClick={() => handleAddToWatchlist(movie)}>
        {isInWatchlist ? (
            <Bookmark className='icon' size={22} color="#2160b7" weight="fill" /> 
        ) : (
            <Bookmark className='icon' size={22} weight='bold' />
        )}
      </button>
    </>
  );
};

export default AddToWatchlistButton;
