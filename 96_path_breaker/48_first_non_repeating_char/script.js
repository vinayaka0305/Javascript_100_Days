function findFirstNonRepeatingChar(str) {
    const charCount = {}; // Object to store the frequency of each character
  
    // Count the occurrences of each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1; // Increment count or initialize to 1
    }
  
    // Iterate through the string again to find the first character with count 1
    for (let char of str) {
      if (charCount[char] === 1) {
        return char; // Return the first non-repeating character
      }
    }
  
    return null; // Return null if all characters are repeating
  }
  
  // Test cases
  console.log(findFirstNonRepeatingChar("javascript")); // Output: "j" (First non-repeating character)
  console.log(findFirstNonRepeatingChar("swiss")); // Output: "w" (First non-repeating character)
  console.log(findFirstNonRepeatingChar("aabbcc")); // Output: null (No non-repeating character)
  