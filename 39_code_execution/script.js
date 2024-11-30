console.log("start"); // Logs "start" to the console immediately

setTimeout(() => {
  // Schedules the callback to run after all synchronous code has completed
  console.log("setTime-out"); // Logs "setTime-out" to the console after the current event loop completes (asynchronously)
});

Promise.resolve().then(() => {
  // Creates a resolved promise and schedules its `.then` to be executed in the microtask queue
  console.log("promise"); // Logs "promise" after the synchronous code is done but before the next macro task (setTimeout)
});

console.log("end"); // Logs "end" to the console immediately after "start"
// Simplified Execution Flow:


// Synchronous code runs first:

// This is your normal code that runs line by line. In your example, "start" and "end" are printed immediately.

// Microtasks run next:

// After all synchronous code finishes, JavaScript checks if there are any microtasks (like a resolved promise). If so, it runs them. In your case, the promise resolves, so "promise" is printed.


// Macrotasks run last:

// Once both synchronous code and microtasks are done, JavaScript will run any macrotasks. In your case, the setTimeout callback is a macrotask, so it prints "setTime-out" last.
