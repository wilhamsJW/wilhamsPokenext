import NavBar from "./NavBar";

import Footer from "./Footer";

import Head from "next/head";

import { useQuery } from 'react-query'

export default function Layout({ children }) {

  /** Adicionei essa requisição do react query aqui no layout pq a partir daqui consigo ter ela no cache para usar em qq local da minha
   * aplicação, mas poderia ter sido usada em qq outro lugar
   */

  const info = useQuery({
    queryKey: ["pokemon", 9],
    queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=500').then((res) => // a url da API que retornar os dados, são esses dados que ficarão armazenado em cache
        res.json()
      ),
    //staleTime: 14000, // Dados em cache são considerados desatualizados após 4 segundos e isso faz com que seja exibidos dados em temp real de 4 segund ou o tempo q desejar em milisegundos
    // para um sistema que tenha muitos usuários fazendo requeste ao mesmo tempo é aconselhável usar o websockets e o react query tem suporte pra websockets
    //retry: 5, // Tenta fazer a consulta novamente até 5 vezes em caso de falha
    //refetchOnWindowFocus: false, // para evitar que consultas sejam realizadas quando o usuário está ausente do site.
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico"></link>
        <title>PokeNext.JS</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main> 
      {/** main --> renderiza o que está dentro do index.tsx */}
      {/** este comnponente Layout recebe este children que exibimos na linha acima dentro do arquivo _app.tsx 
       * este children é apenas o que está dentro do index.js
      */}
      <Footer />
    </>
  );
}
