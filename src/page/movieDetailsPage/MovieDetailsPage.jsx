// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header'; // Adjust the import path based on your folder structure
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