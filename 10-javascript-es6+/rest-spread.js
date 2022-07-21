function total (...precos) {
    let total = 0
    precos.forEach(p => total += p)
    return total
}

console.log(total(23.44, 22, 3.45, 5.6).toFixed(2))

let frutas = ['maça', 'manga', 'banana']
let graos = ['lentilha', 'arroz', 'grão de bico']
let compras = [...frutas, ...graos]

console.log(compras)