import React from 'react'
import classes from './SetMinutes.module.css'

const SetMinutes = () => {
    return (
        <div className={classes.body}>
            <span className={classes.title}>Time (minutes)</span>
            <div className={classes.container}>
                <div className={classes['input-box']}>
                    <label className={classes.lable}>Pomodoro</label>
                    <input className={classes.input}></input>
                </div>
                <div className={classes['input-box']}>
                    <label className={classes.lable}>Short Break</label>
                    <input className={classes.input}></input>
                </div>
                <div className={classes['input-box']}>
                    <label className={classes.lable}>Long Break</label>
                    <input className={classes.input}></input>
                </div>
            </div>
        </div>
    )
}

export default SetMinutes
