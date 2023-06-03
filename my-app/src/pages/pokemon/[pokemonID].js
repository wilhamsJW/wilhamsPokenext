import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

import Link from "next/link";

import { useRouter } from "next/router";

import { useQuery } from "react-query";

// Faz mapeamento geral dos dados
// estou passando todos os meus paths para função para q possa pré renderizar
export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=180');
  const data = await res.json();

  // params
  const paths = data.results.map((e, i) => {
    return {
      params: { pokemonID: (i + 1).toString() },
      /** Definindo o ID que irei passar como path, coloquei i+1 pq o array
       * começa em 0, então o pokemon zero do array será o pokemon 1 para mim
       * dessa forma percorro todos os id da minha rota e mando eles no return abaixo
       */
    };
  });

  return {
    paths,
    //fallback: false /** é padrão do next.js porém pode ser usado como true, veja documentação */,
    fallback: true,
    /** Agora estou usando como true pq quero pegar dados da API não renderizado
     * para que o site não fique tão lento adicionei um limit no endpoint de 180 elementos e esses
     * serão os dados pré renderizados e não demora a carregar para o usuário ver, porém existem mais páginas no site,
     * para fazer com que eles apareçam apenas quando solicitadas eu configuro fallback para true e desta forma consigo pegar qq elemento vindo da API
     *
     * Com fallback: false só é permitido pegar 180 elementos, se eu tentar colocar na url 181 irá retornar 404 página de erro
     */
  };
};

// faz mapeamento um a um dos dados
export const getStaticProps = async (context) => {
  // esse context é basicamente o que criamos acima, por isso acessamos: context.params.pokemonID
  //que é o mesmo nome q coloCamos acima
  const id = context.params.pokemonID;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const dataProps = await res.json();

  return {
    props: { dataProps },
  };
};

// with React Query
 export default function Pokemon({ dataProps }) { // essa é a props passada quando pegamos do getStaticProps - porém eu uso o React Query e devo mapear os dados dele para poder recupera-los em cache
//export default function Pokemon() { // quando quero pegar do react query uso assim e vejo se os dados q estou renderizando é do react query
  // com React query eu renderizo os dados vindo da chamada dele
  
  // Utilizando React Query
  const idPokemon = useRouter().query.pokemonID;
  
  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ["pokemon", idPokemon],
  //   queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=180').then((res) => // a url da API que retornar os dados, são esses dados que ficarão armazenado em cache
  //       res.json()
  //     ),
  //   //staleTime: 14000, // Dados em cache são considerados desatualizados após 4 segundos e isso faz com que seja exibidos dados em temp real de 4 segund ou o tempo q desejar em milisegundos
  //   // para um sistema que tenha muitos usuários fazendo requeste ao mesmo tempo é aconselhável usar o websockets e o react query tem suporte pra websockets
  //   //retry: 5, // Tenta fazer a consulta novamente até 5 vezes em caso de falha
  //   refetchOnWindowFocus: false, // para evitar que consultas sejam realizadas quando o usuário está ausente do site.
  // });

  // if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {/** Carregamento se fosse feito com o isLoading no caso é isFallback getStaticProps */}
      {useRouter().isFallback && (<div className={styles.loading}><div className={styles.loadingAux}></div></div>)}

      {/** Carregamento se fosse feito com o isLoading do React query */}
      {/* {isLoading && (
        <div className={styles.loading}>
          <div className={styles.loadingAux}></div>
        </div>
      )} */}

      {/* {!useRouter().isFallback && <div className={styles.pokemon_container}> */}

      {/* {!isLoading && ( <div className={styles.pokemon_container}> */}  {/** Carregamento se fosse feito com o isLoading do React query */}

        {!useRouter().isFallback && (<div className={styles.pokemon_container}> {/** Carregamento se fosse feito com o isLoading no caso é isFallback getStaticProps */}
          <h1 className={styles.title}>{dataProps.name}</h1>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
            width="200"
            height="200"
            alt={dataProps.name}
          />

          <div>
            <h3>Número:</h3>
            <p>#&nbsp;&nbsp;{dataProps.id}</p>
          </div>

          <div>
            <h3>Tipo:</h3>
            <div className={styles.types_container}>
              #&nbsp;
              {dataProps.types.map((e, i) => (
                <span
                  key={i}
                  className={`${styles.type} ${styles["type_" + e.type.name]}`}
                >
                  &nbsp;{e.type.name}
                  {/** passei duas classes na mesma tag, a primeira sempre vai ser usada e a segunda só vai ser usada se houver o dado q vem da API, a segunda class apenas
                irá alterar o background-color para q o tipo de cada pokemon fique de acordo com sua respctiva cor */}
                </span>
              ))}
            </div>

            <div className={styles.data_container}>
              <div className={styles.data_height}>
                <h4>Atura:</h4>
                <p>{dataProps.height * 10} cm</p>
              </div>

              <div className={styles.data_weight}>
                <h4>Peso:</h4>
                <p>{dataProps.weight / 10} kg</p>
              </div>
            </div>

            <Link href={"/"} className={styles.back}>
              Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
