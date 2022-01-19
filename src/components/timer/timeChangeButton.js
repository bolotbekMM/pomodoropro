import React, { useState, useEffect } from 'react';
import classes from './TimeChangeButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MODE } from '../../redux/Reducer/actionTypes';
import { COLORS, MODES } from '../../utils/constants';

const TimeChangeButton = () => {
  const dispatch = useDispatch();
  const { currentMode } = useSelector((state) => state.Store);

  const [pomodoroBtn,setPomodoroBtn] = useState()
  const [longBtn, setLongBtn] = useState()
  const [shortBtn, setShortBtn] = useState()

  useEffect(() => {
    if (currentMode === MODES.POMODORO){
      setPomodoroBtn('rgba(0, 0, 0, 0.15)');
    }else { setPomodoroBtn('none'); }
    if (currentMode === MODES.LONG_BREAK){
      setLongBtn('rgba(0, 0, 0, 0.15)');
    }else {setLongBtn('none');}
    if (currentMode === MODES.SHORT_BREAK){
      setShortBtn('rgba(0, 0, 0, 0.15)');
    }else {setShortBtn('none');}
  }, [currentMode])
  

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
  console.log(longBtn);
  console.log(pomodoroBtn);
  //let backGround = dispatch(changeModeFunc(BTNCOLOR.POMODORO,POMODORO));
  
  return (
    <div>
      <button className={classes.button} style={{background:pomodoroBtn}} onClick={clickChangeRed}>
        Pomodoro
      </button>
      <button className={classes.button} style={{background:shortBtn}} onClick={clickChangeGreen}>
        Short Break
      </button>
      <button className={classes.button} style={{background:longBtn}} onClick={clickChangeBlue}>
        Long Break
      </button>
    </div>
  );
};

export default TimeChangeButton;
