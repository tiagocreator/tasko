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
`;
