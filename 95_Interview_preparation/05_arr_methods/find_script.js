const arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
// Define an array of numbers

const newArr = arr.find((num) => num > 4); 
// Use the `find` method to locate the first element in the array that satisfies the condition `num > 4`
// The `find` method stops as soon as it finds the first matching element.

console.log(newArr); 
// Output: 5
// Explanation:
// - The `find` method starts checking each element from the beginning of the array.
// - It finds that `5` is the first number greater than 4, so it returns `5`.
// - Only the first matching value is returned; the rest of the array is not checked.


// Key Points About find Method:
// Purpose:

// The find method returns the first element in the array that satisfies the provided testing function.
// If no element satisfies the condition, it returns undefined.
// Does Not Modify the Original Array:

// The find method does not mutate the original array; it simply returns the matching element.
// Difference from filter:

// While filter returns all elements that match the condition in a new array, find returns only the first matching element.