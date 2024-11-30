const getNthlargestNumber = (arr, index) => {  
    // Function 'getNthlargestNumber' takes an array 'arr' and an 'index' to return the Nth largest number.

    const sortedArrDesc = arr.sort((a, b) => b - a);  
    // Sort the array in descending order (largest to smallest) using the 'sort' method.
    // 'b - a' ensures descending order by comparing pairs of values.

    console.log(sortedArrDesc);  
    // Log the sorted array to the console for debugging.

    const largestNumber = sortedArrDesc[index - 1];  
    // Access the Nth largest element by using 'index - 1' since array indices start at 0.

    return largestNumber;  
    // Return the Nth largest number.
}

console.log(getNthlargestNumber([10, 40, 24, 3], 2));  
// Call the function with the array [10, 40, 24, 3] and ask for the 2nd largest number.
// Log the result to the console.
