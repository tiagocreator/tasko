import styled from 'styled-components';

export const ToDoModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};

  .container {
    background-color: ${({ theme }) => theme.bg2};
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border-radius: 8px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: -10px;
    right: 0;
    transform: translateY(-100%);
    font-size: 2.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bg2};
    color: var(--black-2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease all;
    z-index: -1;
    &:hover {
      background-color: ${({ theme }) => theme.secondaryMain};
      color: ${({ theme }) => theme.white};
    }

    span {
      font-size: 1.4rem;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    @media (min-width: 768px) {
      span {
        display: none;
      }
    }
  }

  .form-title {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  .form {
    width: 100%;
    label {
      font-size: 1.5rem;
      input,
      select {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        width: 100%;
        padding: 0.8rem;
        border: none;
        background-color: ${({ theme }) => theme.white};
        font-size: 1.3rem;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start: 1rem;

    .add {
      margin: 0 auto;
    }

    .cancel {
      display: none;
    }

    @media (min-width: 768px) {
      justify-content: flex-start;
      margin-block-start: 2rem;

      .add {
        margin: 0 1rem 0 0;
      }

      .cancel {
        display: block;
      }
    }
  }
`;
