import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeaturesMovies from './components/featuredMovies/FeaturedMovies';
import Header from './components/header/Header';
import MovieDetailsPage from './page/movieDetailsPage/MovieDetailsPage';
import SearchResultPage from './page/searchResultPage/SearchResultPage';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FeaturesMovies />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetailsPage />} />
        <Route path="/search/:searchTerm" element={<SearchResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

