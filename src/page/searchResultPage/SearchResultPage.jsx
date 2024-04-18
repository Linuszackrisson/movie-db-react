import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResult from "../../components/searchResult/SearchResult";
import { searchMoviesByTitle } from "../../../api";
import "./searchResultPage.css";

const SearchResultPage = () => {
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
    <div>
      <h1>Search Results for { searchTerm }</h1>
      <ul className="search-results-list">
        {searchResults.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResultPage;
