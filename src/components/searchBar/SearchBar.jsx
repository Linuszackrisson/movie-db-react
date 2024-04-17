// SearchBar.jsx
import "./searchBar.css"
import { useState } from 'react';
import { searchMoviesByTitle, fetchMovieLogo } from '../../../api';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
      const response = await searchMoviesByTitle(term);
      setSearchResults(response.Search || []);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const fetchLogo = async (movie) => {
    try {
      const logo = await fetchMovieLogo(movie.imdbID);
      console.log('Movie Logo:', logo);
    } catch (error) {
      console.error('Error fetching movie logo:', error);
    }
  };

//   const fetchYear = async (movie) => {
//     try {
//         const details = await fetchMovieDetails(movie.imdbID);
//         console.log('Movie Year:', details.Year);
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//     }
// };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID} onMouseEnter={() => fetchLogo(movie)}>
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <span className="movie-title">{movie.Title}</span>
            <span className="movie-year">{movie.Year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;