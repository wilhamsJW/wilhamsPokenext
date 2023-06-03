import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import Layout from '../../components/Layout'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"


// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       cacheTime: Infinity, // Mantém os dados em cache indefinidamente
//     },
//   },
// })

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}> {/** default React query */}
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} /> {/** renderiza o que está dentro do index.tsx ou index.js | estou passando <Component {...pageProps} />
             * como prop para que o layout receba ele no componente dele e renderize onde queira
             */}
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
  )
}
