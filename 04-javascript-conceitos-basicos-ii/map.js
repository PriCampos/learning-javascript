//dif forEach != map, o forEach passa pelo array, o map cria outro.

var impar = [1, 3, 5, 7, 9, 11]

var dobro = impar.map(function(valor){
    return valor * 2
})

function imprimirArrayImparMultiplicadopor2() {
    alert(dobro)
}

//ou
function soma_2(valor) {
    return valor + 2
}

function multiplica_3(valor) {
    return valor * 3
}

calculo = impar.map(soma_2).map(multiplica_3)

function retornaArrayCalculo() {
    alert(calculo)
}