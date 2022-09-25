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
