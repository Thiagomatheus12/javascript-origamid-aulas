//Retorne no console todas a imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

//Retorne no console apenas as imagens que começarem com a palavra imagem
const imagensSelecionadas = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensSelecionadas);
//Selecione todos os links internos(onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno)

//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

//Também funcionaria
const animaisDescricao = document.querySelector('.animais-descricao');
const h2Animais = animaisDescricao.querySelector('h2');
console.log(h2Animais)

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);

