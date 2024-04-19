import { Link } from 'react-router-dom';
import "./logo.css";

function Logo() {
  return (
    <Link to="/">
      <img className="header__logo" src="/src/assets/jmlogo.svg" alt="just managing" />
    </Link>
  );
}

export default Logo;