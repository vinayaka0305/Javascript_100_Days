function findLongestConsecutiveSequence(arr) {
    // If the array is empty, return an empty array
    if (!arr.length) return [];
  
    // Remove duplicates by converting the array into a Set and back to an array
    arr = [...new Set(arr)];
  
    // Sort the array in ascending order to make consecutive sequences easier to detect
    arr.sort((a, b) => a - b);
  
    let longest = []; // Stores the longest sequence found
    let current = [arr[0]]; // Stores the current sequence being built
  
    for (let i = 1; i < arr.length; i++) {
      // If the current number is consecutive to the previous number, add it to the sequence
      if (arr[i] === arr[i - 1] + 1) {
        current.push(arr[i]);
      } else {
        // If the sequence is broken, check if the current sequence is the longest found so far
        if (current.length > longest.length) {
          longest = current;
        }
        // Start a new sequence with the current number
        current = [arr[i]];
      }
    }
  
    // After the loop, check if the last sequence was the longest
    return current.length > longest.length ? current : longest;
  }
  
  // Example usage
  const arr = [100, 4, 200, 1, 2, 3];
  console.log(findLongestConsecutiveSequence(arr)); // Output: [1, 2, 3, 4]
  