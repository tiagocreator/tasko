import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ToDoPage, PomodoroPage } from './pages';
import { Header, Footer } from './components';

import { GlobalStyles } from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme, MyTheme } from './themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme as MyTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ToDoPage />}></Route>
          <Route path='/pomodoro' element={<PomodoroPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </ThemeProvider>
  );
};

export default App;
