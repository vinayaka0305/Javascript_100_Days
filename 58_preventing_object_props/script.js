// Create an object 'user' with properties 'name' and 'age'
const user = { name: "john", age: 30 };

// Freeze the object to prevent any modifications to it
Object.freeze(user);

// Attempting to modify the 'name' property of the frozen object
user.name = "vinayaka"; // This line will not have any effect because 'user' is frozen

// Log the 'user' object to the console to see if it changed
console.log(user); // Output will still be { name: "john", age: 30 }


// Explanation
// Object.freeze() makes the user object immutable, so changes to its properties (like user.name) are ignored.

// After freezing, any attempts to modify the object will silently fail (in non-strict mode), leaving user unchanged.