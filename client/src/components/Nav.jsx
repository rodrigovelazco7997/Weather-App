import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="navBar">
      <span className="weatherTitle"> Weather App</span>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
