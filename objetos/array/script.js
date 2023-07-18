const instruments = ['Guitarra', 'Baixo', 'Violão'];
const prices = [49, 99, 69, 89];

const data = [new String('Tipo 1'), ['Carro', 'Portas', { color: 'Azul', price: 2000 }], function toWalk(name) { console.log(name) }];

const cars = new Array('Ford', 'Fiat', 'Honda')
cars[2] = 'ferrari'
console.log(cars.length)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

console.log(li)
console.log(arrayLi)

//isArray(n) - verifica se o valor passado é uma array e retorna um valor booleano


//Array.of(), Array(), new Array() - Verifica se o valor passado é uma array e retorna um valor booleano, A palavra chave new não é necessária para utilizar o construtor Array

Array.of(10); //[10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const fruits = ['Banana', 'Pêra', ['Uva Roxa', 'Uva verde']]
console.log(fruits.length)

//Métodos modificadores [].sort()
//Além de retornarem um valor, eles modifica a array original. [].sort() organiza a pelo unicode

const instruments2 = ['Guitarra', 'Baixo', 'Violão'];
instruments2.sort() //Organiza a Array por ordem alfabética
console.log(instruments2) // ['Baixo', 'Guitarra', 'Violão']

const ages = [32, 21, 33, 43, 1, 12, 8]
ages.sort() //
console.log(ages) //[1, 12, 21, 32, 33, 43, 8]

//[].unshift() e [].push() - unshift adiciona elemento ao inicio da array e retorna o lenght da mesma, push adiociona um elemento ao final da array e retorna o lenght da mesma 

const cars2 = ['Ford', 'Fiat', 'VW']
cars2.unshift('Kia')
cars2.push('Ferrari')
console.log(cars2)

//[].shift() e [].pop() - shift remove o primeiro elemento da array e retorna o memso, pop remove o ultimo elemento da array e retorna o mesmo

const cars3 = ['Ford', 'Fiat', 'VW']
const firstCar = cars3.shift()//'Ford'
const lastCar = cars3.pop() //'VW'
console.log(cars3) //['Fiat']

//[].splice(index, remover, item1, item2, ...) - adiciona valores na array a partir do index, remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)  

const cars4 = ['Ford', 'Fiat', 'VW', 'Honda']
console.log(cars4)


cars4.splice(1, 0, 'Kia', 'Mustang')// []
cars4; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
console.log(cars4)


cars4.splice(3, 2, 'Ferrari'); //['Fiat', 'VW']
cars4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
console.log(cars4)

//[].copyWithin(alvo, inicio, final) - a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de inicio e final, ele irá utilizar como inicio o 0 e final o valor total da array

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(2, 0, 2))
//['Item 1', 'Item 2', 'Item 1', 'Item 2',]

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(-1))
//['Item 1', 'Item 2', 'Item 3', 'Item 1',]



//[].fill(valor, inicio, final) - preenche a array com o valor, do inicio ate o fim

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].fill('Banana'))
//['Item 1', 'Item 2', 'Item 1', 'Item 2',]

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].fill('Banana', 2))
//['Item 1', 'Item 2', 'Item 3', 'Item 1',]

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].fill('Banana', 1, 3))
//['Item 1', 'Item 2', 'Item 3', 'Item 1',]

/**
 * MÉTODOS DE ACESSO [].CONCAT() -- Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
 */
const transport1 = ['Barco', 'Aviao'];
const transport2 = ['Carro', 'Moto'];
const transports = transport1.concat(transport2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const moreTransports = [].concat(transport1, transport2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


/**
 * [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
 */

const languages = ['html', 'css', 'js', 'php', 'python', 'js']

languages.includes('css') // true
languages.includes('ruby') // false
languages.indexOf('python') // 4
languages.indexOf('js') // 2
languages.lastIndexOf('js') // 5

/**
 * [].JOIN()
[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
 */

const languages2 = ['html', 'css', 'js', 'php', 'python'];
languages.join(); //'html,css,js,php,python'
languages.join(' '); //'html css js php python'
languages.join('-_-'); //'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')
console.log(htmlString)

/**
 * [].SLICE()
[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
 */
const languages3 = ['html', 'css', 'js', 'php', 'python'];
languages3.slice(3) // ['php', 'python']
languages3.slice(1,4) // ['css', 'js', 'php' ]

const cloneLanguages = languages3.slice()