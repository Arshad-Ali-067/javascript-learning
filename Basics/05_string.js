const name = "Salman"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
/*Returns a portion of the string from start to end (but not including end).
It supports negative indexes (which count from the end of the string). */
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
//includes method checks that argument string exist in the present string or not.
console.log(gameName.split('-'));
/*📌 .split() in JavaScript – Short Note
Purpose: Splits a string into an array of substrings based on a specified separator.

Syntax:

string.split(separator, limit);


Returns: An array (which is an object) of substrings.

Common Use Cases:

Splitting words: "Hello world".split(" ") → ["Hello", "world"]

Breaking characters: "abc".split("") → ["a", "b", "c"]

Parsing CSV: "a,b,c".split(",") → ["a", "b", "c"]

Key Points:

The separator can be a string or a regex.

If separator is "", it splits into characters.

If omitted, it returns the whole string in an array. */




//masking in js

/*let card = "1234567812345678";
let masked = card.slice(-4).padStart(card.length, "*");
console.log(masked); // ************5678


padStart() pads the beginning of a string with another string until it reaches a specified length.

*/
