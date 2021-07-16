distopias = [
    "Laranja Mecânica",
    "Os testamentos",
    "O conto de Aia",
    "1984"
]

function imprimir(curso, indice, array) {
    alert(document.getElementById('lista').innerHTML = (indice + ' - ' + curso + ' : ' + array))
}

function imprimirDistopias() {
    distopias.forEach(imprimir)
}

//ou utilizando uma função anônima (lambda/callback) e template string
function imprimirDistopiasDois() {
    distopias.forEach(function(curso, indice) {
        alert(document.getElementById('lista-dois').innerHTML = `${indice} - ${curso}`)
    })
}