import '../styles/globals.css'

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/** renderiza o que está dentro do index.tsx */}
    </Layout>
  )
}
