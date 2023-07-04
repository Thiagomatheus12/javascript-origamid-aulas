// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function() {
//     return 'Abraçou'
//   }
// }

// Pessoa.prototype.andar = function () {
//   return 'Pessoa andou';
// }
// Pessoa.prototype.nandar = function () {
//   return this.nome + ' Pessoa nadou';
// }

// const andre = new Pessoa('André', 20)

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil'
const cidade = new String('Rio')
pais.charAt(2)
console.log(pais)
console.log(cidade)

const listaAnimais = ['Cachorro','Gato','Cavalo']

const lista = document.querySelectorAll('li')
console.log(lista)

//Transforma em Array
// const listaArray = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)
console.log(listaArray2)

//Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype)

//Apenas os métodos do protótipo são herdados 
//[1,2,3].slice(); existe
//[1,2,3].from()/ não existe

const carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

/**
 * carro // Object
 * carro.marca //String
 * carro.preco // Number
 * carro.acelerar // Function
 * carro.acelerar() // Boolean
 * carro.marca.charAt // Function
 * carro.marca..charAt(0) //String
 * 
 * Verifique o nome do constructor com .constructor.name
 */