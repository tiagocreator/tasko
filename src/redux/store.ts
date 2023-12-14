import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import pomodoroReducer from './pomodoroSlice';

const rootReducer = combineReducers({
  todo: todoReducer,
  pomodoro: pomodoroReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
