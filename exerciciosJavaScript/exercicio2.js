// Exercício 1:
// Escreva um programa que preencha um array com os números de 1 a 10 e, em seguida, exiba os números no console. prompt
// let numbers = []
// for (let item = 1; item <= 10; item++) {
//   numbers.push(item)
// }
// console.log(numbers)
// console.log(numbers.includes(1))
// console.log(numbers.includes(7))
// console.log(numbers.length === 10)

// Exercício 2:
// Escreva um programa que solicite ao usuário que digite 5 nomes e armazene-os em um array. Em seguida, exiba os nomes no console.

// const names = [];

//   for (let i = 0; i < 5; i++) {
//     let name = prompt('Digite somente o primeiro nome:');

//     // Verifica se o nome é válido (contém apenas letras)
//     while (name === null || name.trim() === '' || !/^[a-zA-Z]+$/.test(name)) {
//       name = prompt('Por favor, digite um nome válido (somente letras):');
//     }

//     names.push(name);
//   }

//   console.log(names);
//   console.log(names !== Number)
//   console.log(names.length === 5)


// Exercício 3:
// Escreva um programa que preencha um array com os primeiros 10 números pares (começando em 2) e, em seguida, exiba esses números no console.
// let pairNumbers = []
// for (let i = 2; i <= 10; i+= 2) {
//   pairNumbers.push(i)
// }

// console.log(pairNumbers)
// console.log(pairNumbers.includes(5) === false)
// console.log(pairNumbers.includes(6))
// console.log(typeof pairNumbers)

// Exercício 4:
// Escreva um programa que solicite ao usuário que digite 5 números e armazene-os em um array. Em seguida, calcule e exiba a soma de todos os números no console.
// const numbers = [];
// let totalNumber = 0;

// function getNumber() {
//   let number = prompt('Digite 5 números separados por espaço:');
//   number = number.trim().split(' ');

//   // Verifica se a quantidade de números digitados é igual a 5
//   while (number.length !== 5 || !number.every(num => /^\d+$/.test(num))) {
//     number = prompt('Por favor, digite exatamente 5 números separados por espaço:');
//     number = number.trim().split(' ');
//   }

//   numbers.push(...number);
//   addNumbers();
// }

// function addNumbers() {
//   numbers.forEach((number) => {
//     totalNumber += parseInt(number);
//   });

//   console.log('A soma dos números é:', totalNumber);
// }

// getNumber();

// Exercício 5:
// Escreva um programa que preencha um array com 5 palavras e, em seguida, exiba cada palavra em uma linha separada, seguida pelo número de letras contidas em cada palavra no console.
const words = [];

function verifyWord() {
  // Verifica se o nome é válido (contém apenas letras)
  let word = prompt(`Digite uma palavra (${words.length + 1} de 5):`);
  while (word === null || word.trim() === '' || !/^[a-zA-Z]+$/.test(word)) {
    word = prompt('Por favor, digite uma palavra válida (somente letras):');
  }

  words.push(word);
}

// Repetir a função verifyWord() cinco vezes
for (let i = 0; i < 5; i++) {
  verifyWord();
}

console.log(words);

words.forEach((word) => {
  console.log(word, word.length);
});
