// useWatchlist.js
import { useState } from 'react';

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist(prevWatchlist => {
      if (prevWatchlist.some(m => m.imdbID === movie.imdbID)) {
        return prevWatchlist.filter(m => m.imdbID !== movie.imdbID);
      } else {
        return [...prevWatchlist, movie];
      }
    });
  };

  return [watchlist, addToWatchlist];
};

export default useWatchlist;