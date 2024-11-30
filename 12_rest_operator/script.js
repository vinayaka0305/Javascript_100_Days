// Defining an array of hero names
// const heros = ["steve", "thor", "hulk", "iron-man"]

// Array destructuring with the rest operator
// firstName gets the first element "steve", secondName gets "thor"
// otherNames collects the rest of the elements ["hulk", "iron-man"] using the rest operator
const [firstName, secondName, ...otherNames] = ["steve", "thor", "hulk", "iron-man"];

// Logging the first element
console.log(firstName); // Logs "steve"

// Logging the second element
console.log(secondName); // Logs "thor"

// Logging the rest of the elements as an array
console.log(otherNames); // Logs ["hulk", "iron-man"]

// Rest Operator (...):

// Purpose: Used to collect the remaining elements in a destructuring assignment.
// Example: In the array destructuring (...otherNames), it gathers all the elements that aren't explicitly assigned to the other variables (firstName, secondName).
// Usage: Primarily used in function arguments and destructuring to represent the "rest" of the values.
// Behavior: Collects the rest of the elements into an array.


const [a, b, ...rest] = [1, 2, 3, 4, 5];
// a = 1, b = 2, rest = [3, 4, 5]


//spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // newArr = [1, 2, 3, 4, 5]
// Spread Operator (...):

// Purpose: Used to spread or expand elements from an array (or object properties) into individual elements or values.
// Example: You can use it to combine arrays or pass elements to a function.
// Usage: Often used in function calls, array concatenation, or object merging.
// Behavior: Expands an array (or object) into its individual elements
// Key Difference:
// Rest is used to collect remaining elements into a single array.
// Spread is used to unpack an array or object into individual elements or properties.