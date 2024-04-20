// AddToWatchlistButton.jsx
import React from 'react';

const AddToWatchlistButton = ({
  handleAddToWatchlist,
  isInWatchlist,
  movie,
}) => {
  return (
    <button onClick={() => handleAddToWatchlist(movie)}>
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default AddToWatchlistButton;
