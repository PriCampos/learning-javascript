// é prevciso classe para funcionários e clientes e ambos possuem atributos em comum

//super classe
class Pessoas {
    constructor(nome, sobrenome){
        this._nome = nome,
        this._sobrenome = sobrenome
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this._nome + ' ' + this._sobrenome
    }

    set nomeCompleto(nomeCompleto) {
        //transforma string em um array onde cada elemento do array será as partes da string separadas por espaço
        nomeCompleto = nomeCompleto.split(' ')

        // remove e retorna o elemento da posição 0 do array
        this._nome = nomeCompleto.shift()
        
        //junta os elementos do array em uma srting separando cada elemento por espaço.
        this._sobrenome = nomeCompleto.join(' ')
    }

    imprimeDados() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

// sub-classe ou classe filha
class Funcionarios extends Pessoas {
    constructor(nome, sobrenome, funcao, salario) {
        super(nome, sobrenome)
        this._funcao = funcao
        this._salario = salario
    }

    get funcao() {
        return this._funcao
    }

    set funcao(funcao) {
        this._funcao = funcao
    }

    get salario() {
        return this._salario
    }

    set salario(salario) {
        this._salario = salario
    }
}

class Clientes extends Pessoas {
    constructor(nome, sobrenome, renda) {
        super(nome, sobrenome)
        this._renda = renda
    }

    get renda() {
        return this._renda
    }

    set renda(renda) {
        this._renda = renda
    }

    //sobrescrita de método
    imprimeDados() {
        super.imprimeDados()

        console.log(`tem uma renda de : ${this.renda}`)
    }
}

const cliente_1 = new Clientes('Carlos', 'Alberto', 12500)
console.log(cliente_1)
console.log(cliente_1.nomeCompleto)

console.log('Altere nome e imprime objeto cliente com nome modificado')
cliente_1.nomeCompleto = 'Priscila de Oliveira Campos'
console.log(cliente_1)
console.log('')
console.log('Imprime Nome Completo por meio de Imprimir Dados:')
cliente_1.imprimeDados()
console.log('')
console.log('Sobrescrita de Metodos:')
cliente_1.imprimeDados()