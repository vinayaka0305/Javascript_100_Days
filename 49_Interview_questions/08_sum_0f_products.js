function sumofProducts(n1, n2) {
    // Initialize sum to 0
    let sum = 0;

    // Find the length (number of digits) of n1
    let r1 = n1.toString().length;

    // Find the length (number of digits) of n2
    let r2 = n2.toString().length;

    // Print the lengths of n1 and n2 for debugging
    console.log(r1, 'r1');
    console.log(r2, 'r2');

    // Determine the smaller of the two lengths (i.e., the number of iterations needed)
    let count = r1 > r2 ? r2 : r1;

    // Print the count for debugging
    console.log('cnt', count);

    // Loop through the digits of n1 and n2 from right to left
    for (let i = 0; i < count; i++) {
        // Multiply the rightmost digits of n1 and n2 and add the product to sum
        sum = sum + (n1 % 10) * (n2 % 10);

        // Print the current sum for debugging
        console.log(sum);

        // Remove the rightmost digit from n1 by dividing it by 10 and truncating
        n1 = parseInt(n1 / 10);

        // Remove the rightmost digit from n2 by dividing it by 10 and truncating
        n2 = parseInt(n2 / 10);
    }

    // Return the final sum
    return sum;
}

// Call the function with n1 = 6 and n2 = 34, and print the result
console.log(sumofProducts(6, 34));

// Multiply the next set of digits: 
// 0×3=0
// Multiply the rightmost digits: 
// 6 × 4 = 24


//24+0=24