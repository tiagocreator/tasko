import React, { useState, useEffect, useRef } from 'react';
import { PomodoroStyle } from './styles/PomodoroStyles';
import { PomodoroButtonStyle, SettingsButtonStyle } from './styles/ButtonStyles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSettings } from '../redux/pomodoroSlice';

import { theme } from '../themes';

interface ButtonProps {
  onClick: () => void;
  color?: string;
}

const PlayButton: React.FC<ButtonProps> = ({ onClick, color }) => {
  return (
    <PomodoroButtonStyle onClick={onClick} color={color}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
          clipRule='evenodd'
        />
      </svg>
    </PomodoroButtonStyle>
  );
};

const PauseButton: React.FC<ButtonProps> = ({ onClick, color }) => {
  return (
    <PomodoroButtonStyle onClick={onClick} color={color}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </PomodoroButtonStyle>
  );
};

const SettingsButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <SettingsButtonStyle onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
          clipRule='evenodd'
        />
      </svg>
      Configurações
    </SettingsButtonStyle>
  );
};

const Pomodoro: React.FC = () => {
  const pomodoroStatus = useSelector((state: any) => state.pomodoro);

  const dispatch = useDispatch();

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [mode, setMode] = useState<string>('work');
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const secondsLeftRef = useRef<number>(secondsLeft);
  const isPausedRef = useRef<boolean>(isPaused);
  const modeRef = useRef<string>(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds =
        (nextMode === 'work' ? pomodoroStatus.workMinutes : pomodoroStatus.breakMinutes)! * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = pomodoroStatus.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [pomodoroStatus]);

  const totalSeconds =
    mode === 'work' ? pomodoroStatus.workMinutes * 60 : pomodoroStatus.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  return (
    <PomodoroStyle>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + (seconds < 10 ? '0' + seconds : seconds)}
        styles={buildStyles({
          textColor: theme.text,
          pathColor: mode === 'work' ? theme.themeRed : theme.themeGreen,
          // tailColor: 'rgba(255,255,255,.2)',
        })}
      />
      <div className='buttons-container'>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
            color={theme.themeGreen}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
            color={theme.themeOrange}
          />
        )}
      </div>
      <SettingsButton
        onClick={() => {
          dispatch(setShowSettings(true));
        }}
      />
    </PomodoroStyle>
  );
};

export default Pomodoro;
