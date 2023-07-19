// Exercício 1:
// Crie uma função chamada temNumeroPar que recebe um array de números como parâmetro e retorna true se o array contiver pelo menos um número par, caso contrário, retorna false. Use o método some para implementar essa função.
const numbers = [1, 5, 7, 15, 43976]

function hasEvenNumber(evenNumber) {
  return console.log(evenNumber.some((number) => number % 2 === 0))
}

hasEvenNumber(numbers)
hasEvenNumber([1, 5, 7, 15])
hasEvenNumber([1, 15, 47, 12415])
hasEvenNumber([1, 5, 7, 15235248])
hasEvenNumber([1, 5, 76, 15])
hasEvenNumber([1, 3456469656, 7, 15])

// Exercício 2:
// Crie uma função chamada filtraPalavras que recebe um array de strings como parâmetro e retorna um novo array contendo apenas as palavras que começam com a letra "A". Use o método filter para implementar essa função.
const names = ['Thiago', 'Thales', 'João', 'Maria', 'Alessandro', 'aline']

function filterWords(word) {
  return console.log(word.filter((startWithThe) => startWithThe.charAt(0).toLowerCase() === 'a'))
}
filterWords(names)
filterWords(['teste', 'audio'])
// Exercício 3:
// Crie uma função chamada temElemento que recebe um array e um valor como parâmetros e retorna true se o valor estiver presente no array, caso contrário, retorna false. Use o método includes para implementar essa função.
const value = ['a', 'b', 'c', 'D']

function hasELement(element) {
  return console.log(element.includes('d'))
}
hasELement(value)


// Exercício 4:
// Crie uma função chamada filtraNumerosPares que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares. Use o método filter e a função de callback apropriada para implementar essa função.

const numbers1 = [1, 5, 7, 15, 43976]

function filterEvenNumber(pair) {
 return console.log(pair.filter((pair) => pair % 2 === 0))
}

filterEvenNumber(numbers1)
filterEvenNumber([132, 5, 74, 15, 43976])

// Exercício 5:
// Crie uma função chamada temCaracteresRepetidos que recebe uma string como parâmetro e retorna true se a string contiver caracteres repetidos, caso contrário, retorna false. Use o método some e a função de callback apropriada para implementar essa função.
const fruit = 'banana'

function hasRepeatedCharacters(element) {
 return element.split('').some((character, index) => element.indexOf(character) !== index)
}
hasRepeatedCharacters(fruit)