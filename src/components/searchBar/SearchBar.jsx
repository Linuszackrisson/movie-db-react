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
      setShowDropdown(true);
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
    // Delay hiding the dropdown by 200 milliseconds
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
          onFocus={() => setShowDropdown(true)}
          onBlur={handleInputBlur}
        />
        <button className="search__btn" type="submit">
          <MagnifyingGlass size={16} weight="bold" />
        </button>
      </form>
      {showDropdown && (
        <ul className="search-result__list">
          {searchResults.map((movie) => (
            <li className="search-result__item" key={movie.imdbID}>
              <div className="search-result__content">
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <img
                    className="search__poster"
                    src={movie.Poster}
                    alt={`${movie.Title} Poster`}
                  />
                  <div className="movie-details">
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
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
