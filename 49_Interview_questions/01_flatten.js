const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  
  // Define a function named `flattenArr` that takes two parameters: 
  // an array `arr` and an integer `n` that represents the depth level to flatten.
  const flattenArr = (arr, n) => {
  
    // Base case: if `n` is 0, return the array as is (no more flattening).
    if (n === 0) return arr;
  
    // Create an empty array `res` to store the flattened result.
    const res = [];
  
    // Iterate over each element in the input array `arr`.
    for (let i = 0; i < arr.length; i++) {
  
      // Check if the current element is a number (primitive value).
      if (typeof arr[i] === "number") {
  
        // If it's a number, push it directly to the `res` array.
        res.push(arr[i]);
  
      } else {
  
        // If the element is an array, recursively call `flattenArr` on it.
        // Reduce the depth `n` by 1 for each recursive call.
        // Use the spread operator (...) to flatten the result into `res`.
        res.push(...flattenArr(arr[i], n - 1));
      }
    }
  
    // Return the fully flattened array `res`.
    return res;
  };
  
  // Test the `flattenArr` function by passing the array `arr` and flattening to depth 1.
  console.log(flattenArr(arr, 1)); // Output will be [1, 2, 3, 4, 5, 6] after flattening to depth 1
  

//   The spread operator (...) is used to take all elements from an array and "spread" them into another array or function call. In the context of your code, the spread operator is used to flatten the result into the array res.

// Without the Spread Operator:

// If you push an array directly into another array, you end up with a nested array. For example:

// javascript
// Copy code
// res.push(flattenArr(arr[i], n - 1));

// This would add the entire array returned by flattenArr as a single element in res, causing nesting. For example, if flattenArr(arr[i], n - 1) returns [1, 2], then res.push([1, 2]) would result in:
// res = [[1, 2]];  // Nested array


// With the Spread Operator (...):
// When you use the spread operator, it "unpacks" the elements of the array returned by flattenArr and pushes them individually into res, which prevents further nesting:

//res.push(...flattenArr(arr[i], n - 1));

// This takes each element of [1, 2] and adds them separately to res, resulting in:

//res = [1, 2];  // Flattened

// So in simple terms, the spread operator allows you to take all elements from an inner array and directly place them into res, avoiding unnecessary array nesting. It helps in flattening the array by bringing the elements to the top level of res