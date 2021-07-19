//try: tente
//catch: se não fassa isso

try{
    console.log(nome)
} catch(error) {
    console.log('Variável não declarada')
    console.log(error.message)
    console.log(error.name) //o prefixo "error" poderia ser qualquer letra ou palavra, mas foi utilizado em referência error
}finally{
    console.log('finally sempre é executado.')
}