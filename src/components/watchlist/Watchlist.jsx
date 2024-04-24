import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import './watchlist.css'

const Watchlist = ({ 
  lists,
  watchlist,
  showList, 
  handleOperations
}) => {

  if (!watchlist) {
    console.log("Watchlist is undefined or null");
    return <p>Loading watchlist...</p>;
  }

  if (showList) {
    console.log("Watchlist:", watchlist);

    return (
      <div>
        <h1>Watchlist movies</h1>
        <div className="movie-grid-container">
          {/* Använd MovieCard för att rendera varje film i watchlistan */}
          {watchlist.map((movie, index) => (
            <div key={movie.id || index}>
            <MovieCard 
            movie={movie} 
            {...lists}
            {...handleOperations}
            />
          </div>
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
