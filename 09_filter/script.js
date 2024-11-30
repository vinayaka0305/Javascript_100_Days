const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Declare an array 'arr' with numbers from 1 to 10.


// Use the filter() method to create a new array 'newArr'.
// filter() loops through each element in 'arr' and applies the provided function.
// The function returns 'true' for elements that pass the condition (currVal > 5),
// and 'false' for elements that don't. Only elements that return 'true' are included in 'newArr'.
const newArr = arr.filter((currVal) => currVal > 5); 
// 'currVal' represents the current element in the array during each iteration.
// The condition checks if the current value is greater than 5. If true, the value is included in 'newArr'.

console.log(newArr); // Output the new array 'newArr'. Result: [6, 7, 8, 9, 10]
