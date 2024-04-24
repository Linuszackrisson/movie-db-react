import MovieCard from '../../components/movieCard/MovieCard'; // Importera MovieCard-komponenten
import './Favorites.css'

const FavoriteList = ({ 
  favorites,
  lists,
  handleOperations
}) => {

  if (!favorites) {
    console.log("Favorites is undefined or null");
    return <p>Loading favorites...</p>;
  }
  
    return (
      <>
        <h1>Favorite movies</h1>
        <div className="movie-grid-container">
          {favorites.map((movie, index) => (
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

export default FavoriteList;
