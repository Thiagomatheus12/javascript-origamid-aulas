// const img = document.querySelector('img');

// function callback(event) {
//   console.log(event)
// }

// img.addEventListener('click', callback)

// console.log(img)

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//   console.log(event.currentTarget)
//   console.log(event.target)
//   console.log(event.type)
// }

// animaisLista.addEventListener('click', callbackLista)


// console.log(animaisLista)

// const linkExterno = document.querySelector('a[href^="http"')

// function handleLinkExterno(event) {
//   event.preventDefault()
//   // console.log('clicou')
//   console.log(this.getAttribute('href'))
//   console.log(event.currentTarget)
// }

// linkExterno.addEventListener('click', handleLinkExterno)

// const h1 = document.querySelector('h1')

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mousemove', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)

// window.addEventListener('scroll', callback)
// window.addEventListener('resize', callback)

// function handleKeyboard(event) {
//   if(event.key === 'f') {
//     document.body.classList.toggle('fullscreen')
//   }
//   console.log(event.key)
// }
// window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img')

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})