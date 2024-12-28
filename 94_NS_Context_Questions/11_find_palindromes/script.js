function printAllPalindromes(s) {
    let result = []; // Array to store all palindromic substrings
  
    // Helper function to check and collect palindromes centered at left and right
    function checkAndUpdatePalindromes(left, right) {
      // Expand around the center as long as the characters match
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        // Add the palindrome substring to the result
        result.push(s.substring(left, right + 1));
        // Expand outward to check for larger palindromes
        left--;
        right++;
      }
    }
  
    // Iterate over the string to consider every possible center for palindromes
    for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindromes (single-character center)
      checkAndUpdatePalindromes(i, i);
  
      // Check for even-length palindromes (two-character center)
      checkAndUpdatePalindromes(i, i + 1);
    }
  
    // Return the array of all palindromic substrings
    return result;
  }
  
  // Test the function with the example input
  const palindromes = printAllPalindromes("abccb");
  
  // Print all collected palindromic substrings, each on a new line
  console.log(palindromes.join('\n'));
  