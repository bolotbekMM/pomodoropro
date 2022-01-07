import React, {useState} from "react";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Settings from "./components/settings/Settings";
import Time from "./components/timer/Time";

function App() {
  const [settingIsShown, setSettingIsShown] = useState(false)

  const showSettingHandler = () =>{
    setSettingIsShown(true)
  };

  const hideSettingHandler = () =>{
    setSettingIsShown(false)
  };


  return (
    <>
    <div className={classes.app} >
    {settingIsShown && <Settings onCloseModal={hideSettingHandler}/>}
      <Header onShowModal={showSettingHandler}/>
      <Time/>
      
      
    </div>
    
    </>
  );
}

export default App;
