//FavoritesPage.jsx
import FavoriteList from '../../components/favorites/Favorites'; 

const FavoritesPage = ({ 
  lists,
  handleOperations
}) => {
  return (
    <div className='page__wrapper'>
      <FavoriteList 
      lists={lists}
      {...lists}
      handleOperations={handleOperations}
       />
    </div>
  );
};

export default FavoritesPage;