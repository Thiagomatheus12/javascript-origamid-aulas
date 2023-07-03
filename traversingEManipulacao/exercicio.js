//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuClone = menu.cloneNode(true)
console.log(menu)
const copy = document.querySelector('.copy')
console.log(copy)
copy.appendChild(menuClone)

//Selecione o primeiro DT da DL de fac
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
console.log(primeiroDt)

//Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling
console.log(primeiroDd)

//Substitua o conteúdo html de .fac pelo de .animais
const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML


