const arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
// Define an array of numbers

const newArr = arr.map((num) => num > 4); 
// Use the `map` method to create a new array.
// For each element in the array, the callback function `num > 4` is executed.
// This will return `true` if the number is greater than 4 and `false` otherwise.
// The `map` method transforms each element of the array into the result of the callback function.

console.log(newArr); 
// Output: [false, false, false, false, true, true, true, true]
// Explanation:
// - The `map` method processes each element of the array:
//   1 > 4 → false
//   2 > 4 → false
//   3 > 4 → false
//   4 > 4 → false
//   5 > 4 → true
//   6 > 4 → true
//   7 > 4 → true
//   8 > 4 → true
// - A new array of boolean values is created based on whether each element satisfies the condition `num > 4`.


// Key Points About map Method:
// Purpose:

// The map method creates a new array by transforming each element of the original array based on the callback function's return value.
// Non-Mutating:

// The map method does not change the original array. It returns a new array.
// Transforms Each Element:

// The result of the callback function for each element is used as the corresponding element in the new array.
// Use Case:

// Use map when you want to apply a transformation to each element of the array (e.g., modifying values, converting types).
