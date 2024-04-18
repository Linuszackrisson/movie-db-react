import SearchBar from '../searchBar/SearchBar';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
};

export default Header;