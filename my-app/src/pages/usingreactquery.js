import { useQueryClient, useQuery } from "react-query";

let dataCurrentPokemon
const searchQuery = async () => {
  const queryClient = useQueryClient();
  //const queryData = await queryClient.getQueryData(['pokemon', 3])
  // const queryCache = await queryClient.getQueryCache().queries //mostra dados
  dataCurrentPokemon = await queryClient.getQueriesData();
  console.log("dataCurrentPokemon 00", dataCurrentPokemon);


  return dataCurrentPokemon[0][1];
};

//https://tanstack.com/query/v3/docs/react/guides/ssr

export default function UsingReactQuery() {

  const { dataCurrentPokemon } = useQuery('xxxxx', async () => {
        return await searchQuery()
  })
    //dataCurrentPokemon = await searchQuery();
    //console.log("dataCurrentPokemon", dataCurrentPokemon);

  console.log("dataCurrentPokemon", dataCurrentPokemon);

  //dataCurrentPokemon();

  return (
    <>
      {<><h2>
        Aqui estou mostrando o acesso dos dados sendo buscados pelo React query
        e sendo acessado em qualquer lugar da minha aplicação
      </h2>
      <br />
      <br />

      <h4>Name:{dataCurrentPokemon?.name}</h4>
      <h4>Peso:{dataCurrentPokemon?.weight}</h4>
      <h4>Altura:{dataCurrentPokemon?.height}</h4></>}
    </>
  );
}
