import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MintProvider } from '../context/MintContext.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MintProvider>
      <Component {...pageProps} />
    </MintProvider>
  )
}

export default MyApp
