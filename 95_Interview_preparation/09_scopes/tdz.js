{
    // The variables 'myVar' and 'myConst' are declared later in the block.
    // So, at this point, they are in the Temporal Dead Zone (TDZ).

    console.log(myVar);  // ReferenceError: Cannot access 'myVar' before initialization
    console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

    // Declaring variables
    let myVar;        // Declaring 'myVar', TDZ ends after this line
    const myConst = 10; // Declaring 'myConst' with an initial value of 10, TDZ ends after this line

    // Now the variables are initialized and can be accessed.
    console.log(myVar);  // Output: undefined (because 'myVar' is declared but not initialized yet)
    console.log(myConst); // Output: 10 (because 'myConst' has been initialized with the value 10)
}


// Key Concepts:
// TDZ (Temporal Dead Zone): The time between the declaration of let or const variables and their initialization, during which they cannot be accessed.
// let and const are hoisted but remain in the TDZ until they are initialized.
