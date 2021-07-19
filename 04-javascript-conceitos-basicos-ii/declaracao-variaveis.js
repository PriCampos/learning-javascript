/*
    Dicas para criar variável:
         - vai mudar? sim, use let
         - vai mudar? não, use const
*/

// var
var varInit = 40
console.log(varInit)

varInit = varInit + 5
console.log(varInit)

for (var i = 0; i < 5; i++) {
    var valor = i * 2
    console.log(valor)
}

console.log(valor)
console.log('---------------')

//let (forma mais atual de declarar variáveis)
var letInit = 40
console.log(letInit)

letInit = letInit + 5
console.log(letInit)

for (let i = 0; i < 5; i++) {
    let valorLet = i * 2
    console.log(valorLet)
}

// console.log(valorLet) erro, o let é local
const imutavel = 4
console.log(imutavel)

// imutavel = 7
// console.log(imutavel) erro, a constante tem um único valor.

//mutação de constante
const nome = {nome: 'curso de javascript.'}
console.log(nome)

nome.nome = 'Curso em python'
console.log(nome)