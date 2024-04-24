//WatchlistPage.jsx
import Watchlist from '../../components/watchlist/Watchlist' 

const WatchlistPage = ({ 
  lists,
  handleOperations
 }) => {
  return (
    <div className='page__wrapper'>
      <Watchlist 
      lists={lists}
      {...lists} 
      handleOperations={handleOperations}
      />
    </div>
  );
};

export default WatchlistPage;