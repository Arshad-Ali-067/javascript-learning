const accountId = 1234;
//const have fix value it can't be change once it is declare.
let accountEmail = "hello@google.com";
//let is a variable which we can be modified.
var accountpassword = "3254545";
// var is variable in old js but we don' use because of block scop.
accountcity = "jaipur";
let accountstate;
/* 
when we leave the var empty
the terminal show undifined */
accountEmail = "world@google.com";

accountpassword = "56454543";
accountcity = "pune";

/*  prefer not to use var
 because  of issues in block scope and functional scope  */

console.table([
  accountId,
  accountEmail,
  accountpassword,
  accountcity,
  accountstate,
]);
// this is console.table we can show multiple value at once in the tabular format using this.
//we pass array of variables as argument.