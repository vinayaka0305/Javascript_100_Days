// Define a function named `abc`
function abc() {
    // Log the property `xyz` of the function `abc` to the console
    console.log(abc.xyz);
}

// Call the function `abc` before assigning any value to its `xyz` property
abc(); 
// At this point, `abc.xyz` is `undefined` because the property `xyz` is not yet assigned

// Assign the value 400 to the property `xyz` of the function `abc`
abc.xyz = 400;

// Change the value of the `xyz` property to 200
abc.xyz = 200;

// Call the function `abc` again after modifying the `xyz` property
abc(); 
// Now, the console will log the current value of `abc.xyz`, which is 200
