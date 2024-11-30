// Define a function `outerFunction` which contains a local variable and an inner function.
const outerFunction = () => {
    const outerVariable = "hello"; // Declare a local variable `outerVariable` inside `outerFunction`.
    
    // Define an inner function `innerFunction` that can access `outerVariable`.
    const innerFunction = () => {
        console.log(outerVariable); // `innerFunction` can access `outerVariable` due to closure 
    }
    
    return innerFunction; // Return the `innerFunction` as the result of `outerFunction`.
}

// Call `outerFunction` and store the returned `innerFunction` into `result`.
const result = outerFunction();

// Call the `result` function (which is `innerFunction`).
// Output: "hello" - `innerFunction` still has access to `outerVariable` even though `outerFunction` has already finished executing.
result();

// Key concepts:
// Closure: The key idea here is that when outerFunction is executed, it returns innerFunction. Even though outerFunction finishes execution, the returned innerFunction remembers the variables from its outer scope (in this case, outerVariable). This is called a closure. Closures allow the inner function to have access to variables from its containing function even after the outer function has completed execution.

// How it works:

// outerFunction() is called, which creates a local variable outerVariable with the value "hello".
// It defines the innerFunction, which can reference outerVariable and then returns innerFunction.
// The result now holds the innerFunction returned by outerFunction.
// When you call result(), you are essentially calling innerFunction, which still remembers the value of outerVariable due to closure, and it prints "hello".
// This is a classic example of closures in JavaScript, where a function retains access to the scope in which it was created, even after that scope has finished executing.
