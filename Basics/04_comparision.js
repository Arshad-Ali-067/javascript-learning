
//comparision operators:
// console.log(2 > 1);  
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);
const numd = '03'
console.log(numd >1)
/*When comparing a string with a number, JavaScript will convert the string to a
 number when doing the comparison. An empty string converts to 0. A non-numeric string
 converts to NaN which is always false. */


console.log(null > 0); //false
console.log(null == 0);//false 
console.log(null >= 0);//true 

console.log(undefined == 0); // false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
/*Comparisons convert null to a number, treating it as 0 . That's why (3) null >= 0 is
 true and (1) null > 0 is false. On the other hand, the equality check == for undefined
  and null is defined such that, without any conversions, they equal each other and 
  don't equal anything else. That's why (2) null == 0 is false*/





// === 
//This is also check a datatype 
//if value is same but datatype is not equal then code will not run!
console.log("2" === 2); //false