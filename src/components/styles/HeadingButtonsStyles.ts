import styled from 'styled-components';

export const HeadingButtonsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    height: 45px;
    width: 160px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    overflow: hidden;
  }

  .tasks {
    background: ${({ theme }) => theme.primaryMain};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &:hover {
      background: ${({ theme }) => theme.primaryLight};
    }
  }

  .pomodoro {
    background: ${({ theme }) => theme.secondaryMain};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
      background: ${({ theme }) => theme.secondaryLight};
    }
  }

  .icon {
    margin-right: 10px;
  }
`;
