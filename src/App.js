import React, {useState} from "react";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Settings from "./components/settings/Settings";
import Time from "./components/timer/Time";
import { useSelector } from 'react-redux'
import {BG_KEY} from './redux/bgRedux/bgReducer'



function App() {
  const [settingIsShown, setSettingIsShown] = useState(false)

  const showSettingHandler = () =>{
    setSettingIsShown(true)
  };

  const hideSettingHandler = () =>{
    setSettingIsShown(false)
  };

   const viewBg = useSelector((state)=>{
   return state [BG_KEY]
   })

  return (
    <>
    <div className={classes.app} style={{backgroundColor: viewBg.color}} >
                                    {/* <div className={classes.app} > */}
      {settingIsShown && <Settings onCloseModal={hideSettingHandler}/>}
      
      <Header onShowModal={showSettingHandler}/>
      <Time/>
    </div>
    
    </>
  );
}

export default App;
