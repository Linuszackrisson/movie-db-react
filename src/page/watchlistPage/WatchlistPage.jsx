//WatchlistPage.jsx

import React from 'react';
import Watchlist from '../../components/watchlist/Watchlist' 

const WatchlistPage = ({ watchlist }) => {
  return (
    <div>
      <Watchlist watchlist={watchlist} showList={true} /> {/* Pass props as needed */}
    </div>
  );
};

export default WatchlistPage;