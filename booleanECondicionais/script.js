var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Não possui doutorado')
} else if (possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui nada')
}

var nome = 1;
if (nome) {
    console.log(nome)
} else {
    console.log('Não possui nome')
}



var condicional = (5 - 10) && (5 + 5)
if (condicional) {
    console.log('verdadeiro', condicional);
} else {
    console.log('falso')
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2)

var corFavorira = 'amarelo'

switch (corFavorira) {
    case 'azul':
        console.log('Olhe para o céu');
        break;
    case 'amarelo':
        console.log('Olhe para o sol')
        break;
    default:
        console.log('feche os olhos');
}