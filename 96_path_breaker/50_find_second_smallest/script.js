function findSecondSmallest(arr) {
  let first = Infinity; // Variable to store the smallest number
  let second = Infinity; // Variable to store the second smallest number

  // Iterate through the array to find the first and second smallest numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      // If current element is smaller than 'first', update both 'first' and 'second'
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      // If current element is greater than 'first' but smaller than 'second', update 'second'
      second = arr[i];
    }
  }

  // If no second smallest number exists (e.g., all elements are the same), return null
  return second === Infinity ? null : second;
}

// Test cases
console.log(findSecondSmallest([-2, 1, 3, 5])); // Output: 1 (Second smallest number)
console.log(findSecondSmallest([4, 4, 4, 4])); // Output: null (All elements are the same)
console.log(findSecondSmallest([10])); // Output: null (Only one element)
console.log(findSecondSmallest([-5, -10, -15, -20])); // Output: -15 (Second smallest number)

//   How does it work?
// Starting condition:

// Infinity is the highest possible number in JavaScript.
// Any real number in the array will be smaller than Infinity, so the first number will always replace first.
