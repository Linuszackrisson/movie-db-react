import "./nav.css"

function Nav() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__link"><a href="#">Favorites</a></li>
        <li className="nav__link"><a href="#">Watchlist</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
