function f1() {
    return 2; // f1 is a function that returns the value 2
}

function f2() {
    return 4; // f2 is a function that returns the value 4
}

// The comma operator evaluates both f1() and f2() but only returns the result of the last expression (f2())
let a = (f1(), f2()); 

// Logs the value of `a` to the console, which will be the result of f2(), i.e., 4
// console.log(a);

/////////////////////////////////////////////////////////////////////////////////////


// Define an array of strings
const arr = ["one", "two", "three"];

// Define a string variable
const word = "Hello";

// Check if the array includes the string "on"
// This will return false because "on" is not an element in the array
const arr1 = arr.includes("on");

// Check if the string 'word' includes the substring 'll'
// This will return true because "Hello" contains "ll"
const str = word.includes('ll');

// Check if the array includes the string "onetwo"
// This will return false because "onetwo" is not an element in the array
const arr2 = arr.includes('onetwo');

// Log the results of the checks
// console.log(arr1); // Output: false
// console.log(str);  // Output: true
// console.log(arr2); // Output: false


// The .includes() method for arrays checks for an exact match with the elements of the array, not for substrings or combinations of the elements. This is why both arr.includes("on") and arr.includes("onetwo") return false.

/////////////////////////////////////////////////////////////////////////////////////

// Compare true (boolean) with an empty string ('') using loose equality (==)
// Loose equality performs type coercion, meaning it converts both values to a common type before comparison.
// The empty string is coerced to `false`, so the comparison becomes `true == false`, which evaluates to false.
console.log(true == ''); // Output: false

// Compare true (boolean) with an empty string ('') using strict equality (===)
// Strict equality does not perform type coercion. It checks both value and type directly.
// Since `true` is a boolean and `''` is a string, they are not of the same type, so the result is false.
console.log(true === ''); // Output: false

// Compare the string '1' with the number 1 using loose equality (==)
// Loose equality performs type coercion. The string '1' is coerced into the number 1 before comparison.
// After coercion, the values are both 1 (number), so the result is true.
console.log('1' == 1); // Output: true







