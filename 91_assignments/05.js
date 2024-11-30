// Function to round a number to the nearest integer
function round(num) {
    // Use Math.round() to round the number
    // Math.round() rounds to the nearest integer:
    // If the fractional part is 0.5 or higher, it rounds up
    // If the fractional part is less than 0.5, it rounds down
    return Math.round(num);
}

// Test the round function with a sample input
console.log(round(1.5)); // Logs: 2
