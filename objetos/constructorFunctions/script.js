function Carro(marcaAtribuida, precoAtribuido) {
  const taxa = 1.2;
  const precoFinal = precoAtribuido * taxa;
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
}

const honda = new Carro('Honda', 2000);
console.log(honda);

const fiat = new Carro('Fiat', 1000); 
console.log(fiat);

//Cria um novo objeto
const porshe = new Carro();
// honda = {};

//Define o protótipo
honda.prototype = Carro.prototype;

//Aponta a variável this para o objeto
// this = porshe;

//Executa a função, substituindo this pelo objeto
porshe.marca = 'Porshe';
porshe.preco = 1000;

//Retorna o novo objeto
// return porshe = {
//   marca: 'Porshe',
//   preco: 1000,
// }