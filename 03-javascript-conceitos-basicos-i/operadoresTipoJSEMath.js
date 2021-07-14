/*
    Operadores Tipo JS
        typeof:retorna com o tipo de variável 
        instanceof: retorna  valor booleano a partir de uma afirmação entre dados/funções...
            O instanceof é útil para saber se uma função herda/instancia outra. Exemplo funcaoA instanceof funcaoB
*/

var typeofNumber = typeof(42)
var typeofString  = typeof("Teste")
var typeofArray = typeof([1, 2, 3])
var instanceofArray = [1,2,3] instanceof Array

document.getElementById("typeof-number").innerHTML = typeofNumber
document.getElementById("typeof-string").innerHTML = typeofString
document.getElementById("typeof-array").innerHTML = typeofArray
document.getElementById("instanceof-array").innerHTML = instanceofArray

/* 
    Math (Acessar propriedades matemáticas)
        Retorna número Euler: Math.E
        Retorna número PI: Math.PI
        Retorna raiz quadrada de 2: Math.SQRT2 
        Retorna raiz quadrada de 1/2: Math.SQRT1_2  
        Retorna logaritmo de 2: Math.LN2
        Retorna logaritmo de 10: Math.LN10     
        Retorna logaritmo de 2 de E: Math.LOG2E 
        Retorna logaritmo de 10 de E: Math.LOG10E
        Arrendomanto: Math.round
        Arrendodamento para cima para o seu inteiro mais próximo: Math.ceil(x.x)
        Arredondamento para baixo para o seu inteiro mais próximo: Math.floor(x.x)
        Truncar: Math.trunc(x.y)
        Retorna se o valor é negativo, nulo ou positivo: Math.sign(x)
        Retorna o valor absoluto: Math.abs(x)
        Retorna o seno: Math.sin(x)
        Retorna o cosseno: Math.cos(x)
        Retornar o menor ou maior valor: Math.min() ou Math.max()
        Retorna valor randomico: Math.random()
        Retorna o logaritmo: Math.log(x)
*/

document.getElementById("valor-de-pi").innerHTML = Math.PI