function hi() {
  // Attempting to log 'name' before it's declared
  // This will log 'undefined' because 'var' is hoisted but not initialized yet
  console.log(name);

  // Attempting to log 'age' before it's declared
  // This will throw a ReferenceError because 'let' is hoisted but it's in the "temporal dead zone"
  console.log(age);

  var name = "Vinayaka"; // 'var' is hoisted, meaning the declaration is moved to the top, but initialization happens here
  // So above we saw 'undefined' because at the top, 'name' is declared but not yet initialized

  let age = 28; // 'let' is hoisted too, but it doesn't get initialized until this line, causing the earlier ReferenceError
}

// Call the function
// hi();

// Hoisting: Both var and let are hoisted, but in different ways.

// var is hoisted and initialized with undefined, so it can be accessed before its declaration without throwing an error, but the value will be undefined.

// let is hoisted but not initialized, so accessing it before its declaration will result in a ReferenceError.

// Temporal Dead Zone (TDZ): This is the period between the start of the function and the initialization of the let variable, where the variable exists but can't be accessed.

// When the function is called:

// console.log(name) logs undefined because the declaration of var name is hoisted, but it's initialized only later.//global scope

// console.log(age) throws a ReferenceError because age is declared with let and is in the temporal dead zone until its initialization.//block scope

//////////////////////////////////////////////////////////////////////////////////////

let a = 3;              // 'a' is a primitive number
let b = new Number(3);   // 'b' is an object of type 'Number', created using the Number constructor
let c = 3;              // 'c' is another primitive number

// Loose equality (==) only checks for value equivalence and allows type coercion
console.log(a == b); 
// a is a primitive number (3) and b is a Number object containing the number 3
// JS coerces the 'b' object to its primitive value, so this returns true

// Strict equality (===) checks both value and type without coercion
console.log(a === b); 
// a is a primitive number (3) and b is an object (Number object)
// Since the types are different (primitive vs object), this returns false

// Strict equality (===) between b (Number object) and c (primitive number)
console.log(b === c); 
// b is still an object and c is a primitive number
// Since their types are different (object vs primitive), this returns false

/////////////////////////////////////////////////////////////////////////////////////


let greeting; 
// 'greeting' is declared but not initialized, so its value is currently 'undefined'

greeting = {}; 
// 'greeting' is now assigned an empty object literal, so it's no longer 'undefined'.
// The value of 'greeting' is now an empty object {}

console.log(greeting); 
// This will log the empty object {} to the console.
