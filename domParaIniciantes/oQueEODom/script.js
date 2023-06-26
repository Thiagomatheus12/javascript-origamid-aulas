const href = window.location.href;

console.log(href);

const h1Selecionado = document.querySelector('h1');
// alert('teste')
const h1Classes = h1Selecionado.classList

function handleClick() {
    console.log('clicou em', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', handleClick)