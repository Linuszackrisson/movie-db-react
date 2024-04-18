// Watchlist.jsx
import React from 'react';
import { connect } from 'react-redux';

const Watchlist = ({ watchlist }) => {
  console.log("Watchlist - Watchlist:", watchlist);
  
  return (
    <div>
      <h2>Watchlist Movies</h2>
      <ul>
        {watchlist.map((movie, index) => {
          const key = movie.id || index; // Use index as key if id is undefined
          console.log("Watchlist - Movie ID:", key);
          return (
            <li key={key}>
              {movie.Title} ({movie.Year})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchlist: state.watchlist.watchlist,
});

export default connect(mapStateToProps)(Watchlist);