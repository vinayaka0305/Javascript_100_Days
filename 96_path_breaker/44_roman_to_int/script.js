function romanToInt(s) {
    // Mapping of Roman numerals to integer values
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let total = 0; // Variable to store the final integer value
  
    // Loop through each character in the Roman numeral string
    for (let i = 0; i < s.length; i++) {
      let curr = romanMap[s[i]];     // Get the integer value of the current Roman numeral
      let next = romanMap[s[i + 1]]; // Get the integer value of the next Roman numeral
  
      // If the next numeral is larger, subtract the current value (e.g., IV = 5 - 1)
      if (next > curr) {
        total -= curr;
      } else {
        total += curr; // Otherwise, simply add the current value
      }
    }
  
    return total; // Return the final computed integer
  }
  
  // Test cases
  console.log(romanToInt("III"));    // Output: 3
  console.log(romanToInt("X"));      // Output: 10
  console.log(romanToInt("IX"));     // Output: 9
  console.log(romanToInt("LVIII"));  // Output: 58
  console.log(romanToInt("MCMXCIV")); // Output: 1994 (additional test case)
  