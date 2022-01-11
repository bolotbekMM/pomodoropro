import React from 'react'
import classes from './Header.module.css'
import titleImage from '../../assests/icon-white.png'
import settingImg from '../../assests/settingImg.png'
import reportImg from '../../assests/reportImg.png'

const Header = (props) => {
    return (
        <div className={classes['main-header']}>
        <div className={classes.header}>
            <div className={classes.title}>
                <img className={classes.image} src={titleImage} alt='titleImage'/>
                <p>Pomofocus</p>
            </div>
            <div className={classes.buttons}>
                <button onClick={props.onShowModal} className={classes.button}>
                    <img className={classes.icons} src={settingImg} alt='settingIcon'/>Settings</button>
                <button className={classes.button}>
                    <img className={classes.icons} src={reportImg} alt='reportIcon'/>Report</button>
            </div>
            
        </div>
        <div>
            <hr className={classes.hr} />
        </div>
        
        </div>

    )
}

export default Header
