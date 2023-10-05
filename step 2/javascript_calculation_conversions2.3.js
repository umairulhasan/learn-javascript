let nr1 = 2;
let nr2 = "2";        //JavaScript will perform type coercion to try to convert the string "2" to a number 
console.log(nr1 * nr2);
4
let nr1o = 2;    //In your code, nr1 is a number, and nr2o is a string that contains the character "2". When you use nr1o + nr2o, JavaScript will perform string concatenation because one of the operands (nr2o) is a string
let nr2o = "2";
console.log(nr1o + nr2o);

// let nrToStr = 6;    
// nrToStr = String(nrToStr);                '6'
// console.log(nrToStr, typeof nrToStr);      '6' 'string'