class Pessoa {
    constructor(nome, ano) {
        this._nome = nome
        this.ano = ano
    }

    set nome(nome) {
        this._nome = nome
    }

    get nome() {
        return this._nome
    }

    imprimir() {
        console.log(`${this.nome} nasceu em ${this.ano}`)
    }
}

//Instanciamento de Objetos: Forma 1
//Objecto em JS nada mais é que uma coleção de pares chave(nome atributo) e valor (valor atribuído)
const curso = new Object()
curso.nome = 'Javascritp do básico ao avançado'
curso.ano = '1990'

console.log(curso)

//Acrescentar atributos dinamicamente
curso['qtde_alunos'] = 9000
console.log(curso)

//deletar atributo dinamicamente
delete curso['qtde_alunos']
console.log(curso)

//Instanciando de Objetos: Forma 2 de forma literal
const cursoNovo = {
    nome: 'Python',
    preco: 999.90,
    qtde_alunos: 80,
    ano: 2018,
    professora: { //atributo complexo, um objeto com outro objeto
        nome: 'Alva Lima',
        experienciaAnos: 20.7
    },
    turnos: [
        {opcao: 'manhã'},
        {opcao: 'tarde'}
    ]
}

console.log(cursoNovo)
console.log(cursoNovo.turnos)

//Atribuir novo valor
cursoNovo.nome = 'Java'
console.log(cursoNovo)

//Instanciando de Objetos: Forma 3 de forma literal
const pessoa = {}
pessoa.nome = 'Clara Maria'
console.log(pessoa)

//Instanciando de Objetos: Forma 4 de forma literal (função construtora)
function lampada(cor) {
    this.cor = cor
}

const lampadaUm = new lampada('Branca')
console.log(lampadaUm)

//Instanciando de Objetos a partir da classe: Forma 5
const p1 = new Pessoa( 'Joana Dark', 1984)
console.log(p1)
console.log(p1.nome) //acessando função get
console.log(p1.imprimir())
