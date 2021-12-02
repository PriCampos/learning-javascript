let caixaElement = document.querySelector('.link')
let btns = document.querySelectorAll('button')

caixaElement.style.width = '200px'
caixaElement.style.backgroundColor = 'green'

for (let i=0; i < btns.length; i++) {
    btns[i].onclick = function() {
        let body = document.querySelector('body')
        body.style.backgroundColor = btns[i].getAttribute('class')
    }
}