// JS possui tipagem dinâmica
// A mesma variável pode receber != tipos de dados
var numero = '24'
numero = 24

//Principais Tipos de Dados
var nome = 'Priscila' //string
var idade = 15 //int
var altura = 1.73 //float
var ativo = true //booleano
var hobby = ['desenhar', 'séries', 'cozinhar', 'crochê'] //vertor(array)
var dadosProfissionais = {
    funcao: "Quality Analyst Consuntant",
    tempoExperiencia: '+12',
    automacaoWeb: true,
    automacaoAPI: true
} //objeto

document.getElementById('tipoString').innerText = nome
document.getElementById('tipoInt').innerText = idade
document.getElementById('tipoFloat').innerText = altura
document.getElementById('tipoBooleano').innerText = ativo
document.getElementById('tipoArray').innerText = hobby
document.getElementById('tipoArray[0]').innerText = hobby[0]
document.getElementById('tipoObject.funcao').innerText = dadosProfissionais.funcao
