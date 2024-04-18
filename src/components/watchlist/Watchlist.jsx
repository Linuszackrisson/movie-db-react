// Watchlist.jsx
import React from 'react';

const Watchlist = ({ watchlist, showList }) => {
  if (showList) {
    console.log("Watchlist - Watchlist:", watchlist);
    return (
      <div>
        <h2>Watchlist Movies</h2>
        <ul>
          {watchlist.map((movie, index) => (
            <li key={movie.id || index}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    console.log("Watchlist - Watchlist:", watchlist);
    return null; // Return null to avoid rendering the list visually
  }
};

export default Watchlist;