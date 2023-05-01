import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../../components/Layout'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}> {/** default React query */}
      <Layout>
        <Component {...pageProps} /> {/** renderiza o que está dentro do index.tsx */}
      </Layout>
    </QueryClientProvider>

  )
}
