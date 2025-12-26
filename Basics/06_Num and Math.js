const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

//tostring() method used to convert object into string.
console.log(balance.toString().length);
//length method used to measure length of a string.
//console.log(balance.toFixed(1)); // it is used to show number after decimal if 
//we give it 1 it show the one digit after a decimal e.g 100.0

const otherNumber = 12.8966

 console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//The .toLocaleString('en-IN') method in JavaScript is used to convert a number or date into a string formatted according to Indian English locale conventions.
// +++++++++++++ Maths +++++++++++++++++++++++++++++

//----- Maths in JS ----
//Maths library comes along with JS 




//Methods ----
 Math.abs() // Converts +ve / -ve integer values to positive
 Math.round(4.3) // Output :4
 Math.round(4.6) // Output : 5
 Math.ceil(4.2) // Output : 5 (gives top value)
 Math.floor(4.9) // Output : 4 (gives bottom value)
 Math.min(4,3,6,8) // Output : 3
 Math.max(4,3,6,8) // Output : 8
 Math.random() // Gives random value between 0 & 1 in decimals
//it only take a seperate single argument 
//if you want to apply it on array you will need seperator operation
//example. console.log(Math.min(...arr1))
console.log(Math.random()); //give the random value between 0 or 1 
console.log((Math.random()*10) + 1); /* so we can multiply it with 10 it give above
 number then 1 and we can also add 1 so it can return minimum number 1 */ 

console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula to randomize 
//number between range


/*Math.random() tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
(Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1) + min))*/




//for example 4 digit OTP generator 

// we define min and max value 

let minimum_value = 1000 //smallest 4 digit value
let maximum_value = 9999 // largest 4 digit value

// now we use this formule to randomize number between this range------

console.log(Math.floor(Math.random()*( maximum_value - minimum_value +1 ) + minimum_value))