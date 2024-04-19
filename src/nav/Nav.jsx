import "./nav.css"

import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
