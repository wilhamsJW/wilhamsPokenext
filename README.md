# PokeNext
Here we will find a project with Next.js

# This is the same project as this [PROJETO](https://github.com/wilhamsJW/pokeNext) His commits are very well organized

## [Project Link](https://wilhams-pokenext-5sbfubmmv-wilhamsdev-gmailcom.vercel.app/)

## [See the prject on the site](https://wilhams-pokenext-5sbfubmmv-wilhamsdev-gmailcom.vercel.app/)

## Commands used in installation

1. npx create-next-app .

### Installed dependencies

<p align="center">
  <img src="my-app/public/dependencies-instaled.png" width="600px">
</p>

#### Observation: https://github.com/wilhamsJW/pokeNext/commit/ca8a5f691c49fa754d3ef41505d574be6d9f47e4

we add DNS since we are using external server

### Como foi criado a pasta dinâmica?

1. Crie uma pasta dentro de pages, a que criamos foi a pasta 'pokemon'

2. Dentro da pasta criada crie uma arquivo com esta sintaxe `[pokemonID].js` deve haver [] ao redor do nome

`IMPORTANTE:` No arquivo `card.js` temos essa parte da linha de código:
   ##### href={`/pokemon/${pokemon.id}`}>Detalhes...
   este `/pokemon/${pokemon.id}` se refere a pasta criada dentro de pages chamada `pokemon` que dentro dela colocamos o que foi descrito no passo `2`, dessa forma o `Next.js` já entende que se trata de rotas dinãmicas e irá atuar para que a mágica aconteça

   ### How to Deploy?

   1. npm run build 

   2. Próximo passo é criar uma conta na `vercel` após criar ela, continue com github q fica mais fácil a importação
   O vercel irá identificar seus projetos e aparecerá nessa tela (click em import):

  <p align="center">
    <img src="my-app/public/vercel01.png" width="400px">
  </p>

  3. Irá aparecer esta tela (click em deploy) (Irá ser feito o build, runnig checks e irá no dá um DNS)

  <p align="center">
    <img src="my-app/public/vercel02.png" width="400px">
  </p>

### How to update the project in vercel

First check if you have a vercel add project like the command:

remote git -v

This should return the DNS url with a VERCEL name as well as its recognized repository
by github

If you don't have something with VERCEL, add it with:

`git remote add vercel https://wihams-pokenext.vercel.app/`

This link above is the link of your project given by vercel, it is the DNS.

check in git remote -v

if there is agpo pair with this:

origin https://github.com/wihamsJW/wihamsPokenext.git (fetch)
origin https://github.com/wihamsJW/wihamsPokenext.git (push)
vercel https://wihams-pokenext.vercel.app/ (push)

then just add the changed file, commit and give a `git push` and it will be updated in git and vercel

### Como atualizar o proejeto na vercel

Primeiro verifique se vc tem um projeto vercel add como o comando:

git remote -v 

Isso deve retornar a url do DNS com um nome VERCEL bem como seu repositório reconhecido 
pelo github

Se não tiver algo com VERCEL, adicione com:

git remote add vercel https://wilhams-pokenext.vercel.app/ 

Este link acima é o link do seu projeto dado pela vercel, é o DNS.

verifique em git remote -v 

se há agpo pareico com isso:

origin  https://github.com/wilhamsJW/wilhamsPokenext.git (fetch)
origin  https://github.com/wilhamsJW/wilhamsPokenext.git (push)
vercel  https://wilhams-pokenext.vercel.app/ (push)

depois é só add o arquivo alterado, Commitar e dá um `git push` e será atualizado no git e na vercel