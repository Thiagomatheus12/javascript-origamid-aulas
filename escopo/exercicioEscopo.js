//Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(cor, marca, portas);//let e const não são possiveis de serem lidas fora do escopo, somente o var

//como corrir o erro abaixo?
const dois = 2
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
// colocando a const para fora do escopo de bloco
console.log(somarDois(4))
console.log(dividirDois(6))

//O que fazer para o total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero)
}
const total = 10 * numero;
console.log(total)
//Alterando de var para let dentro do escopo do for

