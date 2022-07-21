# Introdução

O que é ES6+?

 - ES significa ECMAScript, ou seja, o nome oficial da linguagem JavaScript e 6+ é a versão.

## Operadores rest e spread

É um operador só que tem como objetivo espalhar e juntar valores.

``` javascript
function total (...precos) {
    let total = 0
    precos.forEach(p => total += p)
    return total
}

console.log(total(23.44, 22, 3.45, 5.6).toFixed(2))
```
## Conjuntos com Set

É uma estrutura de dados assim como array e maps.
E como conjunto não aceita repetição e não indexaveis (ex: teste[i])

```javascript
//declarando conjunto
let cursos = new Set()code 

//Adicionando valores
cursos.add('Programação para leigos')
cursos.add('Curso JS').add('Curso Python')

console.log(cursos)
```
## Iterando com for of

É um loop para facilitar o trabalho com coleções.

```javascript
let nome = 'Pri Campos'

for (let letra of nome) {
    console.log(nome)
}
```

## Object short sintax

Dado que o objeto se tiver um atributo mesmo nome da variável, pode remover os dois pontos e nome da variável.

Antes
```javascript
const nome = 'Progração em JavaScript''
const preco = 'R$ 27,99''

const curso = {
    nome: nome,
    preco: preco,
    instrutor: 'Alberto'
}

console.log(curso)
```
Depois
```javascript
const nome = 'Progração em JavaScript''
const preco = 'R$ 27,99''

const curso = {
    nome,
    preco,
    instrutor: 'Alberto'
}

console.log(curso)
```
## Async e Await

Transformar uma função em assíncrona e que aguarda uma determinada tarefa.

## Babel

Dado os diverentes navegadores e versões, não é 100% de certeza que um script js vai funcionar em todos.

O Babel vai reescrever o código criado para ser interpretado por qualquer navegador.

Logo o Babel é uma dependência de desenvolvimento para @babel/cli, outro pacote interessante @babel/present-env é responsável executa o código em diferente do ambiente (ex. dispositivo móvel, web ...), mais @babel/core e @babel-loader.

Como utilizar o Babel?
- Crie um arquivo de configuração no projeto.

## Webpack Server
Um servidor de desenvolvimento, permite modulatizar script...

Para usar é preciso:
 - instalar npm i webpack webpack-cli
 - configurar webpack (webpack.config.js)

## Import e Export

 - export function soma -> import { soma } from './x'  -> soma (a, b)
 - export default function soma -> import soma from './x'-> soma (a, b)
 - export function soma -> import { soma as somaMais } from './x'  -> somaMais (a, b)
 - import * as helpers from './helpers -> helpers.soma( a, b)

## Organizando o código e Webpack Dev Server
 - criar o repositório `public` com arquivos não js. Ex: .html
 - criar o repositório `src` com arquivos js. Ex: main.js
  