import { UPDATE_SETTINGS } from '../../../redux/Reducer/actionTypes';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import closebutton from '../../../assests/closebutton.png';

import './SettingsForm.css';
import Switch from '../../UI/switch/Switch';

const SettingsForm = (props) => {
  const dispatch = useDispatch();

  const {
    pomodorDuration,
    longBreakDuration,
    shortBreakDuration,
    autoStartBreak,
    autoStartPomodoro,
    longBreakIntervalCycle,
  } = useSelector((state) => state.Store);

  const [pomodoro, setPomodoro] = useState(Number);
  const [short, setShort] = useState(Number);
  const [long, setLong] = useState(Number);
  const [autoBreak, setAutoBreak] = useState( );
  const [autoStart, setAutoStart] = useState( );
  const [longBreakInterval, setLongBreakInterval] = useState(Number);

  useEffect(() => {
    setPomodoro(pomodorDuration / 60);
    setShort(shortBreakDuration / 60);
    setLong(longBreakDuration / 60);
    setAutoBreak(autoStartBreak);
    setAutoStart(autoStartPomodoro);
    setLongBreakInterval(longBreakIntervalCycle);
  }, []);

  const inputChangeHandlerPomodoro = (e) => {
    setPomodoro(e.target.value);
  };

  const inputChangeHandlerShort = (e) => {
    setShort(e.target.value);
  };

  const inputChangeHandlerLong = (e) => {
    setLong(e.target.value);
  };

  const inputChangeHandlerInterval = (e) => {
    setLongBreakInterval(e.target.value);
  };

  
  
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCloseModal();
    const updatedSettings = {
      pomodorDuration: pomodoro,
      shortBreakDuration: short,
      longBreakDuration: long,
      autoStartBreak: autoBreak,
      autoStartPomodoro: autoStart,
      longBreakIntervalCycle: longBreakInterval,
    };

    dispatch({ type: UPDATE_SETTINGS, payload: updatedSettings });
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="main">
        <div className="header">
          <p>TIMER SETTING</p>
          <img
            onClick={props.onCloseModal}
            className="closebutton"
            src={closebutton}
            alt="closebutton"
          />
        </div>
        <div className="body">
          <span className="title">Time (minutes)</span>
          <div className="container">
            <div className="input-box">
              <label className="lable">Pomodoro</label>
              <input
                className="inputmod"
                type="number"
                min="0"
                step="1"
                onChange={inputChangeHandlerPomodoro}
                value={pomodoro}
              ></input>
            </div>
            <div className="input-box">
              <label className="lable">Short Break</label>
              <input
                className="inputmod"
                type="number"
                min="0"
                step="1"
                onChange={inputChangeHandlerShort}
                value={short}
              ></input>
            </div>
            <div className="input-box">
              <label className="lable">Long Break</label>
              <input
                className="inputmod"
                type="number"
                min="0"
                step="0.1"
                onChange={inputChangeHandlerLong}
                value={long}
              ></input>
            </div>
          </div>

          <div>
            <div className="secbody">
              <div>
                <span className="title">Auto start Breaks?</span>
              </div>
              <div>
                <Switch
                checked={autoBreak}
                onClick={() => setAutoBreak(!autoBreak)}
                />
                
              </div>
            </div>
            <div className="secbody">
              <div>
                <span className="title">Auto start Pomodoros?</span>
              </div>
              <div>
                <Switch 
                checked={autoStart}
                onClick={(e) => setAutoStart(!autoStart)}
                />
              </div>
            </div>
          </div>
          <div className="secbody">
            <span className="title">Long Break interval</span>
            <div>
              <input
                className="input"
                type="number"
                min="0"
                value={longBreakInterval}
                onChange={inputChangeHandlerInterval}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="confirm_button" type="submit">
          OK
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
