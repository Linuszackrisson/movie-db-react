import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <div className="movie-details">
        <p>Title: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.keyword}</p>
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default MovieCard;
