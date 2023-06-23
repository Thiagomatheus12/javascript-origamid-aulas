var x = 5;
var y = 10;
x += y; //x = x + y (15)
x -= y; //x = x - y (-5)
x *= y; //x = x * y (50)
x /= y; //x = x / y (0.5)
x %= y; //x = x % y (0)
x **= y; //x = x ** y (9765625)


//Operador Ternário
var idade = 19
var naoPossuiDiabetes = false
//Condição ? true : false;
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log('possui faculdade');
else console.log('Não possui faculdade')

//Ou
if (possuiFaculdade)
    console.log('possui faculdade');
else
    console.log('Não possui faculdade')