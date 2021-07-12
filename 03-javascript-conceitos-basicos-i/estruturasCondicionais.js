var idadeInformada = ''
var sexoInformado = ''
var sexoSelecionado = ''

function ageProcessing(){
    idadeInformada = parseInt(document.getElementById('idade').value)
    console.log('Idade informada: ' + idadeInformada)

    if (idadeInformada < 18){
        return alert(document.getElementById('idade-processada').innerHTML = 'Menor de 18!')
    } if (idadeInformada === 18) {
        alert(document.getElementById('idade-processada').innerHTML = 'Você tem 18 anos!')
    } if (idadeInformada > 18) {
        alert(document.getElementById('idade-processada').innerHTML = 'Você tem mais de 18 anos!')
    } else {
        alert(document.getElementById('idade-processada').innerHTML = 'Você não informou uma idade válida!')
    }
}

function pronounProcessing(){
    select = document.getElementById('sexo')
    value = select.options[select.selectedIndex].value
    
    console.log('Valor capturado: ' + value)

    switch(value){
        case 'f':
            alert('Pronomes: Ela/She')
            break
        case 'm':
            alert('Pronomes: Ele/he')
            break
        default:
            alert('Pronomes: Ela/She/They')
            break
    }
}