// Function to demonstrate the Temporal Dead Zone (TDZ)
function demonstrateTDZ() {
    try {
        // Attempt to access temporalVariable before its declaration
        // This will throw a ReferenceError because let and const variables 
        // are in the Temporal Dead Zone (TDZ) until their declaration is executed.
        console.log(temporalVariable);
    } catch (error) {
        // Catch the error and log a custom message
        console.log(`Error: ${error.message}`); 
        // Example output: "Error: Cannot access 'temporalVariable' before initialization"
    }

    // Declare and initialize the variable after the try-catch block
    let temporalVariable = "TDZ passed";

    // Log the variable after declaration to demonstrate successful access
    console.log(temporalVariable); // Output: "TDZ passed"
}

// Call the function to execute the TDZ demonstration
demonstrateTDZ();


// Temporal Dead Zone (TDZ) in JavaScript

// The TDZ is the period between the start of a variable’s scope and when it is declared.
// Accessing a variable declared with let or const before its declaration results in a ReferenceError.