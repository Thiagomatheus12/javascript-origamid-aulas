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
// const cars1 = ['Ford', 'Fiat', 'VW']
// const fruits = ['Banana', 'Uva', 'pêra']
// cars1.forEach.call(fruits, (item) => {
//   console.log(item)
// })

//Exemplo real
//O objeto atribuido a lista será o substituido pelo primeiro argumento de call()

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }
// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')
// const ul = new Dom('ul')


// console.log(ul)
// ul.ativo('ativar')
// ul.ativo.call(li, 'ativar')
// console.log(list)


const fruits = ['Uva', 'Mação', 'Banana']

Array.prototype.pop.call(fruits)

/**
 * ARRAY-LIKE
HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.
 */

const li = document.querySelectorAll('li')
const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains('ativo')
})
console.log(filtro); // retorna os itens que possuem ativo

/**
 * FUNCTION.APPLY()
O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
 */

const numbers = [3, 4, 5, 1, 34, 44, 32]
Math.max.apply(null, numbers)
Math.max.call(null, 3, 4, 65, 234, 5)

//podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar


/**
 * FUNCTION.BIND()
Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.
 */

const car = {
  brand: 'Ford',
  age: 2018,
  speedUp: function(acceleration, time) {
    return `${this.brand} acelerou ${acceleration} em ${time}`
  }
}
console.log(car.speedUp(100,20))
//Ford acelerou 100 em 20

const honda = {
  brand: 'Honda',
}
const speedUpHonda = car.speedUp.bind(honda)
speedUpHonda(200,10)
//Honda acelerou 200 em 10