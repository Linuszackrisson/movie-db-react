//WatchlistPage.jsx
import React from 'react';
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
      showList={true}
      handleOperations={handleOperations}
      />
    </div>
  );
};

export default WatchlistPage;