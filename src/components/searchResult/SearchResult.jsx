import React from 'react';
import { Link } from 'react-router-dom';


const SearchResult = ({ movie }) => {
    return (
        <li key={movie.imdbID}>
            <Link to={`/movie-details/${movie.imdbID}`}>
                <div>
                    <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                    <span className="movie-title">{movie.Title}</span>
                    <span className="movie-year">{movie.Year}</span>
                </div>
            </Link>
        </li>
    );
};

export default SearchResult;