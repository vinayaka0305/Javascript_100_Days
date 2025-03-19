const words = ["apple", "banana", "pen", "help"];
const letters = "elpoh";

// Function to check if a word can be formed from available letters
function canFormWord(word, letterFreq) {
  let wordFreq = {};

  // Count occurrences of each letter in the given word
  for (let char of word) {
    wordFreq[char] = (wordFreq[char] || 0) + 1;

    // Check if the required letter count exceeds available letters
    if (!letterFreq[char] || wordFreq[char] > letterFreq[char]) {
      return false; // Word cannot be formed
    }
  }

  return true; // Word can be formed
}

// Function to find all words that can be formed using the given letters
function findAllWordsThatMatchesLetters(words) {
  let letterFreq = {};

  // Count occurrences of each letter in the given set of letters
  for (let char of letters) {
    letterFreq[char] = (letterFreq[char] || 0) + 1;
  }

  // Filter words that can be formed using available letters
  return words.filter((word) => canFormWord(word, letterFreq));
}

console.log(findAllWordsThatMatchesLetters(words)); 
// Output: ["help"]
