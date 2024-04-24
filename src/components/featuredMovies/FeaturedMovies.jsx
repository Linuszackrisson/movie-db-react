import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../../api.js';
import MovieCard from '../movieCard/MovieCard.jsx';

const FeaturesMovies = ({ 
  lists,
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
    <>
      <h2 className="Tips-title">Trending movies</h2>
      <div className="movie-grid-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            {...handleOperations}
            {...lists}
          />
        ))}
      </div>
    </>
  );
};

export default FeaturesMovies;
