//Crie um array com os anos que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002
let anosQueOBrasilGanhouACopa = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem, 'O brasil ganhou a copa de `o Brasil ganhou a copa de ${anosQueOBrasilGanhouACopa} anos`.
for(let item = 0; item < anosQueOBrasilGanhouACopa.length; item++) {
  console.log(`O brasil ganhou as copas de ${anosQueOBrasilGanhouACopa}.`)
  // console.log(`O brasil ganhou a copa de ${anosQueOBrasilGanhouACopa[item]}.`)
  break;
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let item = 0; item < frutas.length; item++) {
  console.log(frutas[item])
  if (frutas[item] === 'Pera') {
    break;
  }
}

//Coloque a última fruta do array acima em uma variável
//sem remover a mesma do array.
let ultimaFrutaArray = frutas[frutas.length - 1]
console.log(ultimaFrutaArray)