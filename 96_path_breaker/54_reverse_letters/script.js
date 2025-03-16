function reverseOnlyLetters(str) {
    // Extract only the letters from the string using regex
    let letters = str.match(/[a-zA-Z]/g); // This returns an array of letters in order
    console.log(letters); // Debugging: Log the extracted letters
  
    // Replace only the letters in the original string with reversed ones
    return str.replace(/[a-zA-Z]/g, () => letters.pop()); // letters.pop() removes & returns the last letter each time
  }
  
  // Test cases
  console.log(reverseOnlyLetters("a1b!c")); // Output: "c1b!a"
  console.log(reverseOnlyLetters("Ab3,c!D")); // Output: "Db3,c!A"
  console.log(reverseOnlyLetters("123!@#")); // Output: "123!@#" (No change)
  