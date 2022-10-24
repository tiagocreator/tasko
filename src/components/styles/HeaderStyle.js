import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
  }

  .logo span {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  .logo img {
    margin-inline-end: 10px;
  }
`;
