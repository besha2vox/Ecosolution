import { ThemeProvider } from 'styled-components';

import { theme, Theme } from './theme/theme';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Electricity from './components/Electricity';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Customers from './components/Customers';
import Services from './components/Services';

const App = () => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Header />
      <main>
        <Hero />
        <About />
        <Electricity />
        <Services />
        <FAQ />
        <Customers />
        <ContactUs />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
