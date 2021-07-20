function calcular_idade(ano_nascimento){
    let ano_atual = (new Date()).getFullYear()
    return ano_atual - ano_nascimento
}

console.log(calcular_idade(1984))