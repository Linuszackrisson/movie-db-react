// reducers/watchlistReducer.js
const initialState = {
    watchlist: [],
  };
  
  const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WATCHLIST':
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload.movie],
        };
      case 'REMOVE_FROM_WATCHLIST':
        return {
          ...state,
          watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload.imdbID),
        };
      default:
        return state;
    }
  };
  
  export default watchlistReducer;