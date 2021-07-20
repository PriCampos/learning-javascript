// Função de fábrica (function factory) e ela devolve um objeto js

function fabricarCurso(n, p){
    const desconto = 0.9
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarCurso('Inglês', 300))

var cursos = []

for(let i = 0; i < 5; i++) {
    cursos.push(fabricarCurso(`Curso ${i + 1}`, `${19.99 + i * 3}`))
}

console.log(cursos)