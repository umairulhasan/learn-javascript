// 2 Arrays u have 

const First = [1,2,3];
const Secound = [4,5,6]

// Now combine them together 

// First way

const combine = First.concat(Secound);   // [1,2,3,4,5,6]

// Second way

const combiNe = [...First, ...Secound]; // [1,2,3,4,5,6]  
// if u want to add some thing between them u can also add
 
// const combiNe = [...First,'a', ...Secuond , 'b'];  // [1,2,3,'a',4,5,6,'b']

const Clone = [...First]
console.log(Clone)  //[1,2,3]
console.log(First)  //[1,2,3]


// 2 object u have 


const first = {name: 'uamir', age:23}
const secound = {name: 'ul hassan', age:23}

const Combine = {...first , ...secound , location: 'rawalpindi'}  

// output
// {
//     name: 'ul hassan',
//     age: 23,
//     location: 'rawalpindi'
//   }

// you can also clone the object also

const clone = [...first]
console.log(Clone)  //{name: 'uamir', age:23}
console.log(First)  //{name: 'uamir', age:23}

