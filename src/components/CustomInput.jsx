/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

function SelectInput({
  title, icon, options, value, onChange, showWarning, warningMessage,
}) {
  return (
    <div className="inputDiv">
      <div className="label">
        {icon}
        <p>
          {title}
          <span> *</span>
        </p>
      </div>
      <select value={value} required onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} required value={option}>{option}</option>
        ))}
      </select>
      {showWarning && <div className="warning-message">{warningMessage}</div>}
    </div>
  );
}

function DateInput({
  title, icon, value, onChange, showWarning, warningMessage,
}) {
  return (
    <div className="inputDiv">
      <div className="label">
        {icon}
        <p>
          {title}
          <span> *</span>
        </p>
      </div>
      <input type="date" value={value} onChange={onChange} />
      {showWarning && <div className="warning-message">{warningMessage}</div>}
    </div>
  );
}

export { SelectInput, DateInput };
