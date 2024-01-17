// src/components/partials/Header.js
import React from 'react';
import searchIcon from '../images/search.svg';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__l">
        <div className="header__logo">Wild Vibe</div>
        <div className="header__navigation">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/About" className="header__link">About</Link>
          <a className="header__link" href="#">Archive</a>
          <a className="header__link" href="#">Contact</a>
          <img className="icon" src={searchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;

