// Function to calculate the total tax based on the sum of num1 and num2
function calculateTotal(num1, num2) {
    // Logs the calculated tax based on the tax rate from the `this` context
    console.log(this.tax * (num1 + num2));  
  }
  
  function solve(taxObj, x, y) {
    // Using `call()` to invoke the `calculateTotal` function with `taxObj` as the context (`this`).
    // It directly passes `x` and `y` as arguments to `calculateTotal`.
    calculateTotal.call(taxObj, x, y);
  
    // Using `apply()` to invoke the `calculateTotal` function with `taxObj` as the context (`this`).
    // `apply()` expects the arguments to be passed as an array, so we use `[x, y]`.
    calculateTotal.apply(taxObj, [x, y]);
  
    // Using `bind()` to create a new function bound to the `taxObj` context. 
    // The bound function can be called later with any arguments.
    const boundCalculateTotal = calculateTotal.bind(taxObj);
  
    // Returning the bound function so it can be invoked later.
    return boundCalculateTotal;
  }
  
  // Defining the `taxObj` with a tax rate of 0.1 (10% tax)
  const taxObj = {
    tax: 0.1
  };
  
  // Calling the `solve` function with the tax object and two numbers, 10 and 20.
  // This will first calculate the tax using `call()` and `apply()`, 
  // and then return the `boundCalculateTotal` function.
  const result = solve(taxObj, 10, 20);
  
  // Calling the bound function with arguments 10 and 20
  // This will use the bound context (`taxObj`) and log the tax calculation.
  result(10, 20);
// From the first call() execution (tax = 0.1 * (10 + 20) = 3)
// From the second apply() execution (tax = 0.1 * (10 + 20) = 3)
// From the bound function (tax = 0.1 * (10 + 20) = 3)
