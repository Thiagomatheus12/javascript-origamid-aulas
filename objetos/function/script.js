// const perimeter = new Function('lado', 'return lado * 4')

// function sum(n1, n2) {
//   return n1 + n2
// }

// console.log(sum.name)

/**
 * function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
 */
// function sayHi(name, age) {
//   console.log('oi ' + name + age)
// }

// sayHi.call({}, 'Thiago', 24)

// const car = {
//   brand: 'Ford',
//   year: 2018
// }

// function carDescription() {
//   console.log(this.brand + ' ' + this.year)
// }

// carDescription() // undefined undefined
// carDescription.call() // undefined undefined
// carDescription.call(car) // Ford 2018

/**
 * THIS
O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
 */
const cars1 = ['Ford', 'Fiat', 'VW']
const fruits = ['Banana', 'Uva', 'pêra']
cars1.forEach.call(fruits, (item) => {
  console.log(item)
})

//Exemplo real
//O objeto atribuido a lista será o substituido pelo primeiro argumento de call()

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
  element: document.querySelector('li')
}

console.log(ul)
// ul.ativo('ativar')
ul.ativo.call(li, 'ativar')
// console.log(list)