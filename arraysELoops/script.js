// videoGames[0]
// let ultimoItem = videoGames.pop(); //Remove o último item do array
// videoGames.push('3DS'); //Adiciona um item no final do array


//primeiro inicia a variável
//depois declara a condição
//po último o incremento
for (let numero = 0; numero <= 4; numero++) {
  console.log(numero);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 5;
}


let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  if (videoGames[item] === 'PS4') {
    break;
  }
}

//Passando o parâmetro item, dinamicamente ele transfere o valor dentro do array.
let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']
frutas.forEach(function (fruta, index) {
  console.log(fruta, index); //Saída Banana 0, Pera 1, Maçã 2, Abacaxi 3, Uva 4
});