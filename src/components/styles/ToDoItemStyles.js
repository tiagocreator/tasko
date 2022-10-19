import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToDoItemStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.white};
  margin-block-start: 1rem;

  &:first-of-type {
    margin-block-start: 0;
  }

  .todoDetails {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
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
