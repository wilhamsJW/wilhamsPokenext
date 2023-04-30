import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>About the Project</h1>

            <p>Web project with Next.js and Pokemon API for users to explore information and search for Pokemons. Efficient and interactive development, known for its efficiency in creating fast and scalable web applications, with integration through HTTP requests. Aim to provide an informative platform about the Pokemon universe.</p>
            <p>Projeto web com Next.js e API de Pokémons para usuários explorarem informações e buscar Pokémons. Desenvolvimento eficiente, interativo e conhecido por sua eficiência na criação de aplicações web rápidas e escaláveis, com integração por requisições HTTP. Objetivo de fornecer plataforma informativa sobre o universo Pokémon.</p>

            <Image src="/images/picachu.png" width="300"  height="300" alt="picachu"></Image>
        </div>
    )
}