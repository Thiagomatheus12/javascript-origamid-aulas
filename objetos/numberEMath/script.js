console.log(Number.isNaN(NaN));
console.log(Number.isInteger(23));

console.log(parseFloat('23'));
console.log(parseFloat('23.10'));
console.log(parseInt('23.19'));

//toFixed() - Arredonda o número com base no total de casas decimais do argumento
const price = 2.99
price.toFixed(); // 3

const car = 100.455
car.toFixed(2); // 100.46

const price2 = 1499.49

console.log(price2.toFixed()) // 1499

//toString(radix) - Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal
const price3 = 2.99
price3.toString(10); // '2.99'

//ToLocaleString(lang, options) - Formata o número de acordo com a lingua e opções passadas
const price4 = 59.49;
console.log(price4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))//R$: 59,49

//Math - É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns
Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303

console.log(Math.PI)
//Math.abs() | Math.ceil() | Math.floor() | Math.round()
//abs() arredonda o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor() para baixo. round() arredonda para o numero integral mais próximo.
Math.abs(-5.5) // 5.5
Math.ceil(4.83344) // 5
Math.ceil(4.3) // 5
Math.floor(4.83344) // 4
Math.floor(4.3) //4
Math.round(4.83344) //5
Math.round(4.3) //4

//Math.max() | Math.min() | Math.random() 
//max() retorna o maior número de uma lista de argumentos. min() o menor número e o random() um número aleatório entre 0 e 1.

Math.max(5, 3, 10, 42, 2) // 42
Math.min(5, 3, 10, 42, 2) // 2

Math.random() // 0.XXX
Math.floor(Math.random() * 100) // entre 0 e 100
Math.floor(Math.random() * 500) // entre 0 e 500

//Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32
Math.floor(Math.random() * (max - min + 1)) + min