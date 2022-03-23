// Axios é um cliente HTTP baseado em promessas https://github.com/axios/axios para navegador e NodeJS.
let confirmaBusca = document.querySelector('#btn-3')
let resultBusca = document.querySelector('#app-3')

confirmaBusca.onclick = function () {
    resultBusca.innerHTML = ''
    let span = document.createElement('span')
    let txtNome = ''

    let user = document.querySelector('input[name=github-user-3]').value

    axios.get(`https://api.github.com/users/${user}`)
        .then(function (response) {
            if (response.data.name !== null ) {
                txtNome = document.createTextNode(response.data.name)
                let img = document.createElement('img')
                img.setAttribute('src', response.data.avatar_url)
                img.setAttribute('alt', response.data.name)
                img.setAttribute('height', '35%')
                img.setAttribute('width', '35%')

                resultBusca.appendChild(img)
            } else {
                txtNome = document.createTextNode('Usuária da busca não localizada')
            }

            span.appendChild(txtNome)
            resultBusca.appendChild(span)
        })
        .catch(function (error) {
            txtNome = document.createTextNode(error)
            span.appendChild(txtNome)
            resultBusca.appendChild(span)
        })
}