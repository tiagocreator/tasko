import { createContext, Dispatch, SetStateAction } from 'react';

interface SettingsInfo {
  workMinutes: number;
  breakMinutes: number;
  showSettings: boolean;
  setShowSettings: Dispatch<SetStateAction<boolean>>;
  setWorkMinutes: Dispatch<SetStateAction<number>>;
  setBreakMinutes: Dispatch<SetStateAction<number>>;
}

const defaultSettings: SettingsInfo = {
  workMinutes: 25,
  breakMinutes: 5,
  showSettings: false,
  setShowSettings: () => {},
  setWorkMinutes: () => {},
  setBreakMinutes: () => {},
};

const SettingsContext = createContext<SettingsInfo>(defaultSettings);

export default SettingsContext;
