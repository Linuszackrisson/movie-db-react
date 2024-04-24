import { Link } from 'react-router-dom';
import { Heart, Bookmark } from "@phosphor-icons/react";
import "./nav.css";


function Nav() {
  return (
    <nav>
      <ul className="nav__list">
      <li className="nav__link"><Link to="/watchlist">
        <Bookmark size={22} weight='bold' />
        Watchlist
        </Link></li>
        <li className="nav__link"><Link to="/favorites">
        <Heart size={22} weight='bold' />
        Favorites
        </Link></li>
      </ul>
    </nav>
  );
}

export default Nav;