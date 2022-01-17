import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
      checked={isOn}
      onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && 'rgba(132, 199, 51, 0.8)' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;