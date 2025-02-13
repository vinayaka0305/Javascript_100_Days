// Calling the function before its declaration to demonstrate function hoisting
hoistedFunctionDemo(); // Works fine due to function hoisting

// Function Declaration - Hoisting Demonstration
function hoistedFunctionDemo() {
    console.log('Function hoistedFunctionDemo called');
}

// Attempting to call function expression before its declaration
// This will cause a ReferenceError due to the Temporal Dead Zone (TDZ)
try {
    tdzFunctionExpression(); // Throws ReferenceError: Cannot access before initialization
} catch (error) {
    console.log(`Error: ${error.message}`); // Logs the error message
}

// Function Expression assigned to const (TDZ Demonstration)
const tdzFunctionExpression = () => {
    console.log("Function tdzFunctionExpression called");
};

// Calling function expression after declaration ( Works fine)
tdzFunctionExpression();
