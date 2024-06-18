/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/card.css';

export default function Card({ icon, title, desc }) {
  return (
    <div className="card">
      {/* add the icon classname for style */}
      {icon}
      <p className="title">{title}</p>
      <p>
        {desc}
      </p>
    </div>
  );
}
