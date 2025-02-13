// Adding a method to the Array prototype that squares numeric elements and sorts them in ascending order
Array.prototype.squareAndSort = function () {
    // Filter out non-number values from the array
    const squaredNums = this.filter((val) => typeof val === "number")
      // Square each number in the filtered array
      .map((val) => val ** 2)
      // Sort the squared numbers in ascending order
      .sort((a, b) => a - b);
  
    // Return the processed array
    return squaredNums;
  };
  
  // Define an array containing numbers and a string
  const numbers = [1, 5, 3, "four", 2];
  
  // Call the custom method on the array and log the result
  console.log(numbers.squareAndSort()); // Output: [1, 4, 9, 25]
  