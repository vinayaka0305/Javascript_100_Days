function sortWords(str) {
    return str
      .split(" ") // Split the input string into an array of words
      .sort((a, b) => a[a.length - 1] - b[b.length - 1]) // Sort words based on the last character (which is the number)
      .map((w) => w.slice(0, -1)) // Remove the last character (the number) from each word
      .join(" "); // Join the words back into a single string with spaces
  }
  
  // Example usage
  const str = "code3 love1 to2";
  console.log(sortWords(str)); // Output: "love to code"
  