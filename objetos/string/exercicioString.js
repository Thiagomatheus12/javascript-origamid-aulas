// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transactions = [
  {
    description: 'Taxa do Pão',
    value: 'R$ 39',
  },
  {
    description: 'Taxa do Mercado',
    value: 'R$ 129',
  },
  {
    description: 'Recebimento de Cliente',
    value: 'R$ 99',
  },
  {
    description: 'Taxa do Banco',
    value: 'R$ 129',
  },
  {
    description: 'Recebimento de Cliente',
    value: 'R$ 49',
  },
];

let totalFee = 0;
let totalReceipt = 0;
transactions.forEach((item) => {
  const stringToNumber = +item.value.replace('R$ ', '')
  if(item.description.slice(0, 4) === 'Taxa') {
    totalFee += stringToNumber
  } else {
    totalReceipt += stringToNumber
  }
})
console.log(totalFee)
console.log(totalReceipt)



// Retorne uma array com a lista abaixo
const transport = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportArray = transport.split(';');
console.log(transportArray)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

// const htmlArray = html.split('span')
// const newHtml = htmlArray.join('a')
// console.log(newHtml)
html = html.split('span').join('a')
console.log(html)

// Retorne o último caracter da frase
const phrase = 'Melhor do ano!';
console.log(phrase[phrase.length - 1])

// Retorne o total de taxas
const transactions1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let counter = 0;
transactions1.forEach((transaction) => {
  transaction = transaction.toLowerCase().trim()
  if (transaction.includes('taxa')) {
    return counter++
  }
})
console.log(counter)

