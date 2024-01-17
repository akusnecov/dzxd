// src/components/partials/Footer.js
import React from 'react';
import searchIcon from '../images/search.svg';
import '../styles/styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header__logo foot">Wild Vibe</div>
      <div className="header__navigation infoot">
        <a className="header__link f" href="#">Home</a>
        <a className="header__link f" href="#">About</a>
        <a className="header__link f" href="#">Archive</a>
        <a className="header__link f" href="#">Contact</a>
        <img className="icon infooter" src={searchIcon} alt="search" />
      </div>
      <div className="rectangle purple"></div>
      <div className="textin__footer">
        "We cherish nature, making conscious choices to reduce our impact. Join us in preserving the beauty of our planet – every small effort counts."
      </div>
      <div className="rectangle purple"></div>
      <div className="textin__footer">© 2023 - Wild Vibe. All Rights Reserved. Designed & Developed by <span className="contact">SuperKatya</span> </div>
      <div className="SocialNetwork">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="instagram"></div>
        <div className="pinterest"></div>
      </div>
    </div>
  );
};

export default Footer;

