//declarando conjunto
let cursos = new Set()

//Adicionando valores
cursos.add('Programação para leigos')
cursos.add('Curso JS').add('Curso Python')

console.log(cursos)
console.log(cursos.size)
console.log(cursos.has('Curso Python'))
cursos.delete('Programação para leigos')
console.log(cursos)

let frutas = ['Manga', 'Uva', 'Uva']
console.log(frutas)
let frutasUnicas = new Set(frutas)
console.log(frutasUnicas)

for (let fruta of frutas) {
    console.log(fruta)
}