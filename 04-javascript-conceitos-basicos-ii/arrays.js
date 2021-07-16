/* 
    Detalhes sobre array:
        Possuem tamanho infinito (dependendo da mémora*);
        Aceitam qualquer tipo de dados;
        Pode conter índices não definidos;
        Array pode conter array;
        O índice do array é sempre seu tamanho - 1.
*/

//Formas de criar array

//Forma 1
var alunos = new Array('Carla', 'Bianca', 'Bernardo', 'Joana')
//Forma 2 (recomendada)
var notas = [60, 60, 90, 58]
var bairros = ['a', 'c', 'd', 'b']
var itemEleminiadoArrayNotas
var item 
var frutas
var novoArrayOriundoIndice
var par 
var impar
var arrayBidirecional 

//Listar valores
document.getElementById('nomes-alunos').innerHTML = alunos
document.getElementById('notas-alunos').innerHTML = notas

//Buscar valor por índice 
document.getElementById('nome-aluno[0]').innerHTML = alunos[0]

//Mudar valor por índice
alunos[2] = 'João Alberto'
document.getElementById('lista-nome-alterada').innerHTML = alunos

//Buscar um valor com índice que não existe
document.getElementById('nome-aluno-inexistente').innerHTML = alunos[10]

//Adicionando elementos no final do array
alunos.push('Andressa')
document.getElementById('lista-com-novo-aluno').innerHTML = alunos

//Tamanho do array
document.getElementById('tamanho-da-lista-alunos').innerHTML = alunos.length

//Ordenar os dados de um array (caso fosse ordenar número, ele ia trarar número como string)
document.getElementById('nome-bairros-ordenados').innerHTML = bairros.sort()

//Reverter a ordem
bairros.reverse()

//Ordenar valor inteiros ou flutuantes (função lambda)
document.getElementById('ordernar-notas').innerHTML = notas.sort(function(a, b){ return a - b})

//Deletar valor de um índice (o delete exclui o valor e o splice reduz o tamanho do array)
delete notas[3] 
notas.splice(1, 1)
document.getElementById('excluir-ultima-nota').innerHTML = notas

//Adicionar a partir de determinado índice com splice
notas.splice(2, 0, 8, 9, 90)
document.getElementById('lista-nova-splice').innerHTML = notas

//Removendo caracter da última posição e retorna
//Obs: Quando o último elemento do array é uma vírgula (oriunda delete) ele passa remover o último caractere
item = [22, 44,88,99]
itemEleminiadoArrayNotas = item.pop()
document.getElementById('lista-notas-sem-ultima-nota').innerHTML = item
document.getElementById('item-eliminado-array').innerHTML = itemEleminiadoArrayNotas

//Remover primeiro elemento do array
frutas = ['morango', 'maça', 'pera', 'banana']
frutas.shift()
document.getElementById('lista-notas-sem-primeiro-elemento').innerHTML = frutas

//Inserir primeiro elemento do array
frutas.unshift('morango')
document.getElementById('lista-notas-com-primeiro-elemento').innerHTML = frutas

//Retorna um novo array a partir do índice informada
novoArrayOriundoIndice = frutas.slice(3)
document.getElementById('novo-array-frutas').innerHTML = novoArrayOriundoIndice

//concatenar arrays
par = [2, 4, 6, 8]
impar = [1, 3, 5, 7]
document.getElementById('array-concatenado').innerHTML = par.concat(impar)

//array bidirecional
arrayBidirecional = [[1, 2, 3, 4], [1, 2, 3, 4]]
document.getElementById('array-bidirecional').innerHTML = arrayBidirecional

//Verificar se uma variável é ou não um array
Array.isArray(arrayBidirecional) //true
arrayBidirecional instanceof Array //true

//Usar o separador do array
document.getElementById('array-seprado-*').innerHTML = arrayBidirecional[0].join(" * ")

//converte array em uma string 
arrayBidirecional.toString()