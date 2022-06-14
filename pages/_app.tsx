import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ScrollObserver } from '../utils/scroll-observer'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes/light-theme';




function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ScrollObserver>
          <ThemeProvider theme={ lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
          </ThemeProvider>
  </ScrollObserver>
  )
}

export default MyApp
