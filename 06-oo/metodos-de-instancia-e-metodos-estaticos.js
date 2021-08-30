//métodos de instancias: 
class Carro {
    constructor(modelo) {
        this._marca = 'Honda',
        this._modelo = modelo
    }

    get modelo() {
        return this._modelo
    }

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    //métodos de instancia
    imprime_dados() {
        console.log(`Marca ${this.marca} e o modelo ${this.modelo}`)
    }

    // método estático
    static retorna_marca() {
        return 'Honda'
    }
}

//acessar métodos de instancia
const carro_fiat = new Carro('Fiat')
carro_fiat.imprime_dados()

//acessar métodos estáticos não é preciso instanciar.
console.log(Carro.retorna_marca())
console.log(Math.random())