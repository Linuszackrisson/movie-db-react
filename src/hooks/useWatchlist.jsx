// useWatchlist.js
import { useState } from 'react';

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (watchlist.some(m => m.imdbID === movie.imdbID)) {
      const updatedWatchlist = watchlist.filter(m => m.imdbID !== movie.imdbID);
      setWatchlist(updatedWatchlist);
    } else {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
    }
  };

  return [watchlist, addToWatchlist];
};

export default useWatchlist;