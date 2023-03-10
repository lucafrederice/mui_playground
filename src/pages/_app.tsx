import AnimationWrapper from '@/components/animateWrapper'
import Layout from '@/components/layout'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <AnimationWrapper>
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </AnimationWrapper>
}
