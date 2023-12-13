import { ButtonsContainerStyle, StyledLink } from './styles/ButtonsContainerStyles';

import { BsClockFill } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';

const ButtonsContainer: React.FC = () => {
  return (
    <ButtonsContainerStyle>
      <StyledLink to='/' className='tasks'>
        <FaTasks className='icon' />
        Tarefas
      </StyledLink>
      <StyledLink to='/pomodoro' className='pomodoro'>
        <BsClockFill className='icon' />
        Pomodoro
      </StyledLink>
    </ButtonsContainerStyle>
  );
};

export default ButtonsContainer;
