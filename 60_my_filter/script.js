// Define a function `my_filter` that takes an array and a callback function as arguments
const my_filter = (array, callback) => {
  // Initialize an empty array to store the filtered results
  const result = [];

  // Loop through each element in the array
  for (let index = 0; index < array.length; index++) {
    // Check if the current element passes the condition defined in the callback function
    if (callback(array[index], index, array)) {
      // If the condition is met, add the current element to the result array
      result.push(array[index]);
    }
  }
  // Return the result array containing only the elements that passed the condition
  return result;
};

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call `my_filter` on the `numbers` array, filtering for numbers greater than 1
console.log(my_filter(numbers, (number) => number > 1));

//   my_filter is a custom function that mimics the behavior of the Array.prototype.filter method.
// It iterates over each item in the input array and applies the callback function to determine if an item should be included in the result.
// If the callback returns true for an item, that item is pushed into result.
