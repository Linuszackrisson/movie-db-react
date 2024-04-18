import React, { useState } from "react";
import { searchMoviesByTitle } from "../../../api";
import { Link, useNavigate } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
      const response = await searchMoviesByTitle(term);
      setSearchResults(response.Search || []);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input className="search__input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie-details/${movie.imdbID}`}>
              <div className="search-result">
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                <div className="movie-details">
                  <p>{movie.Title}</p>
                  <p>{movie.Year}</p>
                </div>
              </div>
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
