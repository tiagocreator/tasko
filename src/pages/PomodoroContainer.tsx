import { useContext, useEffect, useState } from 'react';
import ButtonsContainer from '../components/ButtonsContainer';
import Pomodoro from '../components/Pomodoro';
import PomodoroSettings from '../components/PomodoroSettings';
import SettingsContext from '../context/SettingsContext';
import { useSelector } from 'react-redux';

const PomodoroContainer: React.FC = () => {
  const initialShowSettings = useSelector((state: any) => state.settings.showSettings);
  const initialWorkMinutes = useSelector((state: any) => state.settings.workMinutes);
  const initialBreakMinutes = useSelector((state: any) => state.settings.breakMinutes);

  // Use useState to manage the state for showSettings, workMinutes, and breakMinutes
  const [showSettings, setShowSettings] = useState<boolean>(initialShowSettings);
  const [workMinutes, setWorkMinutes] = useState<number>(initialWorkMinutes);
  const [breakMinutes, setBreakMinutes] = useState<number>(initialBreakMinutes);

  useEffect(() => {
    // Update the state when Redux store values change
    setShowSettings(initialShowSettings);
    setWorkMinutes(initialWorkMinutes);
    setBreakMinutes(initialBreakMinutes);
  }, [initialShowSettings, initialWorkMinutes, initialBreakMinutes]);

  return (
    <>
      <ButtonsContainer />
      {/* Pass the state values and state updater functions into the context provider */}
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          setWorkMinutes,
          breakMinutes,
          setBreakMinutes,
        }}>
        {showSettings ? <PomodoroSettings /> : <Pomodoro />}
      </SettingsContext.Provider>
    </>
  );
};

export default PomodoroContainer;
