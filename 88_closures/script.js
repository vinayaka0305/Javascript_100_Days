// Define the generateOrder function
function generateOrder() {
    // Create a variable to track the order count
    // This variable is scoped to the generateOrder function and persists due to closure
    let count = 0;

    // Define the inner function
    function fnc() {
        // Increment the count each time this function is called
        count++;
        // Return the current total orders as a formatted string
        return `Total orders = ${count}`;
    }

    // Return the inner function, allowing it to be called outside of generateOrder
    return fnc;
}

// Create an instance of the order generator
// The returned function (closure) is stored in the orderCounter variable
const orderCounter = generateOrder();

// Call the closure function to generate and log orders
console.log(orderCounter()); // Total orders = 1 (First call increments count to 1)
console.log(orderCounter()); // Total orders = 2 (Second call increments count to 2)
console.log(orderCounter()); // Total orders = 3 (Third call increments count to 3)
