// Watchlist.jsx
import React from 'react';

const Watchlist = ({ watchlist, showList }) => {

  if (!watchlist) {
    console.log("Watchlist is undefined or null");
    return <p>Loading watchlist...</p>;
  }

  if (showList) {
    console.log("Watchlist:", watchlist);
    return (
      <div>
        <h1>Watchlist Movies</h1>
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
    console.log("Watchlist:", watchlist);
    return null; // Return null to avoid rendering the list visually
  }
};

export default Watchlist;