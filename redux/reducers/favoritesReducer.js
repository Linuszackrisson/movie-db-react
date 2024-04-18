// reducers/favoritesReducer.js
const initialState = {
    favorites: [],
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.payload.movie],
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          favorites: state.favorites.filter(movie => movie.imdbID !== action.payload.imdbID),
        };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;