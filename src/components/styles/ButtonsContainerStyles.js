import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonsContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 330px;
  max-width: 45%;
  height: 56px;
  margin: 2rem auto;

  .tasks {
    background: ${({ theme }) => theme.themeBlue};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .pomodoro {
    background: ${({ theme }) => theme.themeRed};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .icon {
    margin-right: 15px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
`;
