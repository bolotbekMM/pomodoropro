import React, { useState, useEffect, useCallback } from 'react';
import TimeChangebutton from './timeChangeButton';
import next from '../../assests/next.png';
import Btnpres from '../../assests/buttonpress.wav';
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

  const [display, setDisplay] = useState(pomodorDuration);
  const [timerOn, setTimerOn] = useState(false);
  const [autoStartBr, setAutoStartBr] = useState(autoStartBreak);
  const [autoStartPom, setAutoStartPom] = useState(autoStartPomodoro);
  const [cycle, setCycle] = useState(longBreakIntervalCycle);
  const [timer, setTimer] = useState(null);
  const [counter, setCounter] = useState(1);

  const Timertime = useCallback(() => {
    switch (currentMode) {
      case MODES.POMODORO:
        return setDisplay(pomodorDuration);
      case MODES.SHORT_BREAK:
        return setDisplay(shortBreakDuration);
      case MODES.LONG_BREAK:
        return setDisplay(longBreakDuration);
    }
  }, [currentMode, pomodorDuration, shortBreakDuration, longBreakDuration]);

  const AutoBreak = useCallback(() => {
    setAutoStartBr(autoStartBreak);
    setAutoStartPom(autoStartPomodoro);
    setCycle(longBreakIntervalCycle);
  }, [autoStartBreak, autoStartPomodoro, longBreakIntervalCycle]);

  useEffect(() => {
    Timertime();
    AutoBreak();
  }, [Timertime, AutoBreak]);

  const pomodoroTime = () => {
    dispatch(changeModeFunc(COLORS.POMODORO, MODES.POMODORO));
    pauseTimer();
  };

  const shortBreakTime = () => {
    dispatch(changeModeFunc(COLORS.SHORT_BREAK, MODES.SHORT_BREAK));
    pauseTimer();
  };

  const longBreakTime = () => {
    dispatch(changeModeFunc(COLORS.LONG_BREAK, MODES.LONG_BREAK));
    pauseTimer();
  };

  const pauseTimer = () => {
    setTimerOn(false);
    clearInterval(timer);
    btnpres.play();
  };

  const btnpres = new Audio(Btnpres);

  useEffect(() => {
    if (display === 0) {
      if (currentMode === MODES.POMODORO) {
        setCounter((prev) => prev + 1);
        if (cycle == counter) {
          longBreakTime();
          setCounter(1);

          if (autoStartBr) {
            startTimer();
          }
        } else {
          shortBreakTime();

          if (autoStartBr) {
            startTimer();
          }
        }
      }
    }
    if (display === 0) {
      if (currentMode === MODES.SHORT_BREAK) {
        pomodoroTime();
        if (autoStartPom) {
          startTimer();
        }
      }
    }
    if (display === 0) {
      if (currentMode === MODES.LONG_BREAK) {
        pomodoroTime();
        if (autoStartPom) {
          startTimer();
        }
      }
    }
  }, [display, cycle, autoStartBr, autoStartPom]);

  console.log(counter);

  /* const clickToNext = () => {
    if (
      window.confirm(
        'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
      )
    )
      if (currentMode === MODES.POMODORO) {
        if (cycle == counter) {
          longBreakTime();
          setCounter(1);
          console.log(counter);
        } else {
          shortBreakTime();
          setCounter((prev) => prev + 1);
         
        }
      }
      if (currentMode === MODES.SHORT_BREAK) {
          pomodoroTime();
      }

      if (currentMode === MODES.LONG_BREAK) {
          pomodoroTime();
      }
  }; */

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
        setDisplay((prev) => {
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

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.buttons}>
          <TimeChangebutton />
        </div>
        <div className={classes.timer}>
          <p className={classes.time}>{formatTime(display)}</p>
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
