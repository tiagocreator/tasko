import { Link } from 'react-router-dom';

import { BsClockFill } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';

import { HeadingButtonsStyle } from './styles/HeadingButtonsStyles';

const HeadingButtons: React.FC = () => {
  return (
    <HeadingButtonsStyle>
      <Link to='/'>
        <button className='tasks'>
          <FaTasks className='icon' />
          Tasks
        </button>
      </Link>
      <Link to='/pomodoro'>
        <button className='pomodoro'>
          <BsClockFill className='icon' />
          Pomodoro
        </button>
      </Link>
    </HeadingButtonsStyle>
  );
};

export default HeadingButtons;
