import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Logo from '../logo/Logo';
import Nav from '../../nav/Nav';

const Header = () => {
  return (
    <header>
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
};

export default Header;