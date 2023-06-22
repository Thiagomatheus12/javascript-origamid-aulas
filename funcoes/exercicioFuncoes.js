// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(verificador) {
  return !!verificador
}
console.log(verificarTruthy(0))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroAoQuadrado(perimetro) {
  return perimetro * 4;
}
console.log(perimetroAoQuadrado(5));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(primeiroNome, sobrenome) {
  primeiroNome = 'Thiago'
  sobrenome = 'Sousa'
  return `${primeiroNome} ${sobrenome}`
}
console.log(nomeCompleto())

//Correção
function nomeCompleto(primeiroNome, sobrenome) {
  return `${primeiroNome} ${sobrenome}`
}
console.log(nomeCompleto('Thiago', 'Matheus'))

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 9 || numero === 11) {
    return 'Impar'
  } else {
    return 'Par'
  }
}

//Correção
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true
  } else {
    return false
  }
}

console.log(verificaPar(3))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTypeOf(dado) {
  return typeof dado
}

console.log(verificarTypeOf(''));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log(nomeCompleto())
})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20))