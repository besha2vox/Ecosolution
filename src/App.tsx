import { ThemeProvider } from 'styled-components';

import { theme } from './theme/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <header>HEADER</header>
            <main>MAIN</main>
            <footer>FOOTER</footer>
        </ThemeProvider>
    );
};

export default App;
