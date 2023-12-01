// in javascript
const Person = {
    name : 'Umair',
    walk: function() {}  // function in object but in oop we call it method because they declear inside the object
};
 


// in ES6 formation
const Person2 = {

    name : 'Umair',
    walk() {}
}

// 2 ways for access the object properties 

Person.name   // Number 1
Person.walk() // Number 1


Person['walk'] // Number 2
Person['name'] // Number 2

Person.name =  "Umairc" // for dynamic change   


                                           // This  key word

// const Person = {

//     name : 'Umair',
//     walk() {console.log(this)}
                                     //optional code for reminder  this.name   returns  (Umair)
// }
// Person.walk();

// output
// { name: 'Umair', walk: ƒ walk() }

// This always return a reference to the current object 
// in this case they return the person object but they work only in method (Imp)not in function
