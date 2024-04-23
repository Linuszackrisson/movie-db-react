import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../../api.js';
import './featuredMovies.css';
import MovieCard from '../movieCard/MovieCard.jsx';

const FeaturesMovies = ({ lists,
  watchlist,
  favorites,
  handleOperations
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovies = await fetchRandomMovies();
        setMovies(randomMovies.slice(0, 8));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="page__wrapper">
      <h2 className="Tips-title">You May also like</h2>
      <div className="movie-grid-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            {...handleOperations}
            isInFavorites={favorites.some((favMovie) => favMovie.imdbID === movie.imdbID)}
            isInWatchlist={watchlist.some((watchlistMovie) => watchlistMovie.imdbID === movie.imdbID)}
            {...lists}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesMovies;
