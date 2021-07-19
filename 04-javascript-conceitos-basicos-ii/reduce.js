var precos = [4.66, 9.88, 5.33, 8.99, 8, 45, 8.99]
var totalPrecos = 0

// com reduce (vai reduzir a um valor)
var soma = function(anterior, atual) {
    return anterior + atual
}

var calcularTotalPrecos = function() {
    var totalPrecos = precos.reduce(soma)
    alert(document.getElementById('valor-total').innerHTML = 'Valor total é: ' + totalPrecos)
}