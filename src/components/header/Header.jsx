import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import Nav from "../../nav/Nav";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <SearchBar />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
