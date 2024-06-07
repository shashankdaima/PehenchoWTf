import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return 
  <>
  <script defer src="https://cloud.umami.is/script.js" data-website-id="bef2b713-e7b6-4037-84ff-847ec76a5eb2"></script>
    <Component {...pageProps} />
  </>
}

export default MyApp
