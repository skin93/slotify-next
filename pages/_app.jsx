import { Fragment } from 'react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
