import React from 'react'
import classes from './Timer.module.css'

const Time = () => {
    return (
        <div className={classes.container}>
        <div className={classes.box}>
            <div className={classes.buttons}>
                <button className={classes.button} >Pomodoro</button>
                <button className={classes.button}>Short Break</button>
                <button className={classes.button}>Long Break</button>
            </div>
            <div className={classes.timer}>
                <p className={classes.time}>00:30</p>
            </div>
            <div className={classes['start-buttonbox']}>
                <button className={classes['start-button']}>START</button>
            </div>
            
        </div>
        <div className={classes.counterbox}>
            <p>#1</p>
        </div>
        <div className={classes.focus}>
            <p>Time to focus!</p>
        </div>
        </div>
    )
}

export default Time
