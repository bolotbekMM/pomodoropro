import React from 'react';
import classes from './TimeChangeButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MODE } from '../../redux/Reducer/actionTypes';
import { COLORS, MODES } from '../../utils/constants';

const TimeChangeButton = () => {
  const dispatch = useDispatch();
  const { currentMode } = useSelector((state) => state.Store);

  const clickChangeRed = () => {
    dispatch({
      type: CHANGE_MODE,
      payload: {
        color: COLORS.POMODORO,
        mode: MODES.POMODORO,
      },
    });
  };

  const clickChangeGreen = () => {
    dispatch({
      type: CHANGE_MODE,
      payload: {
        color: COLORS.SHORT_BREAK,
        mode: MODES.SHORT_BREAK,
      },
    });
  };

  const clickChangeBlue = () => {
    dispatch({
      type: CHANGE_MODE,
      payload: {
        color: COLORS.LONG_BREAK,
        mode: MODES.LONG_BREAK,
      },
    });
  };

  return (
    <div>
      <button className={classes.button} onClick={clickChangeRed}>
        Pomodoro
      </button>
      <button className={classes.button} onClick={clickChangeGreen}>
        Short Break
      </button>
      <button className={classes.button} onClick={clickChangeBlue}>
        Long Break
      </button>
    </div>
  );
};

export default TimeChangeButton;
