//Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 26;
var idadeParente = 56;

//Dependendo do resultado coloque no console 'É maior', 'É menor'.
if(minhaIdade > idadeParente) {
  console.log('É maior')
}else if(minhaIdade === idadeParente) {
  console.log('É igual')
} else {
  console.log('É menor')
}

//Qual o valor retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//retornará 3, ele sempre retorna o último valor verdadeiro que ele achar ou o primeiro valor falso
console.log(expressao)

//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Thiago'; //Truthy uma string com valor dentro são consideradas verdadeiras
var idade = 26; //Truthy um Number que não seja 0 ou -0 é considerado verdadeiro
var possuiDoutorado = false; //Falsy por ele ja estar atribuido a um valor false
var empregoFuturo; // Falsy por ser undefined 
var dinheiroNaConta = 0; //Falsy porque valor 0 ou -0 são considerados falsos no javaScript.

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil com a China
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem maios habitantes')
}else {
  console.log('Brasil tem menos habitantes')
}

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('verdadeiro')
} else {
  console.log('falso')
} //falso