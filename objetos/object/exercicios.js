// Crie uma função que verifique
// corretamente o tipo de dado

function checkDataType(data) {
 return console.log(Object.prototype.toString.call(data))
}
checkDataType('alo')

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const square = {}

Object.defineProperties(square, {
  sides: {
    value: 4,
    enumerable: true,
  }
})

console.log(square)
// Previna qualquer mudança
// no objeto abaixo
const settings = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(settings)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))