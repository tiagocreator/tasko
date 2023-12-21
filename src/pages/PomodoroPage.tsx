import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShowSettings } from '../redux/pomodoroSlice';

import { Pomodoro, Button, HeadingButtons, Options, PomodoroModal } from '../components';

import { theme } from '../themes';

const PomodoroPage: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const showSettings = useSelector((state: any) => state.pomodoro.showSettings);

  const dispatch = useDispatch();

  return (
    <main>
      <HeadingButtons />
      <Options
        buttonA={
          <Button
            onClick={() => {
              setIsPaused(!isPaused);
            }}
            type='button'
            text={isPaused ? 'Iniciar' : 'Pausar'}
            bg={isPaused ? theme.successLight : theme.warningLight}
          />
        }
        buttonB={
          <Button
            onClick={() => {
              dispatch(setShowSettings(true));
            }}
            type='button'
            text='Opções'
            bg={theme.primaryMain}
          />
        }
      />
      <Pomodoro isPaused={isPaused} />
      {showSettings && <PomodoroModal />}
    </main>
  );
};

export default PomodoroPage;
