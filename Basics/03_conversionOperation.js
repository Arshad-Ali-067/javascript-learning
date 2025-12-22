// ***************conversion *****************

let isthat = 1000
 let isthatboolean= Boolean(isthat)
  
//  console.log(  isthatboolean)
// console.log( typeof isthatboolean)
 // boolean => give true if value is 1 or positive or negitive  and give false if value is 0





let score ="44e"

//console.log( typeof score);
//console.log(typeof( score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
 console.log( valueInNumber)
// console.log( typeof valueInNumber)
// string"33" => 33
// |"33abc" => NaN( not an number( type is number but  value is NaN))
// true => 1;false => 0

let isLoggedIn ="hello"

//let booleanIsLoggedIn = Boolean( isLoggedIn)
//console.log( booleanIsLoggedIn);

// 1=> true; 0 => false
// (empty string)"" => false
// "hello"=> true

let someNumber = 33

let stringNumber = String( someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);



//******************************* OPERATIONS **********************************************
 
//normal operations like +,-,*,/,%.
// we can use operations on various datatype like string, number,
//some important 

let bool1= 3
let bool2 = 3
let bool3 = Boolean(bool1 + bool2) 
let bool4 = Boolean(bool1 - bool2) 
console.log(bool3);
console.log(bool4);

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " world !"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); if the string is first so the other datatype will be  convert into a string
// console.log(1 + "2"); behave same 
// console.log("1" + 2 + 2); if string is first so it convert other datatype into a string
/* console.log(1 + 2 + "2"); if there are same two datatype and one string so operation 
will apply on those and  that add with string */

console.log( (3 + 4) * 5 % 3);
//here you can recall associativity:
//link:https://www.w3schools.com/js/js_precedence.asp

// console.log(+true);
// console.log(+"");// type coercion rules.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

Note: 

What Is ToPrimitive?
In JavaScript, everything isn’t always a simple value — some things are objects.
But when JavaScript needs a simple value (like a number or string), it tries to
convert objects into primitive values (like a string, number, or boolean). 
This process is called ToPrimitive.

So What Does ToPrimitive Do?
If the value is already a primitive (like "hello", 5, true, null, etc.), JavaScript just returns it as-is.

If it’s an object, JavaScript will:

Check if the object has a special method called Symbol.toPrimitive that tells it how to become a primitive.

If not, it falls back to using the object's valueOf() and toString() methods.

It chooses between returning a number or a string, based on what type is needed at the time.

 Example: Using + on an Object


let obj = {
  valueOf() {
    return 10;
  }
};

console.log(+obj); // 10


The + operator wants a number, so ToPrimitive uses valueOf() to get 10.


Another example:


let obj = {
  toString() {
    return "hello";
  }
};

console.log(obj + " world"); // "hello world"
The + operator with a string uses toString(), because it expects a string.




 What’s the difference between ToNumber() and ToNumeric()?
Operation	What it does
ToNumber()	Always converts to a Number
ToNumeric()	Converts to Number or BigInt









*/