import styled from 'styled-components';

export const ToDoStyle = styled.main`
  width: 100%;
  margin: 0 auto;

  .content-wrapper {
    background: ${({ theme }) => theme.bg2};
    padding: 1rem;
    border-radius: 12px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .empty-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;
