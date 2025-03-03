//difference execution and test methods in js

//Execution in JS means actually running the code so it performs its tasks,like dislaying something on the screen or calculting a number

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

//test method in js a function used to check if a piece of code works correctly by comparing expected results with actual results


console.assert(add(2, 3) === 5, "Test failed");
