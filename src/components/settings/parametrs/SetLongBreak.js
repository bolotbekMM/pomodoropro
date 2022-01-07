import React from 'react'
import classes from './SetLongBreak.module.css'

const SetLongBreak = () => {
    return (
        <div className={classes.body}>
            <div>
                <span className={classes.title}>Long Break interval</span>

            </div>
            <div>
                <input className={classes.input}></input>
            </div>
            
        </div>
    )
}

export default SetLongBreak
