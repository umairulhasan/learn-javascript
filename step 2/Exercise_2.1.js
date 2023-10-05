let a = window.prompt("Value 1?");    //3
let b = window.prompt("Value 2?");    //6
a = Number(a);  //3
b = Number(b);  //6
let hypotenuseVal = ((a * a) + (b * b))**0.5;
console.log(hypotenuseVal);



// let hypotenuseVal = ((a * a) + (b * b))**0.5; calculates the length of the hypotenuse using the Pythagorean theorem, where a * a represents the square of the length of one side, b * b represents the square of the length of the other side, and **0.5 calculates the square root to find the hypotenuse's length.

// console.log(hypotenuseVal); prints the calculated hypotenuse value to the console.


let a1 = 4;
let b1 = 11;
let c = 21;
a1 = a1 + b1;   //15
a1 = a1 / c;    //0.7142857142857143
c = c % b1;     //10
console.log(a1, b1, c);  //0.7142857142857143 11 10


//Convert miles to kilometers. 
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = 130;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");