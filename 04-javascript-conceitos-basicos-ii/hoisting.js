console.log(nome)//aqui ocorre hoisting, retorna undefined. Ele não conhece a variável e declara.

var nome = 'Geek'
console.log(nome)

//Sendo que isso só ocorre com o uso de var.
//Caso fosse let ou const ia validar que a variável chamada não foi declarada