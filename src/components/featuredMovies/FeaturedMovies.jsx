import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../../api.js';
import MovieCard from '../movieCard/MovieCard.jsx';

// Component for the home page displaying random movies
const FeaturesMovies = ({ 
  lists,
  handleOperations
}) => {
  //State variable for picking a random movies to display
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect hook that calls for function imported from api to fetch random movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovies = await fetchRandomMovies();
        setMovies(randomMovies.slice(0, 8));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchMovies();
  },[]);

  return (
    <>
      <h2 className="Tips-title">Trending movies</h2>
      {isLoading ? ( // Show loading indicator if isLoading is true
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  );
};

export default FeaturesMovies;
