import styled from 'styled-components';

export const CheckBoxStyle = styled.div`
  div {
    flex-basis: 25px;
    flex-shrink: 0;
    height: 30px;
    width: 30px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    cursor: pointer;
    transition: 0.3s ease background-color;

    &:hover {
      background-color: ${({ theme }) => theme.bg4};
    }

    svg {
      width: 100%;
      height: 100%;
      stroke: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
