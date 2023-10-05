const myName = "Umair";
const myAge = 27;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge+" years old and I can code JavaScript: " + coder + "."; 
console.log(message); 

// Hello my name is "Umair" I am "27" years old and I cancode JavaScript: "true".

let bool1 = false;
let bool2 = true;
console.log(typeof bool1)
//'boolean'
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
//'These two strings are the same:' true
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);
//'These two Symbols are the same:' false