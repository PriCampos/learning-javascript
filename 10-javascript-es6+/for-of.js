let nome = 'Pri Campos'

for (let letra of nome) {
    console.log(nome)
}

let frutas = ['banana', 'maça', 'abacaxi']

for (let arrayIndex in frutas) {
    console.log(frutas)
    console.log(frutas[arrayIndex])
}

let cursos  = new Map ([
    [1, 'curso a'],
    [2, 'curso b'],
    [3, 'curso c'],
    [4, 'curso d']
])

for (let curso of cursos) {
    console.log(curso)
}

for (let chave of cursos.keys()) {
    console.log(chave)
}

for (let valor of cursos.values()) {
    console.log(valor)
}

for (let [valor, chave] of cursos.entries()) {
    console.log(valor, chave)
}