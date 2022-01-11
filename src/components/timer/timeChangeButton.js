import React from 'react'
import classes from './TimeChangeButton.module.css'
import { useDispatch } from 'react-redux'
import { bgBlue, bgGreen, bgRed } from '../../redux/bgRedux/bg.actions'

const TimeChangeButton = () => {
    const dispatch = useDispatch()

  // const [bodyColor, setBodyColor] = useState('rgb(217, 85, 80)') 

   //React.useEffect(() => document.getElementById('root').style.backgroundColor = bodyColor, [bodyColor])

    const clickChangeRed = () =>{
        dispatch(bgRed())
        //setBodyColor('rgb(217, 85, 80)')
    }

    const clickChangeGreen = () =>{
        //setBodyColor('rgb(76, 145, 149)')
         dispatch(bgGreen())
    }

    const clickChangeBlue = () =>{
        dispatch(bgBlue())
        //setBodyColor('rgb(69, 124, 163)')
    }

    
    return (
        <div>
                <button className={classes.button} onClick={clickChangeRed} >Pomodoro</button>
                <button className={classes.button} onClick={clickChangeGreen}>Short Break</button>
                <button className={classes.button} onClick={clickChangeBlue}>Long Break</button>
        </div>
    )
}

export default TimeChangeButton;
