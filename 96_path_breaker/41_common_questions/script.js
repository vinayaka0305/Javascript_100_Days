const arr = [1, ,3]; // An array with three elements, but the second element is missing (a sparse array).

console.log(1 in arr); 
// Checks if index 1 exists in the array.
// Since index 1 is empty (it’s not explicitly set to `undefined`, but missing), this returns `false`.

console.log(2 in arr); 
// Checks if index 2 exists in the array.
// Index 2 contains the value `3`, so this returns `true`.

console.log(arr.length); 
// The length of the array is determined by the highest index + 1.

// Even though index 1 is missing, the array length is still `3`.

/////////////////////////////////////////////////////////////////////////////////////
console.log(0.1 + 0.1 === 0.3);  
// 0.1 + 0.1 = 0.2 (exactly), which is NOT 0.3
// So, the result is: false

console.log((0.1 + 0.2).toFixed(2) === "0.30");  
// 0.1 + 0.2 results in 0.30000000000000004 due to floating-point precision issues
// (0.1 + 0.2).toFixed(2) rounds it to "0.30" (a string)
// "0.30" === "0.30" is true
// So, the result is: true

// Why Does This Happen?

// Floating-Point Precision Issue:
// JavaScript uses 64-bit floating-point numbers (IEEE 754 standard).
// Some decimal fractions (like 0.1 and 0.2) cannot be represented exactly in binary, causing small precision errors.
// 0.1 + 0.2 actually results in 0.30000000000000004, which is not exactly 0.3, so the first comparison fails.

// .toFixed(2) Fixes Precision for Display:
// toFixed(2) rounds 0.30000000000000004 to "0.30" (as a string).
// The string comparison "0.30" === "0.30" evaluates to true.

/////////////////////////////////////////////////////////////////////////////////////

const obj = { name: "vinayaka", age: 28 }; 
// Creating an object with two properties: "name" and "age".

const key = "name"; 
// Storing the string "name" in a variable called 'key'.

console.log(key in obj);  
// The 'in' operator checks if the key "name" exists in 'obj'.
// Since 'obj' has a property "name", this returns: true.

console.log("gender" in obj);  
// The 'in' operator checks if the key "gender" exists in 'obj'.
// Since 'obj' does NOT have a property called "gender", this returns: false.

/////////////////////////////////////////////////////////////////////////////////////

console.log(typeof null);  
// In JavaScript, 'null' is a **primitive value** that represents "no value" or "empty".
// However, due to a historical bug in JavaScript, 'typeof null' incorrectly returns "object".
// Expected output: "object"

console.log(null instanceof Object);  
// 'instanceof' checks whether an object is an instance of a particular class or constructor.
// 'null' is **not** an instance of 'Object' (it's a primitive value).
// Expected output: false

/////////////////////////////////////////////////////////////////////////////////////


