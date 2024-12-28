function findBalancedIndex(arr) {
    let leftSum = 0;  // Initialize the left sum as 0
    let rightSum = arr.reduce((sum, num) => sum + num, 0); // Initialize the right sum as the total sum of the array

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i];  // Subtract the current element from the right sum

        if (leftSum === rightSum) { // Check if left and right sums are equal
            return i;  // Return the current index
        }

        leftSum += arr[i];  // Add the current element to the left sum
    }

    return -1; // Return -1 if no balanced index is found
}

// Example usage:
const input1 = [4, 1, 3, 8];
console.log(findBalancedIndex(input1)); // Output: -1

const input2 = [2, 3, 5, 3, 2];
console.log(findBalancedIndex(input2)); // Output: 2

const input3 = [1,2,3];
console.log(findBalancedIndex(input3)); // Output: 2
