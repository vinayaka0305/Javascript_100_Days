// Input string that contains brackets
const inputString = "{()}";

// Object that defines matching pairs of brackets
const bracketPair = { "{": "}", "[": "]", "(": ")" };

// Convert the input string into an array of individual characters
const characters = [...inputString];

console.log(characters); // Log the array of characters (["{", "(", ")", "}"])

// Array to store balanced characters as we process them
const balancedChar = [];

// Iterate over each character in the characters array
characters.forEach((char) => {
  // Check if the current character is an opening bracket that has a matching closing bracket in the bracketPair object
  if (characters.includes(bracketPair[char])) {
    // If true, push the opening bracket (char) to the balancedChar array
    balancedChar.push(char);

    // Push the matching closing bracket (bracketPair[char]) to the balancedChar array
    balancedChar.push(bracketPair[char]);
  }
});

// Compare the length of the balancedChar array with the original characters array
// If the lengths are equal, log "balanced", otherwise log "not balanced"
console.log(
  balancedChar.length === characters.length ? "balanced" : "not balanced"
);
