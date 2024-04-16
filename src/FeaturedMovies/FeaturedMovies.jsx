import React, { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../api.js';
import './FeaturedMovies.css'
import MovieCard from '../MovieCard/MovieCard.jsx';


const FeaturesMovies = () => {
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
      <h2>Featured Movies</h2>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesMovies;
