// AddToWatchlistButton.jsx
import React from 'react';

const AddToWatchlistButton = ({ onClick, isInWatchlist }) => {
  return (
    <button onClick={onClick}>
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default AddToWatchlistButton;