import { createSlice } from '@reduxjs/toolkit';

interface Pomodoro {
  workMinutes: number;
  breakMinutes: number;
  showSettings: boolean;
}

const initialState: Pomodoro = {
  workMinutes: 25,
  breakMinutes: 5,
  showSettings: false,
};

const getInitialValues = (): Pomodoro => {
  const localPomodoroConfig = window.localStorage.getItem('pomodoroConfig');
  if (localPomodoroConfig) {
    return JSON.parse(localPomodoroConfig);
  }

  window.localStorage.setItem('pomodoroConfig', JSON.stringify(initialState));
  return initialState;
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState: getInitialValues(),
  reducers: {
    setWorkMinutes: (state, action) => {
      state.workMinutes = action.payload;
      window.localStorage.setItem('pomodoroConfig', JSON.stringify(state));
    },
    setBreakMinutes: (state, action) => {
      state.breakMinutes = action.payload;
      window.localStorage.setItem('pomodoroConfig', JSON.stringify(state));
    },
    setShowSettings: (state, action) => {
      state.showSettings = action.payload;
      window.localStorage.setItem('pomodoroConfig', JSON.stringify(state));
    },
  },
});

export const { setWorkMinutes, setBreakMinutes, setShowSettings } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
