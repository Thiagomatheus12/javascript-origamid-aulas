//Crie um objeto com o seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome
let myData = {
  name: 'Thiago',
  surname: 'Sousa',
  age: 26,
  state: 'São Paulo',
  fullName() {
    return `${this.name} ${this.surname}`
  }
}

//Crie um método no objeto anterior, que mostre o seu nome completo.
console.log(myData.fullName())

//Modifique o valor da propriedade preço para 3000
var car = {
  price: 1000,
  doors: 4,
  brand: 'Audi'
}
car.price = 3000;

console.log(car.price)

//Crie um objeto de um cachorro que represente um labrador preto com 10 anos que late ao ver um homem
let dog = {
  race: 'Labrador',
  color: 'black',
  age: 10,
  bark(pessoa) {
    if(pessoa === 'homem') {
      return 'latir'
    } else {
      return 'não latir'
    }
  }
}