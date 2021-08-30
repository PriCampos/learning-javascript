// JSON - JavaScript Object Notation

const curso = {
    nome: 'Programação em JS',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

console.log(curso)
const json = JSON.stringify(curso)
console.log(json)
console.log(typeof(json))
const obj = JSON.parse(json)
console.log(obj)
console.log(typeof(obj))