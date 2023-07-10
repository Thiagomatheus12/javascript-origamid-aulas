// const food = 'Pizza'
// const water = new String('Agua')
// console.log(water.length)

// const phrase = 'A melhor comida'
// console.log(phrase[phrase.length - 1])
// console.log(phrase.charAt(phrase.length - 1))

// const phrase1 = 'A melhor linguagem é '
// const language = 'JavaScript'
// const finalSentence = phrase1.concat(linguagem, '!!')
// console.log(finalSentence)

const fruit = 'Banana'
// const fruitList = 'Melancia, Banana, Laranja'

// console.log(fruitList.includes(fruit))

// console.log(fruit.startsWith('Ba')) // startsWith = começa com
// console.log(fruit.endsWith('na')) // endsWith = termina com

const transaction1 = 'Depósito de cliente'
const transaction2 = 'Depósito de forncedor'
const transaction3 = 'Taxa de camisas'

console.log(transaction1.slice(3))
transaction1.slice(0,3) // Dep
transaction1.slice(12) //cliente
transaction1.slice(-4) // ente

//Substring - Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice

const language1 = 'JavaScript'
language1.substring(3,5)// aS
language1.substring(0,4)//Java
language1.substring(4)//Script
language1.substring(-3)//JavaScript

//IndexOf e lastIndexOf - retorna o index da string, assim que achar o primeiro resultado ele já retorna, no caso do lastIndexOf ele retorna o último resultado

const fruit1 = 'Banana'
console.log(fruit1.indexOf('a'))
console.log(fruit1.lastIndexOf('a'))

//padStart e padEnd - Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n=10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento

const priceList = ['R$ 99', 'R$ 199', 'R$ 12000']

priceList.forEach((price) => {
  console.log(price.padStart(10, '-'))
})

priceList[0].padStart(10, '.') // .....R$ 99
priceList[0].padEnd(10, '.') // R$ 99.....

//Repeat - repete a string (n) vezes.
const phrase3 = 'Ta'
phrase3.repeat(5)// TaTaTaTaTa

//replace - troca a parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar

let listItems = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listItems = listItems.replace(/[ ]+/g, ', ')
console.log(listItems)

let price = 'R$: 1200,43'
price = price.replace(',', '.') // R$: 1200.43

//split - Divide a string de acordo com o padrão passado e retorna uma array

const listItems1 = 'Camisas Bonés Calças Bermudas Vestidos Saias'
const arrayItems = listItems1.split(', ')
console.log(arrayItems)

const htmlText = '<div>O melhor item</div> <div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const newHtml = htmlArray.join('section')
console.log(newHtml)

//trim() , trimStart(), trimEnd() - remove espaços em branco no inicio ou final de uma string
const value = '    R$ 23.00   '
value.trim() // 'R$ 23.00'
value.trimStart() // 'R$ 23.00   '
value.trimEnd() // '   R$ 23.00'