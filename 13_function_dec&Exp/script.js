// Function declaration
// This defines a named function 'getData' that can be called anywhere in the code after it's defined
function getData() {
  // The function returns an object with two properties: data and statuscode
  return { data: "hello from getdata", statuscode: 200 };
}

// Calling the 'getData' function and logging the returned object to the console
console.log(getData()); // Logs {data: 'hello from getdata', statuscode: 200}

// Function expression (arrow function)
// Defines a constant 'getMessage' and assigns an arrow function to it
const getMessage = () => {
  // The function returns an object with two properties: data and statuscode
  return { data: "hello from getmessage", statuscode: 200 };
};

// Calling the 'getMessage' function and logging the returned object to the console
console.log(getMessage()); // Logs {data: 'hello from getmessage', statuscode: 200}

// Key Differences Between Function Declaration and Function Expression:

// Function Declaration:

// Defined using the function keyword and can be called anywhere in the code (even before it's defined) because of hoisting.
// Example: function getData() {}

// Function Expression (Arrow Function in this case):

// Defined using the arrow function syntax (()=>{}) and is stored in a variable (getMessage in this case).
// Arrow functions do not have their own this context.
// They are not hoisted, meaning you can only call them after they are defined.
// Example: const getMessage = () => {}
// Both functions in this example return objects with the same structure, but their syntax and scope handling are different.

// In JavaScript, arrow functions differ from regular functions in that they do not have their own this context. Instead, they inherit this from the surrounding lexical context (i.e., where the function is defined). This is one of the key distinctions between arrow functions and traditional functions.
