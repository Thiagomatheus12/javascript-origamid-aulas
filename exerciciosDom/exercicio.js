//Alterar o texto de um elemento
const texto = document.querySelector('.titulo');
function alterarTexto() {
  texto.textContent = 'Olá'
}

alterarTexto()

//Alterar a cor de fundo de um elemento ao clicar
function alterarCorFundoTexto() {
  texto.addEventListener('click', () => {
  texto.classList.toggle('ativo');
  })
}
alterarCorFundoTexto()

//Adicionar um novo elemento à página
const elemento = document.createElement('div');
elemento.innerText = 'Olá mundo!!';
document.getElementById("meu_target").appendChild(elemento)
console.log(elemento);

//Segunda maneira de resolver.
const divElemento = document.createElement("div")
const textElemento = document.createTextNode("Olá Mundo!!")
divElemento.appendChild(textElemento)
document.getElementById("meu_target").appendChild(divElemento)



//Remover um elemento ao passar o mouse por cima
function removerElementoAoPassarMouse() {
  const removerElemento = document.querySelector('#meu_target');
  removerElemento.addEventListener('mouseover', () => {
    removerElemento.remove();
  });
}

removerElementoAoPassarMouse();


//Melhoria de código
function removerElementoAoPassarMouse() {
  const meuTarget = document.querySelector('#meu_target');
  meuTarget.addEventListener('mouseenter', remover);
}

function remover(event) {
  const elemento = event.target;
  elemento.remove();
  elemento.removeEventListener('mouseenter', remover);
}

removerElementoAoPassarMouse();


//Alterar a classe de um elemento
const alterarClasse = document.querySelector('.animais-lista');
alterarClasse.classList.replace('animais-teste')