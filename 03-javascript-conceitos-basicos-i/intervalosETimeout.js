//Intervalo
function mostrarMsg (){
    alert("Teste: mostrar essa mensagem a cada 5 segundos")
}

function controleTempoInterval (){
    setInterval(mostrarMsg, 5000)
}

//Timeout (tempo esgotado)
function controleTempoTimeout (){
    setTimeout(mostrarMsg, 5000)
}