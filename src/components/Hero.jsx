/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../styles/hero.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Hero() {
  return (
    <div className="hero">
      <div className="innerContainer">
        <div className="heroContent">
          <p className="firstP-Text">Plan your trip now</p>
          <h1>
            Save
            <span> big </span>
            with our car rental
          </h1>
          <p className="secondP-Text">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick up options and much more
          </p>
          <button type="button" style={{ marginLeft: 0 }}>
            Book Ride
            <CheckCircleOutlineIcon className="icon" />
          </button>
          <button className="learnMoreBtn" type="button">Learn more &gt;</button>
        </div>
      </div>

    </div>
  );
}
