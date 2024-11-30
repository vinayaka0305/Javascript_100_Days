// Define the reverseAstring function that reverses a given string
function reverseAstring(input) {
    // Step 1: Split the input string into an array of characters using split('')
    // Example: "vinayaka" becomes ['v', 'i', 'n', 'a', 'y', 'a', 'k', 'a']
    let charArray = input.split('');
    
    // Step 2: Reverse the array of characters using the reverse() method
    // Example: ['v', 'i', 'n', 'a', 'y', 'a', 'k', 'a'] becomes ['a', 'k', 'a', 'y', 'a', 'n', 'i', 'v']
    let reversedArray = charArray.reverse();
    
    // Step 3: Join the reversed array of characters back into a single string using join('')
    // Example: ['a', 'k', 'a', 'y', 'a', 'n', 'i', 'v'] becomes "akayaniV"
    let reversedString = reversedArray.join('');
    
    // Return the reversed string
    return reversedString;
}

// Call the reverseAstring function with the input string "vinayaka"
// Log the reversed string to the console
console.log(reverseAstring('vinayaka')); // Expected output: "akayaniV"
