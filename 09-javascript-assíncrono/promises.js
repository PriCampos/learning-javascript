let button = document.querySelector('#btn-2')
let divResposta  = document.querySelector('#app-2')

let getPromise = function () {
    return new Promise (function ( resolve, reject ) {
        let github_user = document.querySelector('input[name=github-user-2]').value
        console.log(github_user)
        let ajax = new XMLHttpRequest()
        ajax.open('GET', `https://api.github.com/users/${github_user}`)
        ajax.send(null)

        ajax.onreadystatechange = function () {
            if ( ajax.readyState === 4 ) {
                if ( ajax.status === 200 ) {
                    resolve(JSON.parse(ajax.responseText))
                } else {
                    reject(`Usuária ${github_user} não foi encontrada.`)
                }
            }
        }
    })
}

button.onclick = function () {
    divResposta.innerHTML = ''
    let spanName = document.createElement('span')
    let txtNome = ''

    getPromise()
        .then(function ( response ) {
            if ( response['name'] !== null ) {
                txtNome = document.createTextNode(response['name'])
                let img = document.createElement('img')
                img.setAttribute('src', response['avatar_url'])
                img.setAttribute('alt', response['name'])
                img.setAttribute('width', '35%')
                img.setAttribute('height', '35%')
                divResposta.appendChild(img)
            } else {
                txtNome = document.createTextNode('Usuário procurado não localizado')
            }
            spanName.appendChild(txtNome)
            divResposta.appendChild(spanName)
        })
        .catch(function (error) {
            txtNome = document.createTextNode(error)
            spanName.appendChild(txtNome)
            divResposta.appendChild(spanName)
        })
}