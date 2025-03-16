function findAllDuplicates(arr) {
    const seen = new Set(); // A Set to track numbers we've seen
    const duplicates = new Set(); // A Set to store duplicate numbers
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        // If the number is already in 'seen', it's a duplicate, so add it to 'duplicates'
        duplicates.add(arr[i]);
      } else {
        // Otherwise, add it to 'seen' to mark it as encountered
        seen.add(arr[i]);
      }
    }
  
    // Convert the 'duplicates' Set to an array and return it
    return [...duplicates];
  }
  
  // Test cases
  console.log(findAllDuplicates([1, 2, 1, 2, 4, 5, 3])); // Output: [1, 2] (Duplicates)
  console.log(findAllDuplicates([1, 2, 4, 5, 3, 5, 6, 7, 6, 6])); // Output: [5, 6] (Duplicates)
  