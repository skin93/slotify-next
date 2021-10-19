import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles/globalStyle';
import TheHeader from '@/components/layout/TheHeader';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TheHeader />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
