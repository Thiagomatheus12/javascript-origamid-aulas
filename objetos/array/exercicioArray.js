const food = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const firstValue = food.shift()
console.log(firstValue)
const lastValue = food.pop()
console.log(lastValue)
food.push('Arroz')
food.unshift('Peixe')
console.log(food)

const students = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
students.sort()
console.log(students)
students.reverse()
console.log(students)
console.log(students.includes('Joana'))
console.log(students.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul')
html = html.split('div').join('li')
console.log(html)


const cars = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCars = cars.slice()
console.log(cloneCars)
const lastCar = cars.pop()
console.log(lastCar)
console.log(cars)
