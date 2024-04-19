// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeaturesMovies from './components/featuredMovies/FeaturedMovies';
import Header from './components/header/Header';
import MovieDetailsPage from './page/movieDetailsPage/MovieDetailsPage';
import FavoritesPage from './page/favoritesPage/FavoritesPage';
import WatchlistPage from './page/watchlistPage/WatchlistPage';

import SearchResultPage from './page/searchResultPage/SearchResultPage';
import './index.css';
import './app.css';


function App() {
  // State for managing favorites and watchlist
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // Functions to add and remove movies from favorites
  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (imdbID) => {
    setFavorites(favorites.filter(movie => movie.imdbID !== imdbID));
  };

  // Functions to add and remove movies from watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (imdbID) => {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <Router >
      <Header />
      <Routes className="page__wrapper">
        <Route path="/" element={<FeaturesMovies />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetailsPage 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
          addToWatchlist={addToWatchlist} 
          removeFromWatchlist={removeFromWatchlist} 
          favorites={favorites} 
          watchlist={watchlist} 
        />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites}/>} />
        <Route path="/watchlist" element={<WatchlistPage watchlist={watchlist}/>} />
        <Route path="/search/:searchTerm" element={<SearchResultPage />} />

      </Routes>
    </Router>
  );
}

export default App;