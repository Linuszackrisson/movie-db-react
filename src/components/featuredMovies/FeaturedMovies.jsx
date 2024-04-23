import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../../../api.js';
import './featuredMovies.css';
import MovieCard from '../movieCard/MovieCard.jsx';


const FeaturesMovies = ({
  favorites,
  watchlist,
  addToFavorites,
  addToWatchlist,
  removeFromFavorites,
  removeFromWatchlist,
  handleAddToFavorites,
  handleAddToWatchlist
  
}) => {
  const [movies, setMovies] = useState([]);
  
  


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovies = await fetchRandomMovies();
        setMovies(randomMovies.slice(0, 8)); // Slice to get only five movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="page__wrapper">
      <section className="featured-today">
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gZEOBlnFKmE" title="Fallout" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="info-container">
          <div className="text-container">
          <h3 className='Featured-title'>Fallout</h3>
          <h4>"Fallout: Apocalypse with a punchline."</h4>
          <p>In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.</p>
          <div className="genre-container">
            <p className='genre-text'>Action</p>
            <p className='genre-text'>Adventure</p>
            <p className='genre-text'>Drama</p>
          </div>
          </div>
          <a href="https://www.primevideo.com/detail/Fallout/0HAQAA7JM43QWX0H6GUD3IOF70" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/480px-Amazon_Prime_Video_blue_logo_1.svg.png" alt="Amazon Prime Video Logo" className="prime-video-logo" />
          </a>
        </div>
      </section>
      <h2 className="Tips-title">You May also like</h2>
      <div className="movie-grid-container">
        {movies.map((movie, index) => (
          <MovieCard 
          key={index}
            movie={movie}
            addToFavorites={addToFavorites}
            addToWatchlist={addToWatchlist}
            removeFromFavorites={removeFromFavorites}
            removeFromWatchlist={removeFromWatchlist}
            isInFavorites={favorites.some((favMovie) => favMovie.imdbID === movie.imdbID)}
            isInWatchlist={watchlist.some((watchlistMovie) => watchlistMovie.imdbID === movie.imdbID)}
            favorites={favorites}
            watchlist={watchlist}
            handleAddToWatchlist={handleAddToWatchlist}
            handleAddToFavorites={handleAddToFavorites}
            
            />
        ))}
      </div>
    </div>
  );
};

export default FeaturesMovies;
