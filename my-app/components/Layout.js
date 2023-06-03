import NavBar from "./NavBar";

import Footer from "./Footer";

import Head from "next/head";

import { usePokemonData } from "../src/hook/useDataPokemon";

import PokemonContext from "../src/contexts/dataPokemon-context";

export default function Layout({ children }) {
  /** Adicionei essa requisição do react query aqui no layout pq a partir daqui consigo ter ela no cache para usar em qq local da minha
   * aplicação, mas poderia ter sido usada em qq outro lugar desde q o componente do local passe pelo queryCliente provider lá no app.tsx
   * caso ele não esteja dentro do queryclienteprovider, dará um erro de no queryclienteprovider
   */
  const data = usePokemonData(); // usando react query para fazer request - porém customizei um hook só para este fim, para limpeza do codigo

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico"></link>
        <title>PokeNext.JS</title>
      </Head>
      <PokemonContext.Provider value={data}>
        <NavBar />
        <main className="main-container">{children}</main>
        {/** main --> renderiza o que está dentro do index.tsx */}
        {/** este comnponente Layout recebe este children que exibimos na linha acima dentro do arquivo _app.tsx
         * este children é apenas o que está dentro do index.js
         */}
        <Footer />
      </PokemonContext.Provider>
    </>
  );
}
