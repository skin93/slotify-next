import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles/globalStyle';
import TheHeader from '@/components/layout/TheHeader';
import { MobileMenuProvider } from 'contexts/mobileMenuContext';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MobileMenuProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TheHeader />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </MobileMenuProvider>
    </Fragment>
  );
}

export default MyApp;
