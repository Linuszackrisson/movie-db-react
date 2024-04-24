import MovieCard from '../../components/movieCard/MovieCard';
import './watchlist.css'

const Watchlist = ({ 
  lists,
  watchlist,
  handleOperations
}) => {

    if (!watchlist) {
      console.log("Watchlist is undefined or null");
      return <p>Loading watchlist...</p>;
    }
    
    return (
      <>
        <h1>Watchlist movies</h1>
        <div className="movie-grid-container">
          {watchlist.map((movie, index) => (
            <div key={movie.id || index}>
            <MovieCard 
            movie={movie} 
            {...lists}
            {...handleOperations}
            />
          </div>
          ))}
        </div>
      </>
    );
};

export default Watchlist;
