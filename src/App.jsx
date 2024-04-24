import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/homePage/HomePage';
import Header from './components/header/Header';
import MovieDetailsPage from './page/movieDetailsPage/MovieDetailsPage';
import FavoritesPage from './page/favoritesPage/FavoritesPage';
import WatchlistPage from './page/watchlistPage/WatchlistPage';
import SearchResultPage from './page/searchResultPage/SearchResultPage';
import Footer from './components/footer/Footer';
import './index.css';

function App() {

  // State for managing favorites and watchlist
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // State managing for selected movie
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

  // Objects for sending related props
  const handleOperations = {
    handleAddToFavorites,
    handleAddToWatchlist
  }
  const lists = {
    favorites,
    watchlist
  }
  const movieState = {
    movie,
    setMovie
  }
  
  return (
    <Router >
      <Header />
      <Routes className="page__wrapper">
        <Route path="/" element={<HomePage
          handleOperations={handleOperations}
          lists={lists}
        />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetailsPage
          movieState={movieState} 
          handleOperations={handleOperations}
          {...lists}
          lists={lists}
        />} />
        <Route path="/favorites" element={<FavoritesPage
          handleOperations={handleOperations}
          lists={lists}
        />} />
        <Route path="/watchlist" element={<WatchlistPage
          handleOperations={handleOperations}
          lists={lists}
        />} />
        <Route path="/search/:searchTerm" element={<SearchResultPage
          handleOperations={handleOperations}
          lists={lists}
        />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
