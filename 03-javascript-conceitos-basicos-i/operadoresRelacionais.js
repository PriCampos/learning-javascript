/*
    Operadores mais comuns:
        Igual a ==
        Diferente de !=
        Maior que >
        Menor que <
        Maior ou igual a >=
        Menor ou igual a <=
        Igual e do mesmo tipo que ===
        Diferente e de outro tipo que !==
        Ternário ? (condição ? valor se for verdadeiro : valor se for falso)
*/

var nota
var alunoAprovado
var alunoReprovado

function processaNota (){
    nota = parseInt(document.getElementById("nota-aluno").value)

    nota >= 70 ? 
    alert(document.getElementById("status-aprovacao").innerHTML = "Parabéns! Você passou! o/"): 
    alert(document.getElementById("status-aprovacao").innerHTML = "Você pegou recuperação. Vamos estudar mais e superar mais esse desafio!")
}
