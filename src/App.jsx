//App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import FeaturesMovies from './components/featuredMovies/FeaturedMovies';
import Header from './components/header/Header';
import MovieDetailsPage from './page/movieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FeaturesMovies />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

