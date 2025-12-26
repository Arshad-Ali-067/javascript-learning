

// 1. Creating Symbols

// Create two symbols with the same description
const sym1 = Symbol('id');
const sym2 = Symbol('id');

// Symbols are unique, even if the description is the same
console.log("sym1 === sym2 ?", sym1 === sym2); // false

// You can see the description of a symbol for debugging
console.log("sym1 description:", sym1.description); // 'id'

// ===============================
// 2. Using Symbols as Object Keys
// 
// Symbols are often used as object keys to avoid name collisions
const USER_ROLE = Symbol('role');

const user = {
  name: 'Alice',
  age: 25,
  [USER_ROLE]: 'admin' // Using symbol as a property key
};

console.log("user.name:", user.name);           // Alice
console.log("user[USER_ROLE]:", user[USER_ROLE]); // admin

// Normal object property enumeration does not show symbol keys
console.log("Object.keys(user):", Object.keys(user)); // ['name', 'age']

// To get symbol properties, use Object.getOwnPropertySymbols()
console.log("Object.getOwnPropertySymbols(user):", Object.getOwnPropertySymbols(user)); // [Symbol(role)]

// ===============================
// 3. Global Symbols


// Symbol.for() creates or retrieves symbols from a global registry
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');

console.log("globalSym1 === globalSym2 ?", globalSym1 === globalSym2); // true

// You can retrieve the key name from a global symbol
console.log("Symbol.keyFor(globalSym1):", Symbol.keyFor(globalSym1)); // 'app.id'

// ===============================
// 4. Well-Known Symbols


// 4a. Symbol.iterator allows objects to be iterable
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

console.log("Iterating myIterable:");
for (const value of myIterable) {
  console.log(value); // 1, 2, 3
}

// 4b. Symbol.toStringTag allows customization of Object.prototype.toString
const myObj = {
  [Symbol.toStringTag]: 'CustomObject'
};
console.log(Object.prototype.toString.call(myObj)); // [object CustomObject]

// 4c. Symbol.hasInstance allows customizing instanceof behavior
class MyClass {
  static [Symbol.hasInstance](obj) {
    return obj.special === true;
  }
}

const obj1 = { special: true };
const obj2 = { special: false };

console.log("obj1 instanceof MyClass ?", obj1 instanceof MyClass); // true
console.log("obj2 instanceof MyClass ?", obj2 instanceof MyClass); // false

// ===============================
// 5. Summary Demonstration

console.log("\n--- Summary ---");

// 1. Symbols are always unique
console.log("Symbols are unique:", sym1 !== sym2);

// 2. Symbols as object keys avoid property name collisions
console.log("Symbols as object keys avoid collisions:", user[USER_ROLE]);

// 3. Global Symbols can be shared across code
console.log("Global Symbols can be shared:", globalSym1 === globalSym2);

// 4. Well-known symbols can customize object behavior
console.log("- Iteration: ", [...myIterable]);
console.log("- toStringTag: ", Object.prototype.toString.call(myObj));
console.log("- instanceof customization: ", obj1 instanceof MyClass, obj2 instanceof MyClass);
