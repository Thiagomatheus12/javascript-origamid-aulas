// imgs = document.querySelectorAll('img');


// imgs.forEach(function(item, index, array){
//   // console.log(item, index, array)
// })

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos)
// console.log(titulos)
// console.log(titulosArray)

titulosArray.forEach(function(item){
  // console.log(item)
})

imgs = document.querySelectorAll('img');


imgs.forEach(item => {
  // console.log(item)
})

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// })

let i = 0;
imgs.forEach((item) => console.log(i++));