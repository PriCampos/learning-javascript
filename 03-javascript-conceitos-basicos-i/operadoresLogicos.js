var statusChuva = true
var statusRelampejar = false

/*
    AND &&
    OR ||
    NOT !
*/

document.getElementById("msgContexto").innerHTML = 'Quando eu fico em casa?'
document.getElementById('statusChuva').innerHTML = 'está chovendo'
document.getElementById('statusRelampejar').innerText = 'não está relampejando'

//AND
function condicaoSairDeCasaAnd (){
    if (statusChuva && statusRelampejar) {
        alert('Em casa!')
    } else {
        alert('Vou sair!')
    }
}

//OR
function condicaoSairDeCasaOR (){
    if (statusChuva || statusRelampejar) {
        alert('Em casa!')
    } else {
        alert('Vou sair!')
    }
}

//NOT
function condicaoSairDeCasaNOT (){
    if (statusChuva && !statusRelampejar) {
        alert('Em casa!')
    } else {
        alert('Vou sair!')
    }
}
