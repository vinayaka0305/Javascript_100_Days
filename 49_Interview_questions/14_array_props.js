function arrayProperties(arr1, arr2) {
    // Step 1: Combine the two arrays into one using `concat`
    let arr3 = arr1.concat(arr2);
    
    // Step 2: Add the entire second array `arr2` as an element to `arr3` using `push`
    arr3.push(arr2);
    console.log(arr3); // Output the current state of `arr3`
    // Expected output: 
    // ["pipeapple", "orange", "banana", "apple", "mango", "watermelon", ["apple", "mango", "watermelon"]]
  
    // Step 3: Remove the last element using `pop` (i.e., the nested array we just added)
    arr3.pop();
    console.log(arr3); // Output the current state after popping
    // Expected output: 
    // ["pipeapple", "orange", "banana", "apple", "mango", "watermelon"]
  
    // Step 4: Reverse the array using `reverse`
    arr3.reverse();
    console.log(arr3); // Output the reversed array
    // Expected output: 
    // ["watermelon", "mango", "apple", "banana", "orange", "pipeapple"]
  
    // Step 5: Find the last index of the element "orange" using `lastIndexOf`
    console.log(arr3.lastIndexOf("orange")); 
    // Expected output: The index of "orange" in the reversed array, which is 4
  
    // Step 6: Get a slice of the first 3 elements using `slice` and find its length
    console.log(arr3.slice(0, 3).length); 
    // Expected output: 3, since we are taking the first three elements
  
    // Step 7: Join the first 3 elements into a string separated by commas using `join`
    console.log(arr3.slice(0, 3).join(','));
    // Expected output: A string of the first 3 elements joined with commas: "watermelon,mango,apple"
  }
  
  // Call the function with two example arrays
  arrayProperties(
    ["pipeapple", "orange", "banana"],
    ["apple", "mango", "watermelon"]
  );
  