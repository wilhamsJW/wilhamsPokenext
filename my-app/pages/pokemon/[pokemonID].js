import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

// Faz mapeamento geral dos dados
// estou passando todos os meus paths para função para q possa pré renderizar
export const getStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=251`);
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon, i) => {
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
    fallback: false /** é padrão do next.js porém pode ser usado como true, veja documentação */,
  };
};

// faz mapeamento um a um dos dados
export const getStaticProps = async (context) => {
  // esse context é basicamente o que criamos acima, por isso acessamos: context.params.pokemonID
  //que é o mesmo nome q coloamos acima
  const id = context.params.pokemonID;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { data },
  };
};

export default function Pokemon({ data }) {
  // Next automaticamente entende que esse parâmetro é da função getStaticProps()
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{data.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
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

      </div>
    </div> // end
  );
}
