// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// h1.innerHTML = '<p>novo title</p>'
// // console.log(animaisLista.innerHTML)

// const lista = document.querySelector('.animais-lista')
// lista.parentElement // Pai
// lista.parentElement.parentElement // Pai do pai
// lista.previousElementSibling // Elemento acima
// lista.nextElementSibling // Elemento abaixo

// lista.children // HTML colection com os filhos
// lista.children[0] // Primeiro filho
// lista.children[--lista.children.length] //Último filho

// lista.querySelectorAll('li') // todas as LI's
// lista.querySelector('li:last-child') // Último filho

// console.log(lista.querySelectorAll('li:last-child'));
// console.log(lista.previousSibling);
// const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo')

// // animais.appendChild(titulo); //Move titulo para o final de contato 
// // animais.insertBefore(contato, titulo); //insere contato antes de titulo
// // animais.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(animais, titulo)// substitui titulo por contato

// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo Título'
// novoH1.classList.add('titulo');

// contato.appendChild(novoH1)
// console.log(novoH1)

const h1 = document.querySelector('h1')
const fac = document.querySelector('.fac')

const cloneH1 = h1.cloneNode(true);
fac.appendChild(cloneH1)


