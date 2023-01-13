import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
