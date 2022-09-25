import { GlobalStyles } from './components/styles/GlobalStyles';
import Header from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import { ThemeProvider } from 'styled-components';
import { light } from './themes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles />
        <Header />
        <ToDoContainer />
      </>
    </ThemeProvider>
  );
}

export default App;
