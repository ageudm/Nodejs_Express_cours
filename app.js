//GLOBALS - NO WINDOWS

// __dirname - path to curent director
// __filename - file name
// riquire - function to use modules (commonJS)
// module - infon about curent module (file)
// process - info about env whre the program is being executed


// console.log(__dirname)

// setInterval(() => {
//     console.log('helo word')
// }, 1000)

const names = require('./2-variables');
const sayHelo = require('./3-utilits');
const soma = require('./3-utilits');
const person = require('./4-object-impport')

require('./3-utilits') //executar os dados de outro documento sem expotar



sayHelo(names.miguel)
soma(20, 30);
console.log(person.singlePerson);
