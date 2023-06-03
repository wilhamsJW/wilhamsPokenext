import { useQuery } from 'react-query';

export function usePokemonData() {
  const info = useQuery({
    queryKey: ["pokemon", 9],
    queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=500').then((res) => // a url da API que retornar os dados, são esses dados que ficarão armazenado em cache
        res.json()
      ), function(reason) { // retornar msg de erro certinha aqui que vem do reeact query
        console.log(reason); // Error!
      }
    //staleTime: 14000, // Dados em cache são considerados desatualizados após 4 segundos e isso faz com que seja exibidos dados em temp real de 4 segund ou o tempo q desejar em milisegundos
    // para um sistema que tenha muitos usuários fazendo requeste ao mesmo tempo é aconselhável usar o websockets e o react query tem suporte pra websockets
    //retry: 5, // Tenta fazer a consulta novamente até 5 vezes em caso de falha
    //refetchOnWindowFocus: false, // para evitar que consultas sejam realizadas quando o usuário está ausente do site.
  });
  
    return info?.data?.results;
  }