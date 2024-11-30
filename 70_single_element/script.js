// Defines a function 'findSingle' that takes an array 'arr' as input
// This function finds the single non-repeated element in an array where each other element appears twice
const findSingle = (arr) => {
    // Uses the reduce method to iterate through the array and apply XOR operation on each element
    // XOR with 0 keeps the number unchanged (initial value of 0 is set)
    // XORing a number with itself results in 0, so pairs cancel out, leaving only the single unique number
    return arr.reduce((acc, num) => acc ^ num, 0);
}

// Calls the function 'findSingle' with an example array and logs the result to the console
// The array [1,1,2,2,3,4,4] has every element repeated except for '3', which is the unique element
console.log(findSingle([1,1,2,2,3,4,4])); // Expected output: 3
