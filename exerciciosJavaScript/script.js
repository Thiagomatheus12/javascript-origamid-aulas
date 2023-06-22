// Exercício 1: Calculadora de Média
// Crie uma função que receba um array de números e retorne a média desses números.

const numeros = [4, 6, 8, 2, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
const media = soma / numeros.length
console.log(media);

// Exercício 2: Verificar Número Primo
// Crie uma função que receba um número e verifique se ele é um número primo.
function verificarPrimo(numero) {
  var verificador = numero % 2;
  if (verificador === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(verificarPrimo(2)); // Saída: true
console.log(verificarPrimo(12)); // Saída: false

//correção 
function numeroPrimo(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}
console.log(numeroPrimo(1) === false);
console.log(numeroPrimo(2) === true);
console.log(numeroPrimo(3) === true);
console.log(numeroPrimo(4) === false);
console.log(numeroPrimo(5) === true);
console.log(numeroPrimo(121) === false);
console.log(numeroPrimo(4) === false);
console.log(numeroPrimo(10) === false); 

// Exercício 3: Trocar Valores
// Crie uma função que troque os valores de duas variáveis.
// let x = 5;
// let y = 10;
// [x, y] = trocarValores(x, y);
// console.log(x, y); // Saída: 10 5
let x = 5;
let y = 10;
function trocarValores(x, y) {
  return [x, y] = [y, x]
}
[x, y] = trocarValores(x, y);
console.log(x, y); // Saída: 10 5

// Exercício 4: Verificar Palíndromo
// Crie uma função que verifique se uma palavra é um palíndromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda).

function verificarPalindromo(text) {
  const textSemEspaco = text.replace(/\s+/g, '')
  const palindromo = textSemEspaco.split('')
  .reverse()
  .join('');
  return palindromo === textSemEspaco ? true : false;
}

//Melhoria by chatgpt
function verificarPalindromo(text) {
  if (typeof text !== 'string') {
    console.error('O valor não é uma string')
    return false;
  }

  const textSemEspaco = text.replace(/\s+/g, '').toLowerCase();
  const palindromo = textSemEspaco.split('').reverse().join('');

  return palindromo === textSemEspaco;
}

console.log(verificarPalindromo('o lobo ama o bolo'),'alo'); // Saída: true
console.log(verificarPalindromo(1),); // Saída: true
console.log(verificarPalindromo('arara')); // Saída: true
console.log(verificarPalindromo('casa')); // Saída: false

let testandoSplit = 'o lobo ama o bolo';
let resultadoSplit = testandoSplit.split('').reverse().join('');
console.log(resultadoSplit)

// Exercício 5: Gerar Sequência Fibonacci
// Crie uma função que gere uma sequência Fibonacci de tamanho n e retorne um array com os valores.
// console.log(gerarFibonacci(8)); // Saída: [0, 1, 1, 2, 3, 5, 8, 13]

let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = "";

fibonacci += numA + ' ' + numB

for(let contador = 1; contador <= 18; contador++) {
  numC = numA + numB
  fibonacci += ' ' + numC
  numA = numB
  numB = numC
}

console.log(fibonacci)