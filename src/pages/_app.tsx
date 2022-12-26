import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/AppThemeContext';
import { AppLanguageProvider } from 'contexts/AppLanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLanguageProvider>
      <AppThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AppThemeProvider>
    </AppLanguageProvider>
  );
}

export default MyApp;
