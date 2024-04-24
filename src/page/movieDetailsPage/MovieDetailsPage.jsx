// MovieDetailsPage.jsx
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/MovieDetails';

const MovieDetailsPage = ({
  movieState,
  lists,
  handleOperations
}) => {

  const { imdbID } = useParams();

  return (
    <div className='page__wrapper'>
      <MovieDetails
        imdbID={imdbID}
        {...movieState} 
        lists={lists}
        handleOperations={handleOperations}
      />
    </div>
  );
};

export default MovieDetailsPage;