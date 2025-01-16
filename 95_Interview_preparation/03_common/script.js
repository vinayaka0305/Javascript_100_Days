// Define an array `numbers` with initial elements 1, 2, 3, 4
//1...
// const numbers = [1, 2, 3, 4];

// // Assign the value 500 to the index 100 of the `numbers` array
// numbers[100] = 500;

// // Log the `numbers` array to the console
// console.log(numbers);
// // Output: [ 1, 2, 3, 4, <96 empty items>, 500 ]

// numbers.forEach((num, index) => {
//   console.log(`Index ${index} : ${num}`);
// });

// Only logs indices 0, 1, 2, 3, and 100 because the other slots are skipped.

///////////////////////////////////////////////////////////////////////////////////////2....
// Use the `typeof` operator on the value 100
// The first `typeof` evaluates the type of `100`, which is a number
// `typeof 100` results in the string "number"

// console.log(typeof typeof 100);

// The second `typeof` is applied to the result of the first `typeof`
// Since `typeof 100` gives the string "number", we now have `typeof "number"`
// The type of any string is always "string"

// Final output: "string"
/////////////////////////////////////////////////////////////////////////////////////

//3...
// Create an array by using the spread operator `...` on the string "vinayaka"

// // The spread operator splits the string into individual characters
// const arr = [..."vinayaka"];

// // Log the resulting array to the console
// console.log(arr);
// // Output: ["v", "i", "n", "a", "y", "a", "k", "a"]


//////////////////////////////////////////////////////////////////////////////

//4...

//with inbuilt method reverse()
// let username = "vinayaka";

// const reversedName = [...username].reverse().join('');

// console.log(reversedName);

//without inbuilt method

// let reversedName = '';

// for(let i=username.length-1;i>=0;i--){
//     reversedName += username[i]
// }

// console.log(reversedName);

/////////////////////////////////////////////////////////////////////////////////////

//5...

// Parsing the string "10+2" with parseInt
// console.log(parseInt("10+2")); 
// Output: 10
// Explanation: 
// - parseInt parses the string until it encounters a non-numeric character.
// - Here, it stops at the "+" and returns the parsed integer value "10".

// Parsing the string "7FM" with parseInt
// console.log(parseInt("7FM")); 
// Output: 7
// Explanation:
// - parseInt parses the string "7FM" from the start and stops at the first invalid character for the default radix (10).
// - "F" is not a valid digit in base 10, so the function stops and returns the parsed integer "7".

// Parsing the string "M7F" with parseInt
// console.log(parseInt("M7F")); 
// Output: NaN
// Explanation:
// - parseInt starts parsing from the beginning of the string.
// - "M" is not a valid numeric character in any supported base, so parsing fails, and it returns `NaN`.

////////////////////////////////////////////////////////////////////////////////////

//6..
// Use the `map` method on the array [1, 2]
// console.log([1, 2].map(num => {
//     // Check if the current number is greater than 0
//     if (num > 0) return;
//     // This line is never executed because the previous `return` exits the function early
//     return num * 2;
// }));

// If num > 0, the return statement executes, exiting the function and returning undefined for that element.

// For each element in the array, the function always returns undefined due to the early return.

// [undefined, undefined] output


/////////////////////////////////////////////////////////////////////////////////////

//7...

// 'use strict'

// {
//     function abc(){
//         console.log('vinayaka')
//     }
// }

// abc();

//in non-strict mode or older environments, functions defined in block scope may leak to outer scope, 

//Alway use let , const or strict mode to ensure proper scoping


// Block Scope: 

// The {} block creates a block scope.
// Functions declared inside a block are local to the block and cannot be accessed outside of it.

///////////////////////////////////////////////////////////////////////////////////

//7. window object

// What is Window Scope in JavaScript?

// The window scope refers to the global scope in a web browser environment. It is the highest level of scope, meaning all global variables, functions, and objects are properties of the window object.

// Global Object:

// The window object represents the global execution context in a browser.
// Any variable or function declared in the global scope is automatically added as a property of the window object.


// var globalVar = "I'm global";
// console.log(window.globalVar); // "I'm global"

// You can access any global variable or function via the window object.
// window.alert("Hello!"); // Calls the global `alert` function


// If you define a variable without var, let, or const, it is implicitly added to the window scope (not recommended).


// myVariable = 10; // Implicit global variable
// console.log(window.myVariable); // 10


// Browser-Specific:

// The window object exists only in browser environments. In Node.js or other non-browser environments, window is not available; instead, you use global.


/////////////////////////////////////////////////////////////////////////////////////

//8...
// "use strict" enforces strict rules for writing clean and secure code.

// It checks for undeclared variables, duplicate parameters, and other common mistakes.

function abc(a, b) {
    'use strict'; // Enables strict mode inside this function

    // Assign new values to the parameters `a` and `b`
    a = 100; // `a` is reassigned to 100
    b = 200; // `b` is reassigned to 200

    // Return the sum of the first and second arguments passed to the function
    return arguments[0] + arguments[1];
    // In strict mode, the `arguments` object does not reflect changes made to `a` and `b`.
    // `arguments[0]` is still 300, and `arguments[1]` is still 400 (the original passed values).

    // This line will never execute because the `return` statement exits the function
    console.log(a + b);
}

// Call the `abc` function with arguments 300 and 400
console.log(abc(300, 400));
// Output: 700
// Explanation:
// - `arguments[0]` is 300 (the first argument passed).
// - `arguments[1]` is 400 (the second argument passed).
// - The changes to `a` and `b` (100 and 200) do not affect the `arguments` object in strict mode.

/////////////////////////////////////////////////////////////////////////////////////
