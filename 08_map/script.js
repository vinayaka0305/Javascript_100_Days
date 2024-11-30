const arr = [1,2,3,4,5];

// Use the map() method to create a new array 'double'.
// map() loops through each element of 'arr' and applies the function to each element.
// The function takes three arguments: 'currentVal', 'index', and 'array'.

// const double = arr.map((currentVal)=>currentVal*2)
// const double = arr.map((currentVal,index)=>arr[index]*2)
const double = arr.map((currentVal,index,array)=>array[index]*2)


  // 'array[index]' gets the current element from the original array 'arr' using its index.
    // The element is then multiplied by 2 and returned for each element in the new array.
console.log(double);
