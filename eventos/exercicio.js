/*Quando o usuário clicar nos li nks internos do site, adicione a classe ativo ao item clicado e remova das demais itens, caso eles possuam a mesma. Previna o comportamento padrão desses li nks
*/

const links = document.querySelectorAll('a[href^="#"]')
function handleLink(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.toggle('ativo')
}

links.forEach((link) => {
  link.addEventListener('click', handleLink)
})

//Selecione todos os elementos do site a partir do body, ao clique mostre exatamente quais elementos estão sendos clicados
// const body = document.querySelectorAll('body')
const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos)

function handleElement(event) {
  console.log(event.currentTarget)
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElement)
})

//Utilizando o código anterior, ao inves de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
  event.currentTarget.remove();
}

//Se o usuário clicar na tecla (t), aumente todo o texto do site
function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textSize')
  }
}
window.addEventListener('keydown', handleClickT);