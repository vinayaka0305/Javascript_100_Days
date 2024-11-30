let number = 0; // Declare a variable 'number' and initialize it to 0

console.log(number++); // Outputs: 0
// Explanation:
// - This is a post-increment operation.
// - 'number++' increments the value of 'number', but it returns the original value before incrementing.
// - So, the value of 'number' is printed as 0 first, but after this line, 'number' becomes 1.

console.log(++number); // Outputs: 2
// Explanation:
// - This is a pre-increment operation.
// - '++number' increments the value of 'number' first and then returns the new value.
// - Since 'number' was 1 before this line, it is incremented to 2 and printed as 2.

console.log(number); // Outputs: 2
// Explanation:
// - This prints the current value of 'number', which is now 2 after the previous increments.

// Post-increment (number++): Returns the value before incrementing, then increases the value.

// Pre-increment (++number): Increments the value first, then returns the new value.
