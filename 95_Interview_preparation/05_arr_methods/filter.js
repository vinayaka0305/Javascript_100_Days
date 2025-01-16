const arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
// Define an array of numbers

const newArr = arr.filter(num => num > 4); 
// Use the `filter` method to create a new array containing all elements from the original array that satisfy the condition `num > 4`.
// The `filter` method checks each element of the array and includes it in the new array if the condition is true.

console.log(newArr); 
// Output: [5, 6, 7, 8]
// Explanation:
// - The `filter` method iterates through all the elements in the array.
// - It includes the numbers 5, 6, 7, and 8 in the new array because they are greater than 4.
