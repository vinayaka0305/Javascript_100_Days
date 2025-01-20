function sum(a, b) {
  if (b !== undefined) {
    return a + b;
  }
  return function (c) {
    return a + c;
  };
}

console.log(sum(1, 2));
console.log(sum(1)(2));


// Explanation:

// sum(1, 2):
// Both a and b are provided, so the condition b !== undefined is true.
// The function directly returns a + b, which is 1 + 2 = 3

// sum(1)(2):
// The first call (sum(1)) only provides the argument a and does not provide b. Hence, the condition b !== undefined is false.
// The function returns another function that takes c as its argument.
// In the second call, the returned function receives c = 2 and calculates the sum a + c, which is 1 + 2 = 3.



// This design supports both direct invocation (sum(1, 2)) and curried invocation (sum(1)(2)).
















