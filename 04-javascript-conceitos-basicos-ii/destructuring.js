// Extrai dados de objeto para uma variável

//Destructuring com array
const numeros = [1, 2, 3, 4, 5]

const[num1, num2, num3, num4, num5] = numeros
console.log(num1)
console.log(typeof(num1))
console.log(typeof(numeros))

//Descartando valores
const[numero1, , , ,numero2] = numeros
console.log(numero2)

//Definindo valores default caso não tenha valor original
const[opcao1, , , , , opcao2 = 44, opcao3 = 55] = numeros
console.log(opcao2)