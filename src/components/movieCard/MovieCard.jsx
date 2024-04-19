import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css'; // Importera CSS-filen för stilar

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie-details/${movie.imdbID}`} className="movie-card">
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <div className="movie-details">
        <p className="movie-title">{movie.Title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
