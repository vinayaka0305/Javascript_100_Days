// Define the numOfword function that calculates the number of words in a given string
function numOfword(input) {
    // Use the split method to divide the input string into an array of words
    // Split is based on spaces (' ') to separate words
    let result = input.split(' ').length;

    // Return the length of the resulting array, which represents the number of words
    return result;
}

// Call the numOfword function with the input string "Hi vinayaka"
// Log the result to the console
console.log(numOfword("Hi vinayaka")); // Expected output: 2
