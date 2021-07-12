var valor1 = 0
var valor2 = 0
var tipoCalculo = ''
var tipoCalculoSelecionado = ''

function obtemDados(){
    valor1 = parseInt(document.getElementById('valor1').value)
    valor2 = parseInt(document.getElementById('valor2').value)
    tipoCalculo = document.getElementById('calc')
    tipoCalculoSelecionado = tipoCalculo.options[tipoCalculo.selectedIndex].value
}

function calculaSoma() {
    resultado = valor1 + valor2
    console.log(resultado)
    alert('Resultado é: ' + resultado)
}

function calculaSubtracao() {
    resultado = valor1 - valor2
    alert('Resultado é: ' + resultado)
}

function calculaMultiplicacao() {
    resultado = valor1 * valor2
    alert('Resultado é: ' + resultado)
}

function calculaDivisao() {
    resultado = valor1 / valor2
    alert('Resultado é: ' + resultado)
}

function calculaRestoDivisao() {
    resultado = valor1 % valor2
    alert('Resultado é: ' + resultado)
}

function processaCalculo() {
    obtemDados()
    switch (tipoCalculoSelecionado){
        case 'soma':
            calculaSoma()
            break
        case 'subtracao':
            calculaSubtracao()
            break
        case 'multiplicao':
            calculaMultiplicacao()
            break
        case 'divisao':
            calculaDivisao() 
            break
        case 'modulo':
            calculaRestoDivisao()
            break
        default:
            alert('Nenhum tipo de cáculo localizado!')
            break
    }
}

//Incrementação e Decrementação
var number = 50

console.log(number++) //imprime e depois incrementa
console.log(number--) //imprime e depois decrementa
console.log(++number) //incrementa e depois imprime
console.log(--number) //incrementa e depois imprime