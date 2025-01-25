// A function `curry` that demonstrates currying with fixed arguments
function curry(a) {
    // First function accepts the first argument `a` and returns another function
    return function (b) {
      // Second function accepts the second argument `b` and returns another function
      return function (c) {
        // Third function accepts the third argument `c` and returns the sum of a, b, and c
        return a + b + c;
      };
    };
  }
  
  // Example usage of the `curry` function
  console.log(curry(1)(2)(3)); // Output: 6
  
  // A function `infinteCurry` that supports an infinite number of arguments using currying
  function infinteCurry(a) {
    // Inner function takes the next argument `b`
    return function (b) {
      // If `b` is not undefined, recursively call `infinteCurry` with the updated sum (a + b)
      if (b !== undefined) {
        return infinteCurry(a + b);
      }
      // If `b` is undefined, return the accumulated sum
      return a;
    };
  }
  
  // Example usage of `infinteCurry` with multiple arguments
  console.log(infinteCurry(1)(2)(10)(100)()); // Output: 113
  