// actions/favoritesActions.js
export const addToFavorites = (movie) => ({
    type: 'ADD_TO_FAVORITES',
    payload: {
      movie,
    },
  });
  
  export const removeFromFavorites = (imdbID) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: {
      imdbID,
    },
  });