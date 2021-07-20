function somar() {
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i] //Caso não seja passado um argumento, o JS gera um valor padrão que é array arguments
    }
    return soma
}

function subtrair(j) {
    let subtrair = isNaN(j) ? 0 : j
    for(let i in arguments){
        subtrair-= arguments[i]
    }
    return subtrair
}

function multiplicar(num1 = 4, num2 = 5){ //valor padrão
    //poderia add validão de number if (num1.isSafeInteger && ...))
    return num1 * num2
}

console.log(somar(3, 6, 8))
console.log(subtrair(2, 3, 6))
console.log(multiplicar())
console.log(multiplicar(5, 6))