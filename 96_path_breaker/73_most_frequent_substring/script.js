function mostFrequentSubstring(str) {
    const count = {}; // Object to store substring frequencies
    let maxFreq = 0; // Variable to track the highest frequency
    let result = ""; // Variable to store the most frequent substring
  
    // Generate all substrings of length > 1
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 2; j <= str.length; j++) { // Start from length 2 to skip single characters
        let sub = str.slice(i, j); // Extract substring
        count[sub] = (count[sub] || 0) + 1; // Increment frequency count
  
        // Update result if a more frequent substring is found
        if (
          count[sub] > maxFreq || // If the current substring is more frequent
          (count[sub] === maxFreq && sub.length > result.length) // If frequency is same but substring is longer
        ) {
          maxFreq = count[sub]; // Update max frequency
          result = sub; // Update most frequent substring
        }
      }
    }
  
    return result; // Return the most frequent substring
  }
  
  // Example usage
  console.log(mostFrequentSubstring("banana")); // Output: "ana"
  