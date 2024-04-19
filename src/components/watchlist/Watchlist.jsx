import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import './watchlist.css'
const Watchlist = ({ watchlist, showList }) => {
  if (!watchlist) {
    console.log("Watchlist is undefined or null");
    return <p>Loading watchlist...</p>;
  }

  if (showList) {
    console.log("Watchlist:", watchlist);
    return (
      <div>
        <h2>Watchlist Movies</h2>
        <div className="movie-list">
          {/* Använd MovieCard för att rendera varje film i watchlistan */}
          {watchlist.map((movie, index) => (
            <MovieCard key={movie.id || index} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    console.log("Watchlist:", watchlist);
    return null; // Return null to avoid rendering the list visually
  }
};

export default Watchlist;
