import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;

  ${({ primary }) => primary} {
    background: ${({ theme }) => theme.themeBlue};
    color: ${({ theme }) => theme.white};
  }

  ${({ secondary }) => secondary} {
    background: ${({ theme }) => theme.secondaryBtn};
    color: ${({ theme }) => theme.bg1};
  }
`;

export const PomodoroButtonStyle = styled.button`
  background-color: transparent;
  border: 0;
  display: inline-block;
  width: 100px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

export const SettingsButtonStyle = styled.button`
  margin-block-start: 20px;
  width: auto;
  background: ${({ theme }) => theme.bg2};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1.3rem;
  line-height: 36px;
  border: 2px solid ${({ theme }) => theme.text};
  text-align: center;

  svg {
    width: 36px;
    float: left;
    margin-inline-end: 5px;
  }
`;
