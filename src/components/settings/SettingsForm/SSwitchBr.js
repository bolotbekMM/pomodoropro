import React from 'react';
import './SwitchBr.css';

const SSwitchBr = ({ isOnBr, handleToggleBr }) => {
  return (
    <>
      <input
      
        checked={isOnBr}
        onChange={handleToggleBr}
        className="react-switch-checkbox"
        id='react-switch-neww'
        type="checkbox"
      />
      <label
        style={{ background: isOnBr && 'rgba(132, 199, 51, 0.8)' }}
        className="react-switch-label"
        htmlFor={`react-switch-neww`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default SSwitchBr;
