import ReactSlider from 'react-slider';
import { setShowSettings, setWorkMinutes, setBreakMinutes } from '../redux/pomodoroSlice';
import { PomodoroSettingsStyle } from './styles/PomodoroSettingsStyles';
import { SettingsButtonStyle } from './styles/ButtonStyles';
import { useSelector, useDispatch } from 'react-redux';

interface Props {
  onClick: () => void;
}

const BackButton: React.FC<Props> = ({ onClick }) => {
  return (
    <SettingsButtonStyle onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
          clipRule='evenodd'
        />
      </svg>
      Voltar
    </SettingsButtonStyle>
  );
};

const PomodoroSettings: React.FC = () => {
  const pomodoroStatus = useSelector((state: any) => state.pomodoro);
  const dispatch = useDispatch();

  const handleWorkMinutesChange = (newValue: number | number[]) => {
    dispatch(setWorkMinutes(Array.isArray(newValue) ? newValue[0] : newValue));
  };

  const handleBreakMinutesChange = (newValue: number | number[]) => {
    dispatch(setBreakMinutes(Array.isArray(newValue) ? newValue[0] : newValue));
  };

  return (
    <PomodoroSettingsStyle>
      <label>tempo: {pomodoroStatus.workMinutes}:00</label>
      <ReactSlider
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={pomodoroStatus.workMinutes}
        onChange={handleWorkMinutesChange}
        min={1}
        max={120}
      />
      <label>pausa: {pomodoroStatus.breakMinutes}:00</label>
      <ReactSlider
        className='slider green'
        thumbClassName='thumb'
        trackClassName='track'
        value={pomodoroStatus.breakMinutes}
        onChange={handleBreakMinutesChange}
        min={1}
        max={120}
      />
      <BackButton onClick={() => dispatch(setShowSettings(false))} />
    </PomodoroSettingsStyle>
  );
};

export default PomodoroSettings;
