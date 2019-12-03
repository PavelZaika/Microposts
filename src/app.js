// CommonJS Module Syntax
const person = require('./myModule1');

//ES2015 Module
import {person2, sayHi} from './MyModule2';

// Import all as
// import * as mod from './MyModule2';  
// console.log(mod.person2.name);
// console.log(mod.sayHi());

//Import by default
 import greeting from './MyModule2';

console.log(person.name);

console.log(person2.name);
console.log(sayHi());

console.log(greeting);