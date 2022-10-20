import {
  ButtonsContainerStyle,
  StyledLink,
} from './styles/ButtonsContainerStyles';
import { BsClockFill } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';

const ButtonsContainer = () => {
  return (
    <ButtonsContainerStyle>
      <StyledLink to="/" className="tasks" value="tasks">
        <FaTasks className="icon" />
        Tasks
      </StyledLink>
      <StyledLink to="/pomodoro" className="pomodoro" value="pomodoro">
        <BsClockFill className="icon" />
        Pomodoro
      </StyledLink>
    </ButtonsContainerStyle>
  );
};

export default ButtonsContainer;
