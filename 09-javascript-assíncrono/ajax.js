//Buscar usuários do Github - https://api.github.com/users
let btn  = document.querySelector('#btn')
let input  = document.querySelector('input[name=github-user]')
let div = document.querySelector('#app')

btn.onclick = function () {
    //limpar o conteúdo da div para evitar 
    div.innerHTML = ''

    // Instanciar um objeto ajax
    let ajax = new XMLHttpRequest()

    //Abrir um aconexão (GET, POST, PUT ...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`)

    //enviar o corpo da solicitação vazio
    ajax.send(null)

    ajax.onreadystatechange = function () {
        // criar um elemento span
        let spanNome = document.createElement('span')

        // criar uma variável para receber o texto nome
        let txtNome = ''

        /*
            ESTÁGIOS DE PRONTO
            readyState = 0 -> antes da conexão ser aberta
            readyState = 1 -> após abrir a conexão
            readyState = 2 -> os headers foram recebidos
            readyState = 3 -> quando estiver carregando o corpo da requisição
            readyState = 4 -> o conteúdo está pronto uso
        */

        if ( ajax.readyState === 4 ) {
            if ( ajax.status === 200 ) {
                // transformar os dados json para array
                usuario = JSON.parse(ajax.responseText)

                //Se o usuário possui nome
                if ( usuario['name'] !== null ) {
                    txtNome = document.createTextNode(usuario['name'])
                    let img = document.createElement('img')
                    img.setAttribute('src', usuario['avatar_url'])
                    img.setAttribute('alt', usuario['name'])
                    img.setAttribute('width', '30%')
                    img.setAttribute('height', '30%')

                    div.appendChild(img)
                } 
                spanNome.appendChild(txtNome)
                div.appendChild(spanNome)

                //limpar input
                input.value = ''
            } else if (ajax.status === 404 ) {
                txtNome = document.createTextNode(`Usuária ${input.value} não encontrada`)
                spanNome.appendChild(txtNome)
                div.appendChild(spanNome)
                input.value = ''
            }
        } else {
            console.log('falha no carregamento da API')
            resposta = JSON.parse(ajax.responseText)

            if ( resposta['message'].includes('API rate limit exceeded') === true ) {
                let txtResposta = document.createTextNode('Limite de taxa de API excedido!')
                spanNome.appendChild(txtResposta)
                div.appendChild(spanNome)
                input.value = ''
            }
        }
    }
}