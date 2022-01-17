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