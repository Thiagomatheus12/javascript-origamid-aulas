// Retorne um número aleatório
// entre 1050 e 2000
const random = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(random)


// Retorne o maior número da lista abaixo
const numbers = '4, 5, 20, 8, 9';

const arrayNumbers = numbers.split(', ');
const numMax = Math.max(...arrayNumbers);
console.log(numMax)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const priceList = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

 function clearPrice(price) {
  price = +price.toUpperCase().replace('R$', '').trim().replace(',', '.')
  price = +price.toFixed(2)
  return price
 }

 let totalPrice = 0;
 priceList.forEach((price) => {
  totalPrice += clearPrice(price)
})
console.log(totalPrice.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))

 clearPrice(priceList[0])

