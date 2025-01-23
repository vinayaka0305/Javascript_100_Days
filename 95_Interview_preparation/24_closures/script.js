// Function to create a counter with an initial value
function createCounter(initialVal) {
    return {
        // Method to increment the counter
        // It increases the `initialVal` by 1 and returns the updated value
        increment: function () {
            return ++initialVal; // Pre-increment: increment first, then return the updated value
        },

        // Method to decrement the counter
        // It decreases the `initialVal` by 1 and returns the updated value
        decrement: function () {
            return --initialVal; // Pre-decrement: decrement first, then return the updated value
        }
    };
}

// Create a new counter instance with an initial value of 5
const counter = createCounter(5);

console.log(counter.increment()); // Logs: 6 (increments the value from 5 to 6)
console.log(counter.increment()); // Logs: 7 (increments the value from 6 to 7)
console.log(counter.increment()); // Logs: 8 (increments the value from 7 to 8)
console.log(counter.decrement()); // Logs: 7 (decrements the value from 8 to 7)
