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

  /// State managing for selected movie. Used in combination with the add/remove buttons
  const [movie, setMovie] = useState(null);


  // Functions to add and remove movies from favorites
  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };
  const removeFromFavorites = (imdbID) => {
    setFavorites(favorites.filter(movie => movie.imdbID !== imdbID));
  };
  // Function to handle adding/removing from favorites
  const handleAddToFavorites = (movie) => {
    const isFavorite = favorites.some(m => m.imdbID === movie.imdbID);
    if (isFavorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };


  // Functions to add and remove movies from watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };
  const removeFromWatchlist = (imdbID) => {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== imdbID));
  };
  // Function to handle adding/removing from watchlist
  const handleAddToWatchlist = (movie) => {
    const isInWatchlist = watchlist.some(m => m.imdbID === movie.imdbID);
    if (isInWatchlist) {
      removeFromWatchlist(movie.imdbID);
    } else {
      addToWatchlist(movie);
    }
  };


  return (
    <Router >
      <Header />
      <Routes className="page__wrapper">
        <Route path="/" element={<FeaturesMovies
        handleAddToFavorites={handleAddToFavorites}
        handleAddToWatchlist={handleAddToWatchlist}
        favorites={favorites}
        watchlist={watchlist}
        addToFavorites={addToFavorites}
        addToWatchlist={addToWatchlist}
        removeFromFavorites={removeFromFavorites}
        removeFromWatchlist={removeFromWatchlist}
        
        
        />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetailsPage
          movie={movie}
          setMovie={setMovie} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
          addToWatchlist={addToWatchlist} 
          removeFromWatchlist={removeFromWatchlist} 
          favorites={favorites} 
          watchlist={watchlist} 
          handleAddToWatchlist={handleAddToWatchlist} 
          handleAddToFavorites={handleAddToFavorites}
        />} />
        <Route path="/favorites" element={<FavoritesPage
          movie={movie}
          favorites={favorites}
          watchlist={watchlist} 
          removeFromFavorites={removeFromFavorites}
          handleAddToFavorites={handleAddToFavorites}
          handleAddToWatchlist={handleAddToWatchlist} 
        />} />
        <Route path="/watchlist" element={<WatchlistPage
          movie={movie}
          favorites={favorites}
          watchlist={watchlist} 
          removeFromWatchlist={removeFromWatchlist}
          handleAddToFavorites={handleAddToFavorites}
          handleAddToWatchlist={handleAddToWatchlist} 
        />} />
        <Route path="/search/:searchTerm" element={<SearchResultPage
        handleAddToFavorites={handleAddToFavorites}
        handleAddToWatchlist={handleAddToWatchlist}
        favorites={favorites}
        watchlist={watchlist}
        addToFavorites={addToFavorites}
        addToWatchlist={addToWatchlist}
        removeFromFavorites={removeFromFavorites}
        removeFromWatchlist={removeFromWatchlist} 
        />} />
      </Routes>
    </Router>
  );
}

export default App;
