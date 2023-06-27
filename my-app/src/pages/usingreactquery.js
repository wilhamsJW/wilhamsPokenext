import { useQueryClient, QueryClient } from "react-query";

import { useContext, useState } from "react";

import styles from "../styles/Pokemon.module.css";

import PokemonContext from '../contexts/dataPokemon-context'

export default function UsingReactQuery() {

  const data = useContext(PokemonContext)
  console.log('data', data)

  // const [data, setData] = useState(null);
  // const [isFetching, setIsFetching] = useState(null);
  // let queryCache
  // Aqui estou pegando dados diretamente do cache do react query, mas não aconselho por dá muito trabalho em
  // manipular os estados e ficou dando falha no carregamento em buscar dados do cache
  // use o react query apenas para comandar requisições q é isso q ele serve
  // const searchQuery = async () => {
  //   let queryClient = new QueryClient();
  //   queryClient = useQueryClient();
  //   queryCache = await queryClient.getQueryCache(); //mostra dados
  //   setData(queryCache?.queries[0]?.state?.data?.results[4]?.name);
  //   setIsFetching(queryCache.queries[0]?.state?.isFetching);
  // };
  // searchQuery();

  return (
    <>
      {/* {(
        <div className={styles.loading}>
          <div className={styles.loadingAux}></div>
        </div>
      )} */}
      {(
        <div>
          <h1>
            Aqui estou mostrando o acesso dos dados sendo buscados pelo React
            query e sendo acessado em qualquer lugar da minha aplicação
          </h1>
          <br />
          <br />

          <h4>Name de 4 pokemons sendo exibidos apenas para mostar o uso do useContext com UsingReactQuery,
            <br /> dessa forma consigo ter os dados disponíveis em qq lugar da minha aplicação</h4>
          <br /><br /><br />
          <h4>Nome: {data[0]?.name}</h4><br />
          <h4>Nome: {data[1]?.name}</h4><br />
          <h4>Nome: {data[2]?.name}</h4><br />
          <h4>Nome: {data[3]?.name}</h4><br />
          <h4>Nome: {data[4]?.name}</h4><br />
        </div>
      )}
    </>
  );
}
