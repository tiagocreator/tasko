import ButtonsContainer from '../components/ButtonsContainer';
import Pomodoro from '../components/Pomodoro';
import PomodoroSettings from '../components/PomodoroSettings';
import SettingsContext from '../context/SettingsContext';
import { useState } from 'react';

const PomodoroContainer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <>
      <ButtonsContainer />
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <PomodoroSettings /> : <Pomodoro />}
      </SettingsContext.Provider>
    </>
  );
};

export default PomodoroContainer;
