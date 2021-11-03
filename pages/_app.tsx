import { AppProps } from 'next/app'
import '../styles/index.css'
import withYM from "next-ym";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
