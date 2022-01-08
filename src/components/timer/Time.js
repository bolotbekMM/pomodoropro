import React from 'react'
import TimeChangebutton from './timeChangeButton'
import classes from './Timer.module.css'
import { useSelector } from 'react-redux'
import {BG_KEY} from '../../redux/bgRedux/bgReducer'

const Time = () => {

    const viewBg = useSelector((state)=>{
        return state [BG_KEY]
        })

    return (
        <div className={classes.container}>
        <div className={classes.box}>
            <div className={classes.buttons}>
                <TimeChangebutton/>
            </div>
            <div className={classes.timer}>
                <p className={classes.time}>00:30</p>
            </div>
            <div className={classes['start-buttonbox']}>
                <button className={classes['start-button']} style={{color: viewBg.color}}>START</button>
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
