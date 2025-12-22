  "use strict"; // treat all js code as newer version 
  // alert(3+3) // we are using nodejs, not browser

  console.log(3
    +3)       
 // code readability should be high
   console.log("Hello")

  let name ="hello"
  let age = 16
  let isloggedIn = false

  //number=> 2 to power 53
  //bignit
  //string=> ""
  //boolean=> true/false
  // null=> stadalone value
  //undefined=>
  // symbol=> unique


  //object


console.log(typeof "hello");
console.log(typeof age);

/*
null is a value that you explicitly assign to a variable to signify that it has no value.

undefined means that a variable has been declared but has not been assigned a value.
Example: 

let a;  // a is declared but not initialized
let b = null;  // b is explicitly set to null

console.log(a);  // Output: undefined
console.log(b);  // Output: null

*/


//constructor way or literal way to declare and initialize a variable

/*
**literal way**
// String
let name = "Alice";

// Number
let age = 30;

// Boolean
let isStudent = true;

// Array
let numbers = [1, 2, 3];

// Object
let person = { name: "Alice", age: 30 };

// Function
function greet() {
  console.log("Hello!");
}



**constructor way**

// String
let name = new String("Alice");

// Number
let age = new Number(30);

// Boolean
let isStudent = new Boolean(true);

// Array
let numbers = new Array(1, 2, 3);

// Object
let person = new Object({ name: "Alice", age: 30 });

// Function
let greet = new Function("console.log('Hello!')");



//Drawbacks of using constructor way with literal way

Creates wrapper objects instead of primitive values (e.g., typeof new String("Alice") is "object")

Can lead to unexpected behavior in comparisons:


let x = "Alice";
let y = new String("Alice");
console.log(x == y);  // true
console.log(x === y); // false (different types)

////////////another example/////////////
let names = new String("arna")
let named = "alice"
console.log(typeof names)//object
console.log(typeof named)//string



*/