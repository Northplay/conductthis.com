import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Typekit from 'react-typekit';

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <Typekit kitId="hbp2ihq" />
    </>
  )
}
