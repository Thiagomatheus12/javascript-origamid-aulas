const person = new Object({
  name: 'Thiago'
});

console.log(person)

/**
 * Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
 */
const car = {
  wheels: 4,
  init(value) {
    this.brand = value;
    return this;
  },
  speedUp() {
    return this.brand + ' acelerou'
  },
  honk() {
    return this.brand + ' buzinou'
  }
}

const honda = Object.create(car)
honda.init('Honda')
console.log(honda)
console.log(honda.speedUp())

const ferrari = Object.create(car)
ferrari.init('Ferrari')
console.log(ferrari.speedUp())

/**
 * OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
 */

const carFunction = {
  speedUp() {
    return 'Acelerou'
  },
  honk() {
    return 'Buzinou'
  }
}

const motorbike = {
  wheels: 2,
  helmet: true,
}

const car2 = {
  wheels: 4,
  sheHad: true,
}

Object.assign(motorbike, carFunction)
Object.assign(car2, carFunction)

console.log(motorbike.speedUp())

/**
 * Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
 */

const motorbike2 = {
  helmet: true
}

Object.defineProperties(motorbike2, {
wheels: {
  get() {
    return this._wheels 
  },
  set(value) {
    this._wheels = value * 4 + ' Total de rodas'
  }
}
})

console.log(motorbike2)

/**
 * GET E SET
É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
 */


/**
 * Object.getOwnPropertyDescriptor(obj)
 * Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações
 */

Object.getOwnPropertyDescriptors(Array)
//Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype)
//Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight')
//Puxa uma única propriedade

/**
 * OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
 */

Object.keys(Array) //[]vazia, pois não possui propriedades enumeráveis

const car1 = {
  brand: 'Ford',
  year: 2000,
}

Object.keys(car1) // ['brand', 'year']
Object.values(car1) // ['Ford', '2000']
Object.entries(car1) // ['brand', 'Ford'], ['year', '2000']

/**
 * Object.getOwnPropertyNames(obj)
 * Retorna uma array com todas as propriedades diretas do objeto (não retorna protótipo)
 */

Object.getOwnPropertyNames(Array) // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype) // [... 'filter', 'map', 'every', 'some', 'reduce' ...]

Object.getOwnPropertyNames(car1) // ['brand', 'year']

/**
 * Object.getPrototypeOf() e Object.is()
 * Object.getPrototypeOf() retorna o protótipo do objeto.
 * Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false
 */

const fruits1 = ['Banana', 'Pêra']
Object.getPrototypeOf(fruits1)
Object.getPrototypeOf('') //String

const fruits2 = ['Banana', 'Pêra']
const fruits3 = ['Banana', 'Pêra']
Object.is(fruits2, fruits3) // false

/**
 * OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
 */

const car3 = {
  brand: 'Ford',
  year: 2000,
}
Object.freeze(car3)
Object.seal(car3)
Object.preventExtensions(car3)
Object.isFrozen(car3)// true
Object.isSealed(car3) //true
Object.isExtensible(car3) //false

// car3.brand = 'Honda'
console.log(car3)

/**
 * {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
 */

const fruits4 = ['Banana', 'Pêra']
fruits4.hasOnwProperty('map')// false
Array.hasOnwProperty('map')// false
Array.prototype.hasOnwProperty('map')// true

Array.prototype.propertyIsEnuberable('map') // false
window.propertyIsEnuberable('innerHeight') // true

//{}.isPrototypeOf(valor)
//Verifica se é o protótipo do valor passado

const fruits5 = ['Banana', 'Pêra']
Array.prototype.isPrototypeOf(fruits5) //true

/**
 * {}.TOSTRING()
Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
 */
const fruits6 = ['Banana', 'Pêra']

Object.prototype.toString.call(fruits6)
//consegue realmente verificar qual o tipo do objeto