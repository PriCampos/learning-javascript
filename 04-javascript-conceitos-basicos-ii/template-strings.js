let date = new Date()
let mes = date.getMonth()
let ano = date.getFullYear()

console.log('Estamos no mês', mes, 'do ano de', ano)

/* 
    Template Strings:
        Não é uso de aspas simples e sim cráse
*/
console.log(`Estamos no mês ${mes} do ano de ${ano}`)