function topkFrequent(nums, k) {
  let freqMap = {}; // Create an empty object to store frequency counts

  // Step 1: Count the frequency of each number
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1; // Increment count, default to 0 if not found
  }

  // console.log(freqMap);
  // console.log(Object.keys(freqMap))
  // console.log(Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]))
  // console.log(Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]).map(Number))

  // Step 2: Sort numbers based on frequency in descending order
  return Object.keys(freqMap) // Get all unique numbers as an array (keys are strings)
    .sort((a, b) => freqMap[b] - freqMap[a]) // Sort by frequency (highest first)
    .slice(0, k) // Get the top k frequent numbers
    .map(Number); // Convert string keys back to numbers
}

// Test cases
console.log(topkFrequent([1, 1, 2, 2, 3], 2)); // Output: [1, 2] (Most frequent: 1 and 2)
console.log(topkFrequent([1, 2, 3, 4, 4, 5], 1)); // Output: [4] (Most frequent: 4)
console.log(topkFrequent([4, 4, 4, 6, 6, 6, 6, 7, 8], 1)); // Output: [6] (Most frequent: 6)
