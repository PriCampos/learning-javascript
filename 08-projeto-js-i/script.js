const input = document.getElementById('tarefa')
const btn = document.getElementById('btn')
const list = document.getElementById('lista')
const card = document.querySelector('.card')

// o ou array vazio é para garantir que não tenha erro ao deletar o storage 
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function rendererizarTarefas() {
    list.innerHTML = ''

    for(tarefa of tarefas) {
        let itemList = document.createElement('li')
        itemList.setAttribute('class', 'list-group-item list-group-item-action')

        itemList.onclick = function() {
            removeTarefa(this)
        }

        let itemText = document.createTextNode(tarefa)
        itemList.appendChild(itemText)
        list.appendChild(itemList)
    }
}

function removeSpan() {
    let span = document.querySelectorAll('span')
    for (let i = 0; i < span.length; i++) {
        card.removeChild(span[i])
    } 
}

btn.onclick = function() {
    let novaTarefa = input.value
    if(novaTarefa != '' && novaTarefa != ' ' && novaTarefa != undefined) {
        tarefas.push(novaTarefa)
        input.value = ''
        rendererizarTarefas()
        removeSpan()
        salvarDadosStorage()
    } else {
        removeSpan()
        let span = document.createElement('span')
        span.setAttribute('class', 'alert alert-warning')
        let alert = document.createTextNode('Informe a tarefa!')
        span.appendChild(alert)
        card.appendChild(span)
    }
}

function removeTarefa(task) {
    tarefas.splice(tarefas.indexOf(task.textContent), 1)
    rendererizarTarefas()
    salvarDadosStorage()
}

function salvarDadosStorage() {
    //nome da tabela e objeto em sting, pois o storage não permite array
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

rendererizarTarefas()
