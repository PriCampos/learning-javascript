var numero = 1
var listaInicial = []

function imprimirValoresComFor (){
    for (numero = 1; numero < 11; numero++) {
        listaInicial.push(numero)
    }
    alert('Números gerados pela estrutura de repetição for: ' + listaInicial)
}

function imprimirValorescomWhile (){
    while (numero < 11) {
        listaInicial.push(numero)
        numero++
    }
    alert('Números gerados pela estrutura de repetição while: ' + listaInicial)
}

function imprimirValorescomDoWhile () {
    do {
        listaInicial.push(numero)
        numero++
    } while(numero < 11)
    alert('Números gerados pela estrutura de repetição do while: ' + listaInicial)
}