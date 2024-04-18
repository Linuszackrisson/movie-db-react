// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails'; // Adjust the import path based on your folder structure

const MovieDetailsPage = () => {
  const { imdbID } = useParams(); // Extract the IMDb ID from the URL

  return (
    <div>
      <MovieDetails imdbID={imdbID} />
    </div>
  );
};

export default MovieDetailsPage;