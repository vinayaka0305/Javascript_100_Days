// Define a primitive number variable
let a = 10;

// Define a variable using the Number object (creates an object wrapper for the number)
let b = new Number(10);

// Define another primitive number variable
let c = 10;

// Compare the primitive `a` with the object `b` using strict equality (===)
// Strict equality checks both the type and value. 
// `a` is a primitive number, while `b` is an object created using `new Number()`. 
// Even though their values (10) are the same, their types are different (primitive vs. object).
// Therefore, the result is false.
// console.log(a === b); // Output: false

// a is a primitive number (10), while b is a Number object (an object wrapper around the number 10).
// Strict equality (===) checks both the type and the value. Since a is a primitive and b is an object, the result is false.

/////////////////////////////////////////////////////////////////////////////////////

// Use the unary plus operator (`+`) on the boolean value `true`
// The unary plus operator attempts to convert its operand into a number
// `true` is coerced to the number 1, so the result is 1
console.log(+true); // Output: 1

// Use the logical NOT operator (`!`) on the non-empty string "xyz"
// The logical NOT operator converts its operand to a boolean and then negates it
// Non-empty strings are considered `truthy`, so `"xyz"` is `true`
// Negating `true` results in `false`
console.log(!"xyz"); // Output: false
