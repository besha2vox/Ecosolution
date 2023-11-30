import { ThemeProvider } from 'styled-components';

import { theme, Theme } from './theme/theme';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <footer>FOOTER</footer>
    </ThemeProvider>
  );
};

export default App;
