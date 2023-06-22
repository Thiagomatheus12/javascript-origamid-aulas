function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2))

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total)

function imc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu'
    } else if (cor === 'verde') {
        return 'Eu gosto do mato'
    } else {
        return 'Eu não gosto de cor'
    }
}

console.log(corFavorita('verde'));

addEventListener('click', function () {
    console.log('olá')
});

function terceiraIdade(idade) {
    console.log(typeof idade)
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número'
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(30));


function faltaVisitar(paisesVisitados) {
    var totalpaises = 193;
    return `Falta visitar ${totalpaises - paisesVisitados} paises`
}

console.log(faltaVisitar(10))