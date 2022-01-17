import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';
import Settings from './components/settings/SettingsModal';
import Time from './components/timer/Time';
import { useSelector } from 'react-redux';

function App() {
  const [settingIsShown, setSettingIsShown] = useState(false);

  const showSettingHandler = () => {
    setSettingIsShown(true);
  };


  const hideSettingHandler = () => {
    setSettingIsShown(false);
  };

  const color = useSelector((state) => state.Store.color);

  return (
    <>
      <div className={classes.app} style={{ backgroundColor: color }}>
        {settingIsShown && <Settings onCloseModal={hideSettingHandler} />}

        <Header onShowModal={showSettingHandler} />
        <Time />



      </div>
      
    </>
  );
}

export default App;
