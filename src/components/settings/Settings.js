import React from 'react'
import classes from './Settings.module.css'
import closebutton from '../../assests/closebutton.png'
import SetMinutes from './parametrs/SetMinutes'
import Modal from '../UI/modal/Modal'
import SetAuto from './parametrs/SetAuto'
import SetLongBreak from './parametrs/SetLongBreak'

const Settings = (props) => {
    return (
        <Modal onCloseModal={props.onCloseModal}>
        <div className={classes.container}>
        <div className={classes.main}>
            <div className={classes.header}>
                <p>TIMER SETTING</p>
                <img className={classes.closebutton} onClick={props.onCloseModal} src={closebutton} alt='closebutton'/>
            </div>
            <SetMinutes/>
            <SetAuto/>
            <SetLongBreak/>

            
            <div></div>
            
        </div>
        <div className={classes.footer}>
                <button className={classes.confirm_button}>OK</button>
            </div>
        </div>
        </Modal>
    )
}

export default Settings
