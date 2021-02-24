import Layout from '../components/Layout'
import '../styles/globals.css' // Bring in global styles in this file to take effect for the whole site

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
