//Higher-Order Functions

function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function calcular(num1, num2, tipoCaulo){
    return tipoCaulo(num1, num2)
}

console.log(somar(1, 3))

const executar = somar //funcionam como cidadões de primeiro classe  e podem ser utilizadas como sistema de dados
console.log(executar(4, 6))

console.log(calcular(3, 5, subtrair)) //Só é utilizado o parenteses da função para executá-la.

//Funções simples: Não recebem argumentos e não retornam nada
function mensagem() {
    console.log('Imprimir mensagem.')
}

mensagem()