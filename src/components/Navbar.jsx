import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="logoDiv">
        <img src="../assets/logo.png" alt="" />
        <div className="title">
          <h3>CAR</h3>
          <p>Rental</p>
        </div>
      </div>

      {/* links */}
      <div className="linkDiv">
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Vehicle Models</a>
        <a href="/#">Testimonials</a>
        <a href="/#">Our Team</a>
        <a href="/#">Contacts</a>
      </div>

      {/* Buttons */}
      <div className="buttonDiv">
        <button type="button" className="signInBtn">Sign In</button>
        <button type="button">Register</button>
      </div>

    </div>
  );
}
