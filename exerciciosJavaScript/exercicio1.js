// Exercício 1: Cálculo da área de um retângulo
// Crie um objeto chamado retangulo com propriedades largura e altura. Em seguida, adicione um método chamado calcularArea que retorna a área do retângulo 
// console.log(retangulo.calcularArea());
const rectangle = {
  width: 10,
  height: 2,
  calculateArea: () => {
    return rectangle.width * rectangle.height
  }
}
console.log(rectangle.calculateArea());

// Exercício 2: Conversão de temperatura
// Crie um objeto chamado temperatura com uma propriedade celsius. Adicione um método chamado converterFahrenheit que retorna a temperatura em graus Fahrenheit
// console.log(temperatura.converterFahrenheit());
const temperature = {
  celsius: 19,
  converterFahrenheit: () => {
    return (temperature.celsius * 1.8) + 32
  }
}
console.log(temperature.converterFahrenheit());

// Exercício 3: Verificação de palíndromo
// Crie um objeto chamado palindromo com uma propriedade frase. Adicione um método chamado verificarPalindromo que verifica se a frase é um palíndromo
// console.log(palindromo.verificarPalindromo());

const palindrome = {
  phrase: 'o lobo ama o bolo',
  checkPalindrome: function () {
    const textWithoutSpace = this.phrase.replace(/\s+/g, '').toLowerCase();
    const reversedText = textWithoutSpace.split('').reverse().join('');
    return reversedText === textWithoutSpace;
  }
}
console.log(palindrome.checkPalindrome());

// const palindrome = {
//   phrase: 'o lobo ama o bolo',
//   checkPalindrome: function() {
//     if (!this.phrase) {
//       console.log('A frase não está definida.');
//       return false;
//     }

//     const textWithoutSpace = this.phrase.replace(/\s+/g, '').toLowerCase();
//     const reversedText = textWithoutSpace.split('').reverse().join('');
//     return reversedText === textWithoutSpace;
//   }
// };

// Exercício 4: Contador de vogais
// Crie um objeto chamado contadorVogais com uma propriedade frase. Adicione um método chamado contarVogais que retorna a quantidade de vogais presentes na frase.
// console.log(contadorVogais.contarVogais());
const vowelCounter = {
  phrase: 'Hello, world!',
  countVowels: function () {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    const phraseLowerCase = this.phrase.toLowerCase();
    for (let i = 0; i < phraseLowerCase.length; i++) {
      if (vowels.includes(phraseLowerCase[i])) {
        counter++;
      }
    }
    
    return counter;
  }
};

console.log(vowelCounter.countVowels());


// Exercício 5: Concatenação de objetos
// Crie dois objetos chamados objeto1 e objeto2. Cada objeto deve ter uma propriedade texto. Adicione um método chamado concatenarTextos que retorna a concatenação dos textos dos dois objetos.
// console.log(concatenador.concatenarTextos());
const concatenator = {
  object1: {
    text: 'texto'
  },
  object2: {
    text: 'texto2'
  },
  concatenateTexts: () => {
    return `${concatenator.object1.text} ${concatenator.object2.text} `;
  }
}

console.log(concatenator.concatenateTexts());


// const concatenator = {
//   object1: {
  //     text: 'texto1'
  //   },
  //   object2: {
    //     text: 'texto2'
    //   },
    //   // ... adicione mais objetos aqui ...
    //   object100: {
      //     text: 'texto100'
      //   },
      //   concatenateTexts: () => {
        //     const objects = [concatenator.object1, concatenator.object2 , concatenator.object100/* ... adicione mais objetos aqui ... */];
        
        //     let concatenatedText = '';
//     for (let i = 0; i < objects.length; i++) {
  //       const object = objects[i];
  //       if (object && object.text) {
    //         concatenatedText += object.text + ' ';
    //       }
    //     }
    
    //     return concatenatedText.trim();
    //   }
    // };
    
    // console.log(concatenator.concatenateTexts());
    
    