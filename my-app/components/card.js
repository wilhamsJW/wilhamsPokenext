import Image from 'next/image'

import Link from 'next/link'

import styles from '../styles/Card.module.css'

// o link da imagem foi adicionado em next config, para que o next entenda e permita q se trata de uma imagem externa

// Esse parãmetro pokemon tá vindo doa rquivo index.tsx
export default function Card({pokemon}) {
    return (
        <div className={styles.card}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="140"
                height="140"
                alt={pokemon.name} 
             />
             <p className={styles.id}>#{pokemon.id}</p>
             <h3 className={styles.title}>{pokemon.name}</h3>
             <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
             {/**<Link href={`/test`}>Teste rota</Link>*/}
             {/** Explicação no readme sobre este href de rota dinãmica */}
        </div>
    )
}