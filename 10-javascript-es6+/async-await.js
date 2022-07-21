const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10) //gerar número inteiro entre 0 e 9
    console.log(`valor gerado ${valor}`)
    setInterval(() => {
        if (valor % 2 == 0) {
            resolve(`o valor ${valor} gerado é par...`)
        } else {
            reject(`o valor ${valor} gerado é ímpar...`)
        }
    }, 2000);
})

async function executarPromise() {
    try {
        const response = await novaPromise()
        console.log(response)
    } catch(erro) {
        console.log(erro)
    }
}

executarPromise()