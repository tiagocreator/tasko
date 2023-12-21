import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  min-height: 45px;
  padding: 14px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  background: ${({ theme }) => theme.primaryMain};
  color: ${({ theme }) => theme.white};
`;
