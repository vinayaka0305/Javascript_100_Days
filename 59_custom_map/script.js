// Define a custom 'myMap' function that mimics the behavior of the Array.prototype.map() method
const myMap = (array, callback) => {
    // Create an empty array 'result' to store the transformed elements
    const result = [];
    
    // Loop through each element in the input array
    for (let index = 0; index < array.length; index++) {
      // Call the 'callback' function on each element, passing the element, its index, and the array
      // Push the result of the callback function into the 'result' array
      result.push(callback(array[index], index, array));
    }
    
    // Return the new array containing the transformed elements
    return result;
  };
  
  // Test array 'numbers'
  const numbers = [1, 2, 3, 4, 5];
  
  // Call 'myMap' with 'numbers' array and a callback that returns the entire array (for each element)
  console.log(myMap(numbers, (num, index, array) => num * 2));
  