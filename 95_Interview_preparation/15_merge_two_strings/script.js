// Function to merge two strings alternately
function mergeStringAlternately(str1, str2) {
    let merged = ""; // Initialize an empty string to store the merged result
    let maxLength = Math.max(str1.length, str2.length); // Find the length of the longer string
  
    // Loop through up to the length of the longer string
    for (let i = 0; i < maxLength; i++) {
      // Check if the current index exists in str1
      if (i < str1.length) {
        merged += str1[i]; // Add the character from str1 to the merged string
      }
      // Check if the current index exists in str2
      if (i < str2.length) {
        merged += str2[i]; // Add the character from str2 to the merged string
      }
    }
  
    // Return the final merged string
    return merged;
  }
  
  // Test the function with example inputs
  console.log(mergeStringAlternately("Hello", "World123")); 
  // Expected Output: "Hweolrllod123"
  