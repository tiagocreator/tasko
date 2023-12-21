import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.5px;
    }

    img {
      margin-inline-end: 10px;
    }
  }
`;
