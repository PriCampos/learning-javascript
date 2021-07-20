numeros = [1, 2, 3, 4]
console.log(numeros)

let resposta = numeros.map(function(valor){
    return valor * 2
})

console.log(resposta)


let calculo = valor => {return valor * 2}
console.log(numeros.map(calculo))