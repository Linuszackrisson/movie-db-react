import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMoviesByTitle } from "../../../api";
import MovieCard from "../../components/movieCard/MovieCard";
import "./searchResultPage.css";

const SearchResultPage = ({
  favorites,
  watchlist,
  addToFavorites,
  addToWatchlist,
  removeFromFavorites,
  removeFromWatchlist,
  handleAddToFavorites,
  handleAddToWatchlist
}) => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await searchMoviesByTitle(searchTerm);
        setSearchResults(response.Search || []);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="page__wrapper">
      <h1>Search Results for {searchTerm}</h1>
      <div className="movie-grid-container">
        {searchResults.map((movie) => (
          <MovieCard 
          key={movie.imdbID} 
          movie={movie}
          handleAddToFavorites={handleAddToFavorites}
          handleAddToWatchlist={handleAddToWatchlist}
          favorites={favorites}
          watchlist={watchlist}
          addToFavorites={addToFavorites}
          addToWatchlist={addToWatchlist}
          removeFromFavorites={removeFromFavorites}
          removeFromWatchlist={removeFromWatchlist}  />
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
