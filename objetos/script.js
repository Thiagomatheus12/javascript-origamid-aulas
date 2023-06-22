var pessoa = {
    nome: 'Thiago',
    idade: 26,
}

console.log(pessoa.nome)

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado
    }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

console.log(Math.random())

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    metadeHeight() {
        return this.height / 2;
    }
}
menu.backgroundColor = '#000'
var bg = menu.backgroundColor