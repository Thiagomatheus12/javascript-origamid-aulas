//use strict

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}
mostrarCarro()
// console.log(carro);
console.log('ola')

{
    var mes = 'Agosto';
    console.log(mes);
}

console.log(mes);

{
    var carro1 = 'uno';
    const ano = '2023'
}

console.log(carro1);
// console.log(ano);

for (let i = 0; i < 10; i++) {
    console.log(`numero ${i}`);
}
// console.log(i);

const data = {
    ano: 2023,
    mes: 'Agosto'
}
data.ano = 2022; // ele altera o valor
// data = 'janeiro'; // erro

let ano;
ano = 2023;
ano++;
console.log(ano);//2024

// let ano = 2020; // erro, redeclarou uma variável