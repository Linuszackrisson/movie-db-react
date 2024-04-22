import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../../api.js';
import './featuredMovies.css'
import MovieCard from '../movieCard/MovieCard.jsx';


const FeaturesMovies = ({
  favorites,
  watchlist,
  addToFavorites,
  addToWatchlist,
  removeFromFavorites,
  removeFromWatchlist,
  handleAddToFavorites,
  handleAddToWatchlist
  
}) => {
  const [movies, setMovies] = useState([]);
  
  


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovies = await fetchRandomMovies();
        setMovies(randomMovies.slice(0, 5)); // Slice to get only five movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Featured today</h2>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <MovieCard 
          key={index}
            movie={movie}
            addToFavorites={addToFavorites}
            addToWatchlist={addToWatchlist}
            removeFromFavorites={removeFromFavorites}
            removeFromWatchlist={removeFromWatchlist}
            isInFavorites={favorites.some((favMovie) => favMovie.imdbID === movie.imdbID)}
            isInWatchlist={watchlist.some((watchlistMovie) => watchlistMovie.imdbID === movie.imdbID)}
            favorites={favorites}
            watchlist={watchlist}
            handleAddToWatchlist={handleAddToWatchlist}
            handleAddToFavorites={handleAddToFavorites} 
            />
        ))}
      </div>
    </div>
  );
};

export default FeaturesMovies;
