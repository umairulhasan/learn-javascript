let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;

let bigNr = 90071992547409920n;
// typeError
let result = bigNr + intNr;


// let intNr = 1;: This declares a variable intNr and assigns it the value 1. This is a regular integer.

// let decNr = 1.5;: This declares a variable decNr and assigns it the value 1.5. This is a floating-point number.

// let expNr = 1.4e15;: This declares a variable expNr and assigns it the value 1.4e15. This is a floating-point number in exponential notation, representing 1.4 multiplied by 10 to the power of 15.

// let bigNr = 90071992547409920n;: This declares a variable bigNr and assigns it a BigInt value 90071992547409920n. BigInts are used to represent arbitrarily large integers.

// let result = bigNr + intNr;: In this line, you are trying to add a regular integer (intNr) to a BigInt (bigNr). This operation should work without any errors because JavaScript can handle operations between BigInts and regular numbers.

// So, there should be no TypeError in this code, and result will contain a BigInt with the value 90071992547409921n, which is the result of adding bigNr and intNr.