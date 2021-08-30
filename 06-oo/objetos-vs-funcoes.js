//Mesmo que a gente cria classe, em JS tudo é uma função

//criando objeto por meio de uma factoring function (função fábrica)
const pessoa1 = (nome, sobrenome) => {
    return {
        andar:() => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('João', 'Alberto')
console.log(p1)
p1.andar()

//criar objeto por meio de uma função construtora
function pessoa2(nome, sobrenome) {
    this._nome = nome
    this._sobrenome = sobrenome

    this.correr = function() {
        console.log(`${this._nome} ${this._sobrenome} está correndo...`)
    }
}

const p2 = new pessoa2('Pitty', 'Silva')
console.log(p2)
p2.correr()

//Criar objeto a partir de uma classe
class Pessoa3 {
    constructor(nome, sobrenome) {
        this._nome = nome,
        this._sobrenome = sobrenome
    }

    pedalar() {
        console.log(`${this._nome} ${this._sobrenome} está pedalando...`)
    }
}

const p3 = new Pessoa3('Priscila', 'de Oliveira Campos')
console.log(p3)
p3.pedalar()