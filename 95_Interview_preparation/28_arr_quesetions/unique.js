// Input array with duplicate numbers
const arr = [1, 2, 2, 3, 3, 4, 4, 5];

// Function to return an array of unique numbers
function uniqueNumber(arr) {
    // Create a Set from the input array
    // Sets automatically store only unique values
    const unique = new Set(arr);

    // Convert the Set back to an array using Array.from
    // return Array.from(unique);
    return [...unique]
    // Use the spread operator to convert the Set into an array
}

// Call the function and log the result to the console
console.log(uniqueNumber(arr)); // Output: [1, 2, 3, 4, 5]
