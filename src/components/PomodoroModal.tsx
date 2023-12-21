import ReactSlider from 'react-slider';
import { setShowSettings, setWorkMinutes, setBreakMinutes } from '../redux/pomodoroSlice';
import { useSelector, useDispatch } from 'react-redux';

import { MdOutlineClose } from 'react-icons/md';
import { ToDoModalStyle } from './styles/ToDoModalStyles';
import { PomodoroSettingsStyle } from './styles/PomodoroSettingsStyles';

interface ModalProps {
  onClick?: () => void;
}

const PomodoroModal: React.FC<ModalProps> = () => {
  const pomodoroStatus = useSelector((state: any) => state.pomodoro);
  const dispatch = useDispatch();

  const handleWorkMinutesChange = (newValue: number | number[]) => {
    dispatch(setWorkMinutes(Array.isArray(newValue) ? newValue[0] : newValue));
  };

  const handleBreakMinutesChange = (newValue: number | number[]) => {
    dispatch(setBreakMinutes(Array.isArray(newValue) ? newValue[0] : newValue));
  };

  const closeModal = () => {
    dispatch(setShowSettings(false));
  };

  const modalActive = true;

  const hide: React.CSSProperties = {
    display: 'none',
  };

  const show: React.CSSProperties = {
    display: 'flex',
  };

  const isVisible = modalActive ? show : hide;

  return (
    <ToDoModalStyle style={isVisible}>
      <div className='container'>
        <div
          className='close-btn'
          onClick={closeModal}
          onKeyDown={closeModal}
          tabIndex={0}
          role='button'>
          <span>fechar</span>
          <MdOutlineClose />
        </div>
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
        </PomodoroSettingsStyle>
      </div>
    </ToDoModalStyle>
  );
};

export default PomodoroModal;
