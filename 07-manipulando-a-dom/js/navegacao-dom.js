let link = document.querySelector('.link')
console.log(link) //link
console.log('--------')
console.log(link.innerText) //texto
console.log('--------')
console.log(link.parentNode) //body
console.log('--------')
console.log(link.parentNode.parentNode) //html
console.log('--------')
console.log(link.parentNode.parentNode.parentNode) //document
console.log('--------')
console.log(link.parentElement) //body
console.log('--------')
console.log(link.parentNode.parentNode.childNodes) //lista os elementos htmls
console.log('--------')
console.log(link.parentNode.parentNode.childNodes.item(0))//mostrar primeiro filho