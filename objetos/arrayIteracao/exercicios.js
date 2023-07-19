// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const courses = document.querySelectorAll('.curso')
const arrayCourses = Array.from(courses)

const objectCourse = arrayCourses.map((course) => {
  const title = course.querySelector('h1').innerText
  const description = course.querySelector('p').innerText
  const classes = course.querySelector('.aulas').innerText
  const hours = course.querySelector('.horas').innerText
  return {
    title,
    description,
    classes,
    hours
  }
})
console.log(objectCourse)

// Retorne uma lista com os
// números maiores que 100
const numbers = [3, 44, 333, 23, 122, 322, 33];
const biggerthen100 = numbers.filter((number => number > 100))
console.log(biggerthen100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instruments = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const toCheck = instruments.some((instrument) => {
  return instrument === 'Baixo'
})
console.log(toCheck)

// Retorne o valor total das compras
const shopping = [
  {
    item: 'Banana',
    price: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    price: 'R$ 2,99'
  },
  {
    item: 'Carne',
    price: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    price: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    price: 'R$ 10,60'
  }
]

// function hasCheese(shoppingCart) {
//   return console.log(shoppingCart.some((product) => product.item === 'Queijo'))
// }

// hasCheese(shopping)


// const cleanArray = shopping.map((item) => {
//   item = +item.price.toUpperCase().replace('R$', '').trim().replace(',', '.')
//   return item
// })

// const sumArray = cleanArray.reduce((sum, item) => {
//   return sum += item
// }, 0)

// console.log(sumArray)

const amount = shopping.reduce((accumulator, item) => {
  const cleanPrice = +item.price.replace('R$', '').replace(',', '.')
  return accumulator + cleanPrice
}, 0)

console.log(amount)