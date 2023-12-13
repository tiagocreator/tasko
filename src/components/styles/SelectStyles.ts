import styled from 'styled-components';

export const SelectStyle = styled.select`
  display: inline-block;
  width: 150px;
  height: 45px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  outline: none;
  padding: 0 1rem;
  background: ${({ theme }) => theme.bg3};
`;
