
//JS não há encapsulamento, possui açucar sintático para que os elementos não sejam manipulados fora da classe
//Para manipulação interna é utilizado o get e set

class Pessoa {
    constructor(nome, apelido) {
        this._nome = nome,
        this.apelido = apelido,
        this._empresa = 'Empresa Teste Ltda'
    }

    get empresa() {
        return this._empresa
    }

    set nome(nome) {
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    //metodo dentro da classe não utiliza a palavra function.
    falar(msg) {
        console.log(`${this.nome} fala que ${msg}`)
    }

    apresentacao() {
        console.log(`${this.nome} gosta de ser chamado de ${this.apelido}`)
    }

    trabalho() {
        console.log(`${this.nome} trabalha na empresa ${this.empresa}`)
    }
}