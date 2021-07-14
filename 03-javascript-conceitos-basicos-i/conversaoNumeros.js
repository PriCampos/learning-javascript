var convertStringNum = Number("3.4")
var convertFlutuante = parseFloat(1)
var convertNumeroInteiro = parseInt(3)
var convertString = String(1)
var convertStringOutraForma = (1).toString()
var convertDiaData = (new Date()).getDate()

//Convertendo para números
document.getElementById("converte-string-num").innerHTML = convertStringNum
document.getElementById("converte-float").innerHTML = convertFlutuante
document.getElementById("converte-inteiro").innerHTML = convertNumeroInteiro

//Convertendo para string
document.getElementById("converte-string").innerHTML = convertString

/* 
    Convertendo Datas:
        getDate()	Get the day as a number (1-31)
        getDay()	Get the weekday a number (0-6)
        getFullYear()	Get the four digit year (yyyy)
        getHours()	Get the hour (0-23)
        getMilliseconds()	Get the milliseconds (0-999)
        getMinutes()	Get the minutes (0-59)
        getMonth()	Get the month (0-11)
        getSeconds()	Get the seconds (0-59)
        getTime()	Get the time (milliseconds since January 1, 1970)
*/

document.getElementById("captura-data").innerHTML = convertDiaData

/*
    Mais métodos:
        toExponential()	Retorna uma string, com um número arredondado e escrito usando notação exponencial.
        toFixed()	Retorna uma string, com um número arredondado e escrito com um número especificado de decimais.
        toPrecision()	Retorna uma string, com um número escrito com um comprimento especificado
        Number() ou getTime() Converte data em número
*/