/* eslint-disable react/prop-types */
import React from 'react';
import x5 from '../assets/x5.png';
import qoutationMark from '../assets/qoutationMark.png';
import '../styles/profileCard.css';

export default function ProfileCard({ name, location, words }) {
  return (
    <div className="profileCard">
      <p className="words">
        &quot;
        {words}
        &quot;
      </p>
      <div className="profileInfo">
        <div className="profile">
          <div className="imgDiv">
            <img src={x5} alt="" />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <h5>{location}</h5>
          </div>
        </div>
        <img src={qoutationMark} alt="" />
      </div>
    </div>
  );
}
