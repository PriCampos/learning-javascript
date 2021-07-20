function laptop(m, f, mod = 'MackBook Pro'){
    //atributos privados
    let so = 'big sur'
    let version = '11.4'
    let marca = m
    let fabricante = f

    // atributo público
    this.modelo = mod

    //método privado
    imprimir_dados = function(){
        return console.log(`Marca: ${marca}, SO: ${so}, Fabricante: ${fabricante}`)
    }

    // método público
    this.imprimirVersao = () => console.log(`Versão: ${version}`)

    this.dados = function(){
        return imprimir_dados()
    }
}

const computador = new laptop('Apple', 'Apple')
console.log(computador) //somente os dados públicos são impressos
console.log(computador.imprimirVersao())
console.log(computador.dados())