const listaAnimais = document.querySelectorAll('.animais-lista');
const height = listaAnimais.offsetHeight;
// listaAnimais.clientHeight; //height + padding
// listaAnimais.offsetHeight; //height + padding + border
// listaAnimais.scrollHeight; //height total, mesmo dentro do scroll
// console.log(height)

const raposaH2 = document.querySelector('h2');
const h2Left = raposaH2.offsetLeft;
const rect = raposaH2.getBoundingClientRect();
console.log(h2Left)
console.log(rect.left)

// window.innerWidth //width da janela
// window.outerWidth //soma dev tools também 
// window.innerHeight // height da janela
// window.outerHeight // soma a barra de endereço

// window.pageYOffset // distancia total do scroll horizontal
// window.pageXOffset // distancia total do scroll vertical

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight
)