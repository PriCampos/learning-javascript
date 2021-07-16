//Outro facilitador para coleção de dados
var cores = ['azul', 'verde', 'terracota', 'vermelho']
var filmes = [
    {nome: "Lagora Azul", netflix: false},
    {nome: "Sex/Life", netflix: true},
    {nome: "Virger River", netflix: true},
    {nome: "The Handmaid`s Tale", netflix: false}
]

function filtrar_cores_frias(cor) {
    return (cor == 'azul') || (cor == 'verde') || (cor == 'violeta')
}

function imprimeCoresFrias() {
    alert(cores.filter(filtrar_cores_frias))
}

function imprime_filmes_netflix(stream) {
    return stream.netflix == true
}

function imprimeFilmesNetflix() {
    console.log(filmes.filter(imprime_filmes_netflix))
}