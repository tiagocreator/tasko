import styled from 'styled-components';

export const PomodoroSettingsStyle = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;

  .slider {
    width: 100%;
    height: 44px;
    border: 2px solid ${({ theme }) => theme.warningMain};
    border-radius: 24px;
  }

  .thumb {
    margin: auto;
    background-color: ${({ theme }) => theme.warningMain};
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .slider.green {
    border: 2px solid ${({ theme }) => theme.successLight};
  }

  .slider.green .thumb {
    background-color: ${({ theme }) => theme.successLight};
  }

  label {
    display: block;
    margin-block: 20px 10px;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
