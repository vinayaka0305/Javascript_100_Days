// Currying is a technique where a function takes arguments one at a time, returning a new function for each argument until all are provide

// A function named 'addition' is defined, which takes one argument 'a'.
function addition(a) {
    // This function returns another function that takes one argument 'b'.
    return function (b) {
      // The inner function returns another function that takes one argument 'c'.
      return function (c) {
        // This final function computes the sum of 'a', 'b', and 'c' and returns it.
        return a + b + c;
      };
    };
  }
  
  // Here, 'addition(1)' returns a function that expects the second argument (b).
  // Then '(2)' calls that returned function with 'b = 2', which returns another function expecting 'c'.
  // Finally, '(3)' calls the last function with 'c = 3', which computes and returns 1 + 2 + 3 = 6.
  console.log(addition(1)(2)(3)); // Output: 6

  
  ///Infinite currying works by recursively returning a function until a terminating condition met 
  //it is a powerful concept to handle dynamic and flexible arguments;


  function add(a) {
    // The outer function takes an argument 'a' and returns an inner function.
    return function (b) {
      // The inner function checks if 'b' is not undefined.
      if (b !== undefined) {
        // If 'b' is provided, recursively call the 'add' function with the sum of 'a + b'.
        return add(a + b);
      }
      // If no argument is passed (b is undefined), return the accumulated sum 'a'.
      return a;
    };
  }
  
  // Usage of the 'add' function
  // Step 1: add(1) returns a function waiting for the next argument.
  // Step 2: (10) calls the inner function with b = 10.
  //         This results in add(1 + 10) = add(11).
  // Step 3: () calls the inner function without an argument.
  //         Since b is undefined, it returns the accumulated sum 11.
  console.log(add(1)(10)()); // Output: 11
  