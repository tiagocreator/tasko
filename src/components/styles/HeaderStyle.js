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

  .burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .open-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
  }

  .close-menu {
    padding: 3px;
    width: 46px;
    height: 46px;
    border: 4px solid ${({ theme }) => theme.themeRed};
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .burger-menu {
      display: none;
    }
  }
`;
