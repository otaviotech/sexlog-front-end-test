# Desafio técnico - eSapiens/sexlog

> Desafio técnico - eSapiens/sexlog

[![forthebadge](https://forthebadge.com/images/badges/built-by-hipsters.svg)](https://forthebadge.com)[![ForTheBadge built-with-love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![ForTheBadge uses-js](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)[![ForTheBadge uses-css](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)[![ForTheBadge uses-html](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)


Este repositório é um desafio técnico/prático para a vaga de desenvolvedor fronend na empresa eSapiens.


As linguagens utilizadas foram:

- HTML5
- Javascript (ES6)
- CSS3

### As tecnologias:

Nenhum framework de css foi utilizado (o maior desafio!).

Para realizar o scaffold do projeto foi utilizado a ferramenta [vue-cli](https://github.com/vuejs/vue-cli), que já deixa configurado algumas das ferramentas utilizadas como o transpiler [Babel](https://github.com/babel/babel) e o test-runner escolhido que foi o [Jest](https://github.com/facebook/jest).

Foram feitas algumas modificações no scaffold, principalmente no linter, que foi configurado com base no guideline da [Airbnb](https://github.com/airbnb/javascript), porém com algumas modificações nas seguintes regras:

|    Regra    | Airbnb | Este projeto | Justificativa |
|-------------|--------| -            |-
| no-plusplus | error  | off          | operadores unários são legais \o/
| padded-blocks | never | never/off | Dependendo do editor e a fonte, pode ser útil, fica a cargo do desenvolvedor, mas em geral, permanece considerando como erro.

## Documentação

Os serviços em Javascript puro estão documentados com [JSDoc](https://github.com/jsdoc3/jsdoc).

O HTML da documentação pode ser visualizado com:

```bash
$ npm run docs
```

## Desenvolvimento:

Para executar o sistema em ambiente de desenvolvimento, execute:

``` bash

# Para instalar as dependências.
$ npm install

# Para executar os testes conforme os arquivos são alterados.
# "Live TDD" do Jest.
$ npm run tdd

# Para executar o webpack-dev-server,
# que por padrão será executado na porta 8080,
# mas se esta já estiver em uso, será substituída por outra,
# até que encontre uma disponível.
# OBS: HotReload! \o/
$ npm run dev # -- --host 0.0.0.0 se deseja que esteja acessível na sua rede local.
```

## Testes de unidade

Os testes de unidade podem ser executados com os seguintes comandos:

```bash
$ npm run unit
```

Caso deseje ver o coverage dos testes execute da seguinte maneira:

```bash
# -- -- Para que a flag seja passada para o script e não para o npm.
$ npm run unit -- --coverage
```
## Produção

Para que seja gerado um bundle para a produção, execute o seguinte comando:

```bash
$ npm run build
```
OBS: Para que o projeto funcionasse no Github Pages, foi necessário alterar alguns caminhos no build padrão do Webpack, afim de fazer com que os caminhos das imagens e dos bundles funcionassem corretamente.

E claro, não pode faltar uma boa [playlist](https://open.spotify.com/user/otaviotech/playlist/3wsxy4Se0BXoGe7mGyZZRy), cheers!

