import ReactSlider from 'react-slider';
import SettingsContext from '../context/SettingsContext';
import { useContext } from 'react';
import { PomodoroSettingsStyle } from './styles/PomodoroSettingsStyles';
import { SettingsButtonStyle } from './styles/ButtonStyles';

const BackButton = ({ onClick }) => {
  return (
    <SettingsButtonStyle onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
      Voltar
    </SettingsButtonStyle>
  );
};

const PomodoroSettings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <PomodoroSettingsStyle>
      <label>tempo: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>pausa: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
    </PomodoroSettingsStyle>
  );
};

export default PomodoroSettings;
