// Date : Date is an object in javascript. 

// JavaScript stores dates as number of milliseconds since January 01, 1970


//---Extra--
/*In JavaScript, methods are used to manipulate objects. They are written in the same way
as functions, but they are defined within the object. Methods are usually used to access
and manipulate the data stored in an object. For example, you can use the length method
to find out the length of a string. 


An object is a collection of key-value pairs. The values can be any data type—including functions.

A method is simply a function that is defined inside an object.
   
   */

let my_date = new Date()

console.log(my_date) //Output :2024-09-13T14:17:32.913Z
// We can use various methods to convert this date into more readable value.
console.log(my_date.toString()) //Output : Fri Sep 13 2024 19:47:32 GMT+0530 (India Standard Time)


console.log(my_date.toDateString())// output:Fri Sep 13 2024
console.log(my_date.toLocaleDateString())// output: 13/9/2024
console.log(my_date.toJSON())//output:2024-09-13T14:17:32.913Z
console.log(my_date.toISOString()) //output:2024-09-13T14:17:32.913Z
console.log(my_date.toLocaleString())// output:13/9/2024, 7:47:32 pm
console.log(typeof my_date)//object





// To create the date by passing arguments
//let created_date = new Date(2023,0,24,5,4,5) 
// we can also write dates in digit like this 
// imortent the month start with 0 because this is  array so basically 0 means january
let created_date = new Date("01-02-2024")// we can also write date like this
console.log(created_date.toLocaleDateString());
console.log(created_date.toDateString());
console.log(created_date.toLocaleString());




let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(created_date.getTime());

console.log(myTimeStamp/1000);
console.log(Math.floor(myTimeStamp/1000));



let NewDate = new Date()

console.log(NewDate.getDay());
console.log(NewDate.getFullYear());
console.log(NewDate.getHours());
console.log(NewDate.getMonth());
console.log(NewDate.getTimezoneOffset());


//we can also customize the method 

console.log(NewDate.toLocaleString('default',{
     weekday:"long"

})
)


//---Extra--
/*In JavaScript, methods are used to manipulate objects. They are written in the same way
 as functions, but they are defined within the object. Methods are usually used to access
  and manipulate the data stored in an object. For example, you can use the length method
   to find out the length of a string. */