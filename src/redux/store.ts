import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
