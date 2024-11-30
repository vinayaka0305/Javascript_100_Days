// Define a function `my_reduce` that takes an array, a callback function, and an initial value
const my_reduce = (array, callback, initialValue) => {
    // Initialize the accumulator with the given initial value
    let accumulator = initialValue;
  
    // Loop through each element in the array
    for (let index = 0; index < array.length; index++) {
      // Update the accumulator by calling the callback function with the current accumulator value, 
      // the current array element, the current index, and the array itself
      accumulator = callback(accumulator, array[index], index, array);
    }
    // Return the accumulated result after processing all elements
    return accumulator;
  };
  
  // Create an array of numbers
  const numbers = [1, 2, 3, 4, 5];
  
  // Use `my_reduce` to calculate the sum of the numbers array
  // The callback function adds each current element (curr_num) to the accumulator
  const sum = my_reduce(
    numbers,
    (accumulator, curr_num) => accumulator + curr_num,
    0 // Initial value for the accumulator is 0
  );
  
  // Log the sum of the numbers to the console
  console.log(sum);
  


//   my_reduce is a custom function that replicates the functionality of Array.prototype.reduce.
// It iterates over each element in array, applying the callback function to update the accumulator.
// In the example, my_reduce calculates the sum of the elements in numbers, starting with 0 as the initialValue. Each element is added to the accumulator in sequence, resulting in the total sum.