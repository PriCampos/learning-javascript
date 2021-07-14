/*
    Operadores Aritméticos:
        Adição +
        Subtração -
        Multiplicação *
        Exponenciação ** ou Math.pow(x,y)
        Divisão /
        Módulo %
        Incremento -- //operação uniária
        Decremento ++

    Operadores de Atribuição
        x = y
        x += y ou x = x + y
        x -= y ou x = x - y
        x *= y ou x = x * y
        x /= y ou x = x / y
        x %= y ou x = x % y
        x **= y ou x = x ** y

    Precendência
        Agrupamento de expressão: (x + y)
        Membro: person.name
        Membro: person["Priscila"]
        Chamada de função: myfunction()
        Criar: new date()
        Incrementar e postar i++
        Decrementar e postar i--
        Incremento do prefixo ++i
        Decremento do prefixo --i
*/

var valor1 = 0
var valor2 = 0
var tipoCalculo = ''
var tipoCalculoSelecionado = ''
var resultado = ''

function obtemDados(){
    valor1 = parseInt(document.getElementById('valor1').value)
    valor2 = parseInt(document.getElementById('valor2').value)
    tipoCalculo = document.getElementById('calc')
    tipoCalculoSelecionado = tipoCalculo.options[tipoCalculo.selectedIndex].value
}

function exibeResultadoCalculo (){
    alert('O resultado do cálculo é: ' + resultado)
}

function calculaSoma() {
    resultado = valor1 + valor2
    exibeResultadoCalculo()
}

function calculaSubtracao() {
    resultado = valor1 - valor2
    exibeResultadoCalculo()
}

function calculaMultiplicacao() {
    resultado = valor1 * valor2
    exibeResultadoCalculo()
}

function calculaDivisao() {
    resultado = valor1 / valor2
    exibeResultadoCalculo()
}

function calculaRestoDivisao() {
    resultado = valor1 % valor2
    exibeResultadoCalculo()
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