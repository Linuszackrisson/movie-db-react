import "./nav.css"

function Nav() {
  return (
    <nav className="header__nav">
      <ul>
        <li className="nav__link"><a href="#">Favorites</a></li>
        <li className="nav__link"><a href="#">Watchlist</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
