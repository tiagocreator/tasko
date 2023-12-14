import { useSelector } from 'react-redux';

import ButtonsContainer from '../components/ButtonsContainer';
import Pomodoro from '../components/Pomodoro';
import PomodoroSettings from '../components/PomodoroSettings';

const PomodoroContainer: React.FC = () => {
  const showSettings = useSelector((state: any) => state.pomodoro.showSettings);

  return (
    <main>
      <ButtonsContainer />
      {showSettings ? <PomodoroSettings /> : <Pomodoro />}
    </main>
  );
};

export default PomodoroContainer;
