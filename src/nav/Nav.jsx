import "./nav.css"

import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__link"><Link to="/favorites">Favorites</Link></li>
        <li className="nav__link"><Link to="/watchlist">Watchlist</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
