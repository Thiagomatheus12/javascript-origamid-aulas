// const cars = ['Ford', 'Fiat', 'Honda']

// cars.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array)
// })

// console.log(cars)

// //Arrow function
// const li = document.querySelectorAll('li')

// li.forEach(i => i.classList.add('ativo'));

// // li.forEach(function(item)  {
// //   item.classList.add('ativo')
// // })

// const cars1 = ['Ford', 'Fiat', 'Honda']
// const newCars = cars1.map((item) => {
//   return 'Carro' + item;
// })

// console.log(cars1)
// console.log(newCars)

// const numbers = [1, 4, 5, 6, 73]
// const numbersX2 = numbers.map((item) => {
//   return item * 2;
// })
// console.log(numbers)
// console.log(numbersX2)

// const classes = [
//   {
//     name: 'HTML 1',
//     min: 15
//   },
//   {
//     name: 'HTML 2',
//     min: 10
//   },
//   {
//     name: 'CSS 1',
//     min: 20
//   },
//   {
//     name: 'JS 1',
//     min: 25
//   },
// ]

// const classTime = classes.map(classroom => classroom.min)

// function className(classroom) {
//   return classroom.name
// }

// const arrayClassName = classes.map(classroom => classroom.name)
// console.log(arrayClassName)
// console.log(classTime)

/**
 * [].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
 */

// const classes = [10, 25, 30]
// const reduceClasses = classes.reduce((acumulador,item) => {
//   console.log(acumulador, item)
//   return acumulador + item
// }, 0)

// console.log(reduceClasses)

// //Maior valor com reduce
// const numbers = [1, 2, 3, 4, 35, 6, 7, 8]
// const highestValue = numbers.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior

//   //if(anterior > atual)
//   //return anterior
//   //else 
//   //return atual
// }, 0)

// console.log(highestValue)

const classes = [
  {
    name: 'HTML 1',
    min: 15
  },
  {
    name: 'HTML 2',
    min: 10
  },
  {
    name: 'CSS 1',
    min: 20
  },
  {
    name: 'JS 1',
    min: 25
  },
]

const classList = classes.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.name
  return acumulador
}, {})

console.log(classList)

/**
 * [].REDUCERIGHT()
Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
*/

const fruits = ['Banana', 'Pêra', 'Uva']
const fruitsRight = fruits.reduceRight((acc, fruit) => acc + ' ' + fruit)
const fruitsLeft = fruits.reduce((acc, fruit) => acc + ' ' + fruit)
console.log(fruitsRight)
console.log(fruitsLeft)

//[].some() - se pelo menos um return da iteração for truthy, ele retorna true

const fruits1 = ['Banana', 'Pêra', 'Uva']
const contentUva = fruits1.some((fruit) => {
  return fruit === 'Uva'
})

console.log(contentUva)

function biggerthen100(number) {
  return number > 100;
}
const numbers = [0, 43, 22, 88, 101, 2]
const hasBigger = numbers.some(biggerthen100)
console.log(hasBigger)

//[].every() -- se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const fruits2 = ['Banana', 'Pêra', 'Uva', '']
//false pois pelo menos um fruta está vazia '', o que é valor falsy

const fullArray = fruits2.every((fruit) => {
  return fruit //false
})

const numbers1 = [4, 43, 22, 88, 101]
const biggerthen3 = numbers1.every(x => x > 3)//true
console.log(biggerthen3)

/**
 * [].FIND() E [].FINDINDEX()
[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
 */

const fruits3 = ['Banana', 'Pêra', 'Uva', '']
const searchUva = fruits3.findIndex((fruit) => {
  return fruit === 'Uva'
}) //return 2

const numbers2 = [0, 43, 22, 88, 101, 2]
const biggerthen45 = numbers2.find(x => x > 45)// 88
console.log(biggerthen45)



/**
 * [].FILTER()
[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
 */

const fruits4 = ['Banana', undefined, null, '', 'Pêra', 'Uva', 0, '']
const cleanArray = fruits4.filter((fruit) => {
  return fruit
})
console.log(cleanArray)

const numbers3 = [0, 43, 22, 88, 101, 2]
const biggerthen44 = numbers2.filter(x => x > 44)// 88, 101
console.log(biggerthen44)