import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

import Link from "next/link";

import { useRouter } from "next/router";

import { useQuery } from '@tanstack/react-query'


  export default function Pokemon() { // with React Query

    const idPokemon = useRouter().query.pokemonID
    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ['pokemon', idPokemon],
      queryFn: () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then(
          (res) => res.json(),
        ),
      staleTime: 4000, // Dados em cache são considerados desatualizados após 4 segundos
      retry: 3, // Tenta fazer a consulta novamente até 3 vezes em caso de falha
      refetchOnWindowFocus: false, // para evitar que consultas sejam realizadas quando o usuário está ausente do site.
    });

    if (error) return 'An error has occurred: ' + error.message

  return (
    <>
    {isLoading && (<div className={styles.loading}><div className={styles.loadingAux}></div></div>)}

    {!isLoading && <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{data.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
        width="200"
        height="200"
        alt={data.name}
      />

      <div>
        <h3>Número:</h3>
        <p>#&nbsp;&nbsp;{data.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          #&nbsp;
          {data.types.map((e, i) => (
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
            <p>{data.height * 10} cm</p>
          </div>

          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{data.weight / 10} kg</p>
          </div>
        </div>

        <Link href={"/"} className={styles.back}>
          Back
        </Link>
      </div>
    </div>}
    </>
  );
}
