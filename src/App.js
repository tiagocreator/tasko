import { GlobalStyles } from './components/styles/GlobalStyles';
import Header from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { light } from './themes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles />
        <Header />
        <ToDoContainer />
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
