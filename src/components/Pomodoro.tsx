import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PomodoroStyle } from './styles/PomodoroStyles';

import { theme } from '../themes';

interface PomodoroProps {
  isPaused: boolean;
}

const Pomodoro: React.FC<PomodoroProps> = ({ isPaused }) => {
  const pomodoroStatus = useSelector((state: any) => state.pomodoro);

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
  }, [pomodoroStatus.breakMinutes, pomodoroStatus.workMinutes]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

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
          pathColor: mode === 'work' ? theme.secondaryMain : theme.successMain,
        })}
      />
    </PomodoroStyle>
  );
};

export default Pomodoro;
