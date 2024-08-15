/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/card.css';

export default function Card({
  clssname, icon, title, desc,
}) {
  return (
    <div className={`card ${clssname}`}>
      {/* add the icon classname for style */}
      <div className="iconDiv">
        {icon}
      </div>
      <div className="descDiv">
        <p className="title">{title}</p>
        <p className="description">
          {desc}
        </p>
      </div>
    </div>
  );
}
