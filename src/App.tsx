import { ThemeProvider } from 'styled-components';

import { theme, Theme } from './theme/theme';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Header />
      <main style={{ height: '1000px' }}>MAIN</main>
      <footer>FOOTER</footer>
    </ThemeProvider>
  );
};

export default App;
