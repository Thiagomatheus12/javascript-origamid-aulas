//Crie uma função construtora de Pessoas, deve conter nome, sobrenome e idade
//Crie um método no protótipo que retorne o nome completo da pessoa

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}
Person.prototype.fullName = function() {
  return `${this.name} ${this.surname}`
}
const thiago = new Person('Thiago', 'Matheus')
console.log(thiago.fullName())


//Liste os métodos acessados por dados criados com NodeList, HTMLColection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

//Liste os construtores dos dados abaixo
const li = document.querySelector('li')

li; 
li.constructor.name //HTMLLIElement
li.click; //Function
li.innerText //String
li.value //Number
li.hidden //Boolean
li.offsetLeft //Number
li.click() //Undefined

//Qual o construtor do dado abaixo
li.hidden.constructor.name //String