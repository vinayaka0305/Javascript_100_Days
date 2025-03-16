function findSecondLargest(arr) {
    let firstLargest = -Infinity; // Variable to store the largest number
    let secondLargest = -Infinity; // Variable to store the second largest number
  
    // Loop through the array to find the largest and second largest numbers
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > firstLargest) {  
        // If current element is greater than firstLargest, update both firstLargest and secondLargest
        secondLargest = firstLargest;
        firstLargest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
        // If current element is greater than secondLargest but not equal to firstLargest, update secondLargest
        secondLargest = arr[i];
      }
    }
  
    // If no second largest number exists, return null instead of -Infinity
    return secondLargest === -Infinity ? null : secondLargest;
  }
  
  // Test case
  console.log(findSecondLargest([5, 5, 5])); // Output: null (All elements are the same, no second largest number)
  
//   Why?
// If we start with 0 or another number, negative numbers in the array might not be handled correctly.

// -Infinity is smaller than any possible number, so the first element will always replace it.