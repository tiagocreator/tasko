import { GlobalStyles } from './components/styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ToDoContainer from './pages/ToDoContainer';
import PomodoroContainer from './pages/PomodoroContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ToDoContainer />}></Route>
            <Route path="/pomodoro" element={<PomodoroContainer />}></Route>
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
      </>
    </ThemeProvider>
  );
}

export default App;
