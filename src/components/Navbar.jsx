/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuItemShowing, setIsMenuItemShowing] = useState(false);

  const burgerMenuOpen = () => {
    setIsMenuItemShowing(true);
  };

  const burgerMenuClose = () => {
    setIsMenuItemShowing(false);
  };

  console.log(isMenuItemShowing);

  return (
    <div className="navbar">
      {/* logo */}
      <div className="logoDiv">
        <img src={logo} alt="" />
        <div className="title">
          <h3>CAR</h3>
          <p>Rental</p>
        </div>
      </div>

      {/* links */}

      <div className={isMenuItemShowing ? 'linkDiv active' : 'linkDiv'}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Vehicle Models</a>
        <a href="/#">Testimonials</a>
        <a href="/#">Our Team</a>
        <a href="/#">Contacts</a>
        {isMenuItemShowing && (
        <>
          <button type="button" className="signInBtn">Sign In</button>
          <button type="button">Register</button>
        </>
        )}
      </div>

      {/* Buttons */}
      <div className="buttonDiv">
        <button type="button" className="signInBtn">Sign In</button>
        <button type="button">Register</button>
      </div>

      <div
        className="burgerMenuIcons"
        onClick={isMenuItemShowing ? burgerMenuClose : burgerMenuOpen}
      >
        <i className={isMenuItemShowing ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

    </div>
  );
}
