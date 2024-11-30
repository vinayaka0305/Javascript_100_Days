// Logs a standard message to the console
console.log("hello");

// Logs an error message to the console, typically styled in red to indicate an issue
console.error("this is an error message");

// Logs a warning message to the console, often styled in yellow as a caution indicator
console.warn("this is a warning");

// Defines an array of user objects with id, name, and age properties
const users = [
  { id: 1, name: "bob", age: 30 },
  { id: 2, name: "john", age: 40 },
];

// Logs the user array as a formatted table in the console for easier readability
console.table(users);

// Starts a timer labeled "loop time" to measure how long it takes for the loop to execute
console.time("loop time");

// Executes a simple loop 10,000 times
for (let i = 0; i < 10000; i++) {}

// Stops the timer and logs the time elapsed since console.time("loop time") was called
console.timeEnd("loop time");
