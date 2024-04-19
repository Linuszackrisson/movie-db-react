//WatchlistPage.jsx

import React from 'react';
import Watchlist from '../../components/watchlist/Watchlist' 

const WatchlistPage = ({ watchlist }) => {
  return (
    <div>
      <h1>Watchlist Page</h1>
      <Watchlist watchlist={watchlist} showList={true} /> {/* Pass props as needed */}
    </div>
  );
};

export default WatchlistPage;