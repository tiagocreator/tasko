import styled from 'styled-components';

export const ToDoItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-block-end: 1.5rem;
  border-radius: 4px;

  &:last-child {
    margin-block-end: 0;
  }

  .todoDetails {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }

  .svgBox {
    flex-basis: 25px;
    flex-shrink: 0;
    height: 25px;
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

  .texts {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .todoText {
    word-break: break-all;
    font-weight: 500;
    font-size: 1.5rem;
    &--completed {
      text-decoration: line-through;
      opacity: 0.7;
    }
  }

  .time {
    display: block;
    font-size: 1.1rem;
    font-weight: 300;
    margin-block-start: -0.2rem;
  }

  .todoActions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-inline-start: 1rem;
  }

  .icon {
    font-size: 1.8rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bg2};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease background-color;

    &:hover {
      background-color: ${({ theme }) => theme.bg3};
    }
  }
`;
