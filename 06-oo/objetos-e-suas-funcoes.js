const curso = {
    nome: "Curso de Programação em JavaScript",
    duracao: 25,
    preco: 29.90
}

//Imprimir objeto
console.log(curso)

//Imprimir tipo 
console.log(typeof(curso))

//Acessar as chaves de um objeto
console.log(Object.keys(curso))

//Acessar valores de um objeto
console.log(Object.values(curso))

//Imprimir array objeto
console.log(Object.entries(curso))

//Imprimir array de objeto a partir de um dado filtro
Object.entries(curso).forEach(par => {
    console.log(`${par[0]}`)
})

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}`)
})

//Mudar valor do atributo do objeto
curso.nome = 'Criação de API'

console.log(curso)

//Criar um atributo que não pode ser modificado (read only)
Object.defineProperty(curso, `publicacao`, {
    enumerable: true, //vai ser exibido como chave do objeto ou ocultado
    writable: false, //pode ou não alterar valor.
    value: '23/08/2021'
})

console.log(curso)

//Congelar objeto para evitar modificações
Object.freeze(curso)

curso.nome = 'tentar mudar o valor congelado'
console.log(curso)

//criar um array de objetos
const empresas = [
    { nome: 'empresa a', ie: 1},
    { nome: 'empresa b', ie: 2},
    { nome: 'empresa c', ie: 3}
]

console.table(empresas)