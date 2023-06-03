import React from 'react';

import styles from '../styles/Home.module.css'

import Image from 'next/image'

import Card from '../../components/card'

// interface Pokemon {
//   id: number;
//   name: string;
//   url: string
// }

export async function getStaticProps() { // Função nativa do Next.js que busca dados vindos de uma API ou banco de dados

  // Estamos limitando aqui para apenas trazer 500 dados, para não ficar 
  // algo tão pesado no carregamento do site.
  // Porém existe algumas sites que vaõ ter que apresentar todos os dados
  // e o que fazer? Usaríamos o fallBack para nos ajudar com isso (falei um pouco sobre o fallback no meu projeto chamado Next.JS https://github.com/wilhamsJW/next.js/commit/b1e66123a0163322ef83aecb1009dc6d55927b0e)
  // então, isso não ficaria por conta do Pré-Rendering, deveríamos limitar a quantidade de renderização de paginas
  // deixando assim 1000 paginas por exemplo, depois deixaríamos a cargo do Loading
  // com um click, e o usuário só iria ver aquelas outras páginas quando clikasse e asim carregaria 
  // a página instâtaneamente

  // English
  // We are limiting here to only bring 251 data, so as not to make the site load too heavy. However, there are some sites that will have to present all the data, and what to do? We would use the fallback to help us with that (I talked a little about fallback in my project called Next.JS: https://github.com/wilhamsJW/next.js/commit/b1e66123a0163322ef83aecb1009dc6d55927b0e). So, this would not be up to Prerendering, we should limit the number of page rendering, leaving 1000 pages, for example, then leaving it up to the loading, with a click, and the user would only see those other pages when clicking and thus would load the page instantly.

  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
  const data = await res.json()

  //data.results.map((item: Pokemon, index: number ) => {
  data.results.map((item, index ) => {
    item.id = index + 1 // item.id -> adiciona mais um elemento dentro meu array, este é o ID
  }) 

  return {
    props: {
      pokemons: data.results,
    }
  }

}

  //export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image 
          src="/images/pokebola.jpg"
          width="50" 
          height="50" 
          alt="PokeNext"
         />
      </div>
      {/** Como estamos usando JSX, no map não colocamos uma função com {} e sim com parenteses */}
      <div className={styles.pokemon_container}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
    
  )
}
