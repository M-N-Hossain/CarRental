/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/box.css';

export default function TableBox({
  className, label, separator, value,
}) {
  return (
    <div className={`box ${className}`}>
      <span>{label}</span>
      <span>{separator}</span>
      <span>{value}</span>
    </div>
  );
}
