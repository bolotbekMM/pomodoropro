React.useEffect(() => {
    if(display === 0) {
      if(currentMode === MODES.POMODORO) {
        for (let index = 1; index < 2; index++) {
          shortBreakTime()
          startTimer()
          pomodoroTime()
        }
        if(display === 0) {
        if(currentMode === MODES.LONG_BREAK){
        longBreakTime()
        startTimer()
      }}
    }
  }}, [display])



  ////////////////////////////jbhkjbnkjnkjnkj/////////////////////////

  useEffect(() =>{
    if (display=== 0){
      if (currentMode === MODES.POMODORO){
        if (interval > 1) {
          shortBreakTime();
          if (autoStartBr) {
            startTimer();
          }
        } else{
          longBreakTime();
          if (autoStartBr) {
            startTimer();
          }
        }
      }else if (currentMode === MODES.SHORT_BREAK){
        pomodoroTime();
        if (autoStartPom) {
          startTimer();
        }

      }else if(currentMode === MODES.LONG_BREAK){
        pomodoroTime();
        if (autoStartPom) {
          startTimer();
        }
      }

    }
  }, [display]);


  ////////////////////////////////************************////////////////// */

  function colorChangeHundlerPomo() {
    if(color === 'red') {
      return classes.button
    }else {
      return classes.opacity
    }
  }
  function colorChangeHundlerShort() {
    if(color === 'green') {
      return classes.button
    }else {
      return classes.opacity
    }
  } 

  function colorChangeHundlerShort() {
    if(color === 'blue') {
      return classes.button
    }else {
      return classes.opacity
    }
  }

  ////////////////////////////////////////////////////////////////
  const [nextLv, setNextLv] = useState(0);
  const [startNextLv, setStartNextLv] = useState(false);
  //переход на другой баттон когда заканчиваеться время
  const changeNext = () => {
    let nextTime = pomodorosNext;
    if (currentTime.name === pomodorosNext.name) {
      if (interval > 1) {
        dispatch(setIntervalMin());
        setNextLv((preva) => preva + 1);
        nextTime = shortNext;
        setStartNextLv(true);
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      } else {
        setNextLv((preva) => preva + 1);
        nextTime = longNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        setStartNextLv(true);
        cancelTimer();
      }
    }
    if (currentTime.name === shortNext.name) {
      if (interval > 0) {
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      }
    }
    if (currentTime.name === longNext.name) {
      if (interval > 1) {
        dispatch(setInterval(nextLv));
        setNextLv(0);
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      } else {
        setNextLv(0);
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      }
    }
  };
  useEffect(() => {
    if (currentTime.name === shortNext.name) {
      if (startNextLv) {
        if (autoStartBreaks) {
          startTimer();
        }
      }
    }
  }, [startNextLv, autoStartBreaks, startTimer, currentTime]);
  useEffect(() => {
    if (currentTime.name === pomodorosNext.name) {
      if (startNextLv) {
        if (autoStartPomo) {
          startTimer();
        }
      }
    }
  }, [startNextLv, autoStartPomo, startTimer, currentTime]);
  useEffect(() => {
    if (currentTime.name === longNext.name) {
      if (autoStartBreaks) {
        if (startNextLv) {
          if (autoStartPomo) {
            startTimer();
          }
        }
      }
    }
  }, [autoStartPomo, autoStartBreaks, startTimer, startNextLv, currentTime]);

  /////////////////////////////////////////////////////////////////



  // useEffect(() => {dispatch(getProggress( currentTimes.time * time.seconds ))
  // let progress =()=>{
  //   pomodorDuration -display
  // }

  if (timerOn) {
    if (window.confirm(
        'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
      )) { if (currentMode === MODES.SHORT_BREAK) 
        pomodoroTime();
      if (autoStartPom) {
        startTimer();
      }
    } 
  } 



///////////////////////------------------------------------/////////////////////////////

import React, { useState, useEffect, useCallback } from 'react';
import TimeChangebutton from './timeChangeButton';
import next from '../../assests/next.png';
import Btnpres from '../../assests/buttonpress.wav';
import Clocktick from '../../assests/clock.mp3';
import classes from './Timer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, MODES } from '../../utils/constants';
import { changeModeFunc } from '../../redux/actionCreators';

const Time = () => {
  const dispatch = useDispatch();

  const {
    color,
    currentMode,
    pomodorDuration,
    longBreakDuration,
    shortBreakDuration,
    autoStartBreak,
    autoStartPomodoro,
    longBreakIntervalCycle,
  } = useSelector((state) => state.Store);

  const [countTimer, setCountTimer] = useState( )

  //const [pomodoroTime, setPomodoroTime] = useState(pomodorDuration);
 // const [shortBreakTime, setShortBreakTime] = useState(shortBreakDuration);
  //const [longBreakTime, setLongBreakTime] = useState(longBreakDuration);
  const [autoStartBr, setAutoStartBr] = useState(autoStartBreak);
  const [autoStartPom, setAutoStartPom] = useState(autoStartPomodoro);
  const [interval, setInterval] = useState(longBreakIntervalCycle);
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState(null);


  const Timertime = useCallback(() => {
    switch (currentMode) {
      case MODES.POMODORO:
        return setCountTimer(pomodorDuration);
      case MODES.SHORT_BREAK:
        return setCountTimer(shortBreakDuration);
      case MODES.LONG_BREAK:
        return setCountTimer(longBreakDuration);
    }
  }, [currentMode, pomodorDuration, shortBreakDuration, longBreakDuration]);

  useEffect(() => {

    Timertime();

    setAutoStartBr(autoStartBreak);
    setAutoStartPom(autoStartPomodoro);
    setInterval(longBreakIntervalCycle);
    // setPomodoroTime(pomodorDuration);
    // setShortBreakTime(shortBreakDuration);
    // setLongBreakTime(longBreakDuration);
    
  }, [
    Timertime,
    setAutoStartBr,
    setAutoStartPom,
    setInterval,

    // setPomodoroTime,
    // setShortBreakTime,
    // setLongBreakTime,
  ]);

  

  const btnpres = new Audio(Btnpres);
  //const clocktick = new Audio(Clocktick);

  const pomodoroTimeFunc = () => {
    dispatch(changeModeFunc(COLORS.POMODORO, MODES.POMODORO));

    
  };

  const shortBreakTimeFunc = () => {
    dispatch(changeModeFunc(COLORS.SHORT_BREAK, MODES.SHORT_BREAK));

    
  };

  const longBreakTimeFunc = () => {
    dispatch(changeModeFunc(COLORS.LONG_BREAK, MODES.LONG_BREAK));
 
    pauseTimer();

  };

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds)
    );
  };

  const startTimer = () => {
    setTimerOn(true);
    btnpres.play();
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let interval = setInterval(() => {
      date = new Date().getTime();
      if (date > nextDate) {
        setCountTimer((prev) => {
          if (prev === 1) {
            pauseTimer();
            clearInterval(interval);
          }
          return prev - 1;
        });
      }
    }, 100);
    setTimer(interval);
  };

  const pauseTimer = () => {
    setTimerOn(false);
    clearInterval(timer);
    btnpres.play();
  };

  

  // const AutoBreak = useCallback(() => {
  //   setAutoStartBr(autoStartBreak);
  //   setAutoStartPom(autoStartPomodoro);
  //   setInterval(longBreakIntervalCycle);

  // }, [autoStartBreak, autoStartPomodoro, longBreakIntervalCycle]);

  useEffect(() => {
    if (countTimer === 0) {
      if (currentMode === MODES.POMODORO) {
        longBreakTimeFunc();
        if (autoStartBr) {
          startTimer();
        }
      }
    }
    if (countTimer === 0) {
      if (currentMode === MODES.LONG_BREAK) {
        pomodoroTimeFunc();
        if (autoStartPom) {
          startTimer();
        }
      }
    }
  }, [countTimer]);


  

  // const clickToNext = () => {
  //   if (
  //     window.confirm(
  //       'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
  //     )
  //   ) {
  //     if (currentMode === MODES.POMODORO) {
  //       longBreakTime();
  //       if (autoStartBr) {
  //         startTimer();
  //       }
  //     } else if (currentMode === MODES.LONG_BREAK) {
  //       pomodoroTime();
  //       if (autoStartPom) {
  //         startTimer();
  //       }
  //     } else if (currentMode === MODES.SHORT_BREAK) {
  //       pomodoroTime();
  //       if (autoStartPom) {
  //         startTimer();
  //       }
  //     }
  //   }
  // };

 

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.buttons}>
          <TimeChangebutton />
        </div>
        <div className={classes.timer}>
          <p className={classes.time}>{formatTime(countTimer)}</p>
        </div>
        <div className={classes['start-buttonbox']}>
          {!timerOn && (
            <button
              className={classes['start-button']}
              style={{ color: color }}
              onClick={startTimer}
            >
              START
            </button>
          )}
          {timerOn && (
            <button
              className={classes['stop-button']}
              style={{ color: color }}
              onClick={pauseTimer}
            >
              STOP
            </button>
          )}
          <div className={classes['next-btndiv']}>
            {timerOn && (
              <img
                //onClick={clickToNext}
                className={classes['next-button']}
                src={next}
                alt="next-button"
              />
            )}
          </div>
        </div>
      </div>
      <div className={classes.counterbox}>
        <p>#1</p>
      </div>
      <div className={classes.focus}>
        <p>Time to focus!</p>
      </div>
    </div>
  );
};

export default Time;


///////////////////////////-------------------------------------//////////////////////







  else{
    {
     if (window.confirm(
         'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
       )) { if (currentMode === MODES.LONG_BREAK) 
         pomodoroTime();
       if (autoStartPom) {
         startTimer();
       }
     } 
   }
 } 



 // const [bodyColor, setBodyColor] = useState('rgb(217, 85, 80)')
  //React.useEffect(() => document.getElementById('root').style.backgroundColor = bodyColor, [bodyColor])
  //setBodyColor('rgb(217, 85, 80)')
  //setBodyColor('rgb(69, 124, 163)')