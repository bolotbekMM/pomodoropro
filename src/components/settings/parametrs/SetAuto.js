import React from 'react'
import './SetAuto.css'

const SetAuto = () => {
    return (
        <div>
            <div className='body'>
                <div>
                <span className='title'>Auto start Breaks?</span>
                </div>
                <div>
                <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
                </label>
                </div>
            </div>
            <div className='body'>
                <div>
                <span className='title'>Auto start Pomodoros?</span>
                </div>
                <div>
                <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
                </label>
                </div>
            </div>
            
        </div>
    )
}

export default SetAuto
