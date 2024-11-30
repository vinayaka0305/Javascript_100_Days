// Function to find the first missing integer within the specified range
function findMissing(arrayofIntegers, upperbound, lowerbound) {
    // Loop through each number from lowerbound to upperbound
    for (let i = lowerbound; i <= upperbound; i++) {
        // Check if the current number 'i' is not present in the array
        if (!arrayofIntegers.includes(i)) {
            // Return the first missing number found
            return i;
        }
    }
    // If all numbers in the range are present, return null
    return null;
}

// Example usage:
let res = findMissing([1, 2, 3, 5], 5, 1); // Looking for missing numbers in the range [1, 5]
console.log(res); // Output: 4 (since 4 is missing)
