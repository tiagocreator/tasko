import styled from 'styled-components';

export const ToDoStyle = styled.main`
  .todo-wrapper {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
  }

  .content-wrapper {
    background: ${({ theme }) => theme.bg2};
    padding: 1rem;
    border-radius: 12px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .empty-text {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.bg2};
    text-align: center;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.bg4};
    width: max-content;
    height: auto;
  }
`;
