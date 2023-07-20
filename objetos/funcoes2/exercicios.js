// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraph = Array.from(document.querySelectorAll('p'))

const totalCharacters = Array.prototype.reduce.call(paragraph, (acc, item) => {
  return acc + item.innerText.length
}, 0)
console.log(totalCharacters)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tag, classe, content) {
  const element = document.createElement(tag)
  classe ? element.classList.add(classe) : '';
  content ? element.innerHTML = content : '';
  return element
}

console.log(createElement('li', 'alo', 'esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico.

const h1Title = createElement.bind(null, 'h1', 'titulo')

console.log(h1Title('cursos de javascript'))
console.log(h1Title('cursos de HTML'))