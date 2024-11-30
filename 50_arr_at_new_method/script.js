const arr = ['a', 'b', 'c', 'd', 'e', 'f']; 
// 'arr' is an array containing 6 elements: ['a', 'b', 'c', 'd', 'e', 'f']

console.log(arr.at(-4)); 
// The 'at()' method is used to access elements from an array by their index.
// The argument '-4' means that we are accessing the element starting from the 4th position from the **end** of the array.
// The array looks like this when indexed negatively:
// [-6, -5, -4, -3, -2, -1]
//  'a', 'b', 'c', 'd', 'e', 'f'
// In this case, '-4' corresponds to the element 'c'.

// This will log 'c' to the console.

// The at() method allows you to access array elements using both positive and negative indices.