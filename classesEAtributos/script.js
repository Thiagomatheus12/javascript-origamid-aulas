const menu = document.querySelector('.menu')
menu.classList.add('ativo')
menu.classList.add('azul')
menu.classList.remove('azul')
menu.classList.toggle('azul')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho'

// console.log(menu.className)
// console.log(menu.classList)

const animais = document.querySelector('.animais')
// console.log(animais.attributes['data-texto']) 

const img = document.querySelector('img')
console.log(img);

img.getAttribute('src'); //valor do src
img.setAttribute('alt', 'Texto Alternativo'); //Muda o alt
img.hasAttribute('id'); //true / false
img.removeAttribute('alt'); //remove o alt

img.hasAttributes() // true / false se tem algum atributo 

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`)
  }
}