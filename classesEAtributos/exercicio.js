//Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu)
itensMenu.forEach((item) => {
  item.classList.add('ativo')
  console.log(item)
})

//Remova a classe ativo a todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo')

//Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo)
})

//Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]');
console.log(linkExterno)
linkExterno.setAttribute('href', 'ola.com');