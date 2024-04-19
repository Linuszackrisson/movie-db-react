import { useState, useEffect } from "react";
import { searchMoviesByTitle } from "../../../api";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";
import "./searchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
      const response = await searchMoviesByTitle(term);
      setSearchResults(response.Search || []);
      setShowDropdown(term.length > 0 && response.Search && response.Search.length > 0); // Only show dropdown if search term is not empty and search results are found
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setShowDropdown(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowDropdown(searchResults.length > 0)}
          onBlur={handleInputBlur}
        />
        <button className="search__btn" type="submit">
          <MagnifyingGlass size={18} weight="bold" />
        </button>
      </form>
      {showDropdown && (
        <ul className="search-result__list">
          {searchResults.map((movie) => (
            <li className="search-result__item" key={movie.imdbID}>
              <div className="search-result__content">
                <hr className="search-result__devider"/>
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <img
                    className="search-result__poster"
                    src={movie.Poster}
                    alt={`${movie.Title} Poster`}
                  />
                  <div className="movie-details">
                    <p className="search-result__title">{movie.Title}</p>
                    <p className="search-result__year">{movie.Year}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
