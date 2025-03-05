//function currying in js is a technique where a function takes multiple arguments,but instead of taking them all at once, it takes them one at a time,returing  a new function for each argument.

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3));

//Infinite currying

//Infinite currying is when a function returning another function until a final call has made to get the result;

//How infinite currying works?
//Instead of calling a function with all arguments at once,we keep calling it one argument at a time.
//It returns the result when no argument is passed

//Example:

function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b); //keep returing a function
    }
    return a;
  };
}

console.log(sum(2)(3)(5)(10)());

// How It Works:
// add(2) → returns function (b) { return add(2 + b) }
// add(2)(3) → returns function (b) { return add(5 + b) }
// add(2)(3)(5) → returns function (b) { return add(10 + b) }
// add(2)(3)(5)(10) → returns function (b) { return add(20 + b) }
// add(2)(3)(5)(10)() → Since no argument is passed, returns 20.
