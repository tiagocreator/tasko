import styled from 'styled-components';

export const PomodoroSettingsStyle = styled.div`
  text-align: left;
  padding-block-start: 50px;
  max-width: 320px;
  margin: 0 auto;

  .slider {
    height: 44px;
    border: 2px solid ${({ theme }) => theme.themeRed};
    border-radius: 24px;
  }

  .thumb {
    margin: auto;
    background-color: ${({ theme }) => theme.themeRed};
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .slider.green {
    border: 2px solid ${({ theme }) => theme.themeGreen};
  }

  .slider.green .thumb {
    background-color: ${({ theme }) => theme.themeGreen};
  }

  label {
    display: block;
    margin-block: 20px 10px;
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
