var globalMessage = "Hello global scope!";

function scopeDemo() {
  var functionmessage = "Hello function scope!";
  console.log(functionmessage);
  if (true) {
    let blockMessage = "Hello, block scope!";
  }
  console.log(blockMessage);
}

try {
  scopeDemo();
  console.log(globalMessage);
} catch (error) {
  console.log(error);
}


// Explanation of Scope:
// Global Scope (globalMessage):

// Declared with var, accessible anywhere in the script.
// Logged successfully in the global scope.
// Function Scope (functionMessage):

// Declared inside functionScopeDemo using var.
// Can only be accessed inside the function.
// Attempting to access it outside the function results in a ReferenceError.
// Block Scope (blockMessage):

// Declared using let inside an if block.
// Accessible only within the block.
// Attempting to access it outside the block results in a ReferenceError.
