// actions/watchlistActions.js
export const addToWatchlist = (movie) => ({
    type: 'ADD_TO_WATCHLIST',
    payload: {
      movie,
    },
  });
  
  export const removeFromWatchlist = (imdbID) => ({
    type: 'REMOVE_FROM_WATCHLIST',
    payload: {
      imdbID,
    },
  });
  